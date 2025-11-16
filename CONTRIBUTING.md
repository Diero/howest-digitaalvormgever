# Contributing

Thank you for wanting to contribute snippets to this repository — small, focused contributions are most welcome.

Quick rules (one-liners)

- Prefix naming: use a track-specific prefix: `wdd-` for Web Development & Design, `mct-` for Multimedia & Creative Technology, and `ctai-` for Creative Technology & AI (Python). Keep prefixes short and descriptive.
- Snippet location: add new snippet JSON files or entries under the `snippets/` folder. Prefer adding a new key to an existing language file only when it clearly belongs there.
- Prefix arrays: when providing multiple prefixes use a JSON array, not a comma-separated single string. Example: `"prefix": ["wdd-example", "mct-example"]`.
- JSON linting & validation: always validate snippet files before opening a PR. Run the validator locally:

```bash
node scripts/validate-snippets.mjs
# or
npm run validate:snippets
```

- Descriptions: include a clear `description` field for every snippet so users can understand the purpose from IntelliSense.
- Deprecated snippets: if you need to keep an older variant, add it to `snippets/deprecated.code-snippets` with an `OLD-` prefix.
- PR process: open a small PR that contains only the snippet changes and a short description of where/how the snippet is used. CI (if present) should pass validation.

Thanks — small, well-documented additions make this collection more useful for everyone.
