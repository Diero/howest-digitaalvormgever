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

(async function main() {
  const snippetsDir = path.resolve('./snippets');
  const reportsDir = path.resolve('./reports');
  try {
    await fs.mkdir(reportsDir, { recursive: true });
    const files = await findFiles(snippetsDir, '.code-snippets');
    const prefixMap = new Map(); // prefix -> [{file, key}]

    for (const file of files) {
      const raw = await fs.readFile(file, 'utf8');
      let obj;
      try {
        obj = JSON.parse(raw);
      } catch (e) {
        console.error(`Skipping invalid JSON file ${file}: ${e.message}`);
        continue;
      }
      for (const [key, val] of Object.entries(obj)) {
        if (!val || !('prefix' in val)) continue;
        const rawPrefixes = Array.isArray(val.prefix)
          ? val.prefix
          : [val.prefix];
        for (let p of rawPrefixes) {
          if (typeof p !== 'string') p = String(p);
          const prefix = p.trim();
          if (!prefixMap.has(prefix)) prefixMap.set(prefix, []);
          prefixMap
            .get(prefix)
            .push({ file: path.relative(process.cwd(), file), key });
        }
      }
    }

    const lines = [];
    lines.push('# Snippet prefix report');
    lines.push('Generated: ' + new Date().toISOString());
    lines.push('');
    lines.push('| Prefix | Count | Locations |');
    lines.push('|---|---:|---|');

    const sorted = Array.from(prefixMap.entries()).sort((a, b) =>
      a[0].localeCompare(b[0])
    );
    for (const [prefix, arr] of sorted) {
      const locations = arr
        .map(
          (x) => `
- ${x.file} ("${x.key}")`
        )
        .join('');
      // join inline small if few
      const locShort = arr.map((x) => `${x.file}:${x.key}`).join('<br>');
      lines.push(
        '| `' + prefix + '` | ' + arr.length + ' | ' + locShort + ' |'
      );
    }

    const out = lines.join('\n');
    const outPath = path.join(reportsDir, 'prefixes.md');
    await fs.writeFile(outPath, out, 'utf8');
    console.log('Wrote', outPath);
  } catch (err) {
    console.error('Error generating prefix report:', err);
    process.exit(1);
  }
})();
