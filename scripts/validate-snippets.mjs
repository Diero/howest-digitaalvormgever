import { promises as fs } from 'fs';
import path from 'path';

async function findFiles(dir, ext) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (e) => {
      const res = path.resolve(dir, e.name);
      if (e.isDirectory()) return findFiles(res, ext);
      return res;
    })
  );
  return Array.prototype
    .concat(...files)
    .filter(Boolean)
    .flat()
    .filter((f) => f.endsWith(ext));
}

function normalizePrefix(p) {
  if (typeof p !== 'string') return p;
  return p.trim();
}

(async function main() {
  try {
    const snippetsDir = path.resolve('./snippets');
    const exists = await fs
      .stat(snippetsDir)
      .then(() => true)
      .catch(() => false);
    if (!exists) {
      console.error(
        'No `snippets/` directory found in the repository root. Aborting.'
      );
      process.exit(1);
    }

    const files = await findFiles(snippetsDir, '.code-snippets');
    if (files.length === 0) {
      console.error('No `.code-snippets` files found under `snippets/`.');
      process.exit(1);
    }

    let errors = 0;
    const prefixMap = new Map(); // prefix -> { file, key }

    for (const file of files) {
      let raw;
      try {
        raw = await fs.readFile(file, 'utf8');
      } catch (e) {
        console.error(`Failed to read ${file}: ${e.message}`);
        errors++;
        continue;
      }

      let obj;
      try {
        obj = JSON.parse(raw);
      } catch (e) {
        console.error(`Invalid JSON in ${file}: ${e.message}`);
        errors++;
        continue;
      }

      for (const [key, val] of Object.entries(obj)) {
        if (!val || !('prefix' in val)) {
          console.warn(
            `Snippet "${key}" in ${path.relative(
              process.cwd(),
              file
            )} has no prefix defined.`
          );
          continue;
        }

        const rawPrefixes = Array.isArray(val.prefix)
          ? val.prefix
          : [val.prefix];
        for (let p of rawPrefixes) {
          if (typeof p !== 'string') {
            console.error(
              `Prefix for snippet "${key}" in ${path.relative(
                process.cwd(),
                file
              )} is not a string: ${JSON.stringify(p)}`
            );
            errors++;
            continue;
          }

          // common mistake: comma-separated prefixes in one string
          if (p.includes(',')) {
            console.warn(
              `Possible mistake: comma found in prefix string "${p}" in ${path.relative(
                process.cwd(),
                file
              )} (snippet ${key}). Consider using an array of prefixes instead.`
            );
          }

          const prefix = normalizePrefix(p);
          if (prefix.length === 0) {
            console.error(
              `Empty prefix for snippet "${key}" in ${path.relative(
                process.cwd(),
                file
              )}.`
            );
            errors++;
            continue;
          }

          if (prefixMap.has(prefix)) {
            const prev = prefixMap.get(prefix);
            console.error(
              `Duplicate prefix "${prefix}" found in ${path.relative(
                process.cwd(),
                file
              )} (snippet ${key}) and ${path.relative(
                process.cwd(),
                prev.file
              )} (snippet ${prev.key}).`
            );
            errors++;
          } else {
            prefixMap.set(prefix, { file, key });
          }
        }

        // optional: check body exists
        if (!('body' in val)) {
          console.warn(
            `Snippet "${key}" in ${path.relative(
              process.cwd(),
              file
            )} has no body.`
          );
        }
      }
    }

    if (errors > 0) {
      console.error(`\nValidation finished: ${errors} error(s) found.`);
      process.exit(2);
    }

    console.log('Validation finished: no errors found.');
    process.exit(0);
  } catch (err) {
    console.error('Unexpected error during validation:', err);
    process.exit(1);
  }
})();
