# Howest Digital Design — Visual Studio Code snippets

[Contributing guidelines](CONTRIBUTING.md) — please read before contributing new snippets or changes.

This repository contains a collection of Visual Studio Code snippets used in several programs at Howest University of Applied Sciences (Web Development & Design, Multimedia & Creative Technology, and Creative Technology & AI). The snippets help students and teachers quickly generate common boilerplate for HTML, CSS/SCSS, JavaScript and Python.

Important links

- Howest Web Development & Design (WDD): https://www.howest.be/WDD
- Howest Multimedia & Creative Technology (MCT): https://www.howest.be/mct
- Howest Creative Technology & AI (CTAI): https://www.howest.be/mct
- Repository: https://github.com/Diero/howest-digitaalvormgever

Features

- Snippets for HTML, CSS/SCSS, JavaScript and Python.
- Prefix conventions for different study tracks: `wdd-`, `mct-`, `ctai-`.

Snippet catalog (short)

| Example prefix | Language | Description |
|---|---:|---|
| `bs5-css`, `bs5-js`, `bs5-icon` | HTML | Bootstrap CDN links (CSS/JS/icons)
| `wdd-itcss`, `mct-itcss` | CSS/SCSS | ITCSS structure template
| `wdd-itcss-bootstrap`, `mct-itcss-bootstrap` | CSS/SCSS | ITCSS template with Bootstrap section
| `wdd-mediaquery-min`, `mct-mediaquery-min` | CSS/SCSS | Media query for a specific breakpoint (min)
| `wdd-mediaquery-max`, `mct-mediaquery-max` | CSS/SCSS | Media query for a specific breakpoint (max)
| `wdd-domcontentloaded`, `mct-domcontentloaded` | JavaScript | DOMContentLoaded initialization boilerplate
| `wdd-fetch-get`, `mct-fetch-get` | JavaScript | Async fetch with JSON parsing
| `mct-ppropgs`, `ctai-ppropgs` | Python | Property getter + setter template

See the full list inside the `snippets/` folder.

Notes

- You can often replace the `wdd-` prefix with `mct-` (and `ctai-` for Python) where appropriate.
- Older or deprecated snippets are sometimes kept with an `OLD-` prefix; they remain for reference but are not recommended for new code.

Contributing

If you want to add a new snippet or improve an existing one, please follow these guidelines:

1. Prefix convention: use `wdd-`, `mct-` or `ctai-` depending on the target curriculum. Keep prefixes short and descriptive.
2. Include clear `description` fields in snippet JSON and avoid placing commas inside a single prefix string (use an array for multiple prefixes).
3. Validate JSON: add your snippet to the `snippets/` folder and run `npm run validate:snippets` (a validation script can be added to the project).
4. Open a pull request with a short description and a sample usage or notes.

Changelog

See `CHANGELOG.md` for the full history and detailed release notes.

License

This repository is licensed under the MIT License — see the `LICENSE` file.

Need more help?

If you'd like the README expanded with screenshots, a complete table of all snippets, or if you want me to add the `validate-snippets` script now, tell me and I will implement it.
