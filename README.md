# Mr. Graham's CS Class

Family site for 9th grade Computer Science at Digital Pioneers Academy. A static site: plain HTML, CSS, and JavaScript. No build step, no framework, no dependencies.

## Structure

```
index.html            Page shell: header, nav, footer. Loads everything else.
css/styles.css        All styling. Color tokens at the top, dark mode below them.
js/content.js         All the words parents read. This is the file you edit.
js/app.js             Renders pages from content.js and handles navigation.
images/favicon.svg    Browser tab icon.
images/careers/       One illustration per career on the Careers page.
```

The rule: **content changes go in `content.js`, looks go in `styles.css`, behavior goes in `app.js`.** A normal week only touches `content.js`.

## Weekly update

1. Open `js/content.js`.
2. In `ISSUES`, copy the newest `{ ... }` block (including its trailing comma) and paste it directly above itself.
3. Change the `id` (the Monday date, `YYYY-MM-DD`), `label`, and the text.
4. If the unit changed, update `CURRENT_UNIT_ID` to the matching id in `UNITS`.
5. Open `index.html` in a browser and check the page before deploying.

The previous week moves into the Week dropdown on its own, and the new Word of the Week is added to the CS Words page automatically.

If the page comes up blank after an edit, there's a syntax error in `content.js`. It's almost always a missing comma between blocks or an unescaped `"` inside a string. Use `\"` for quotes inside text.

## Study guides

Guides live in `STUDY_GUIDES` in `js/content.js`, newest first. The page shows the first one; once there's more than one, a dropdown appears so families can pick.

To add the next unit's guide, copy the whole Unit 2 block, paste it at the top of the list, change the `id`, and replace the text. Each section is a list of blocks:

| Block | Use it for |
|---|---|
| `{ type: "p", text: "..." }` | A paragraph |
| `{ type: "list", items: ["...", "..."] }` | Bullet points |
| `{ type: "table", head: [...], rows: [[...], [...]] }` | A table (stacks into cards on phones) |
| `{ type: "code", text: "line one\nline two" }` | A code sample. Use `\n` for new lines and four spaces for indents. |
| `{ type: "callout", text: "..." }` | A highlighted reminder |

Practice questions take a `q`, optional `code`, four `choices`, the `answer` letter, and a `why`. Answers stay hidden until someone taps **Show answer**, and they all open automatically when the page is printed.

Inside any text you can write `` `code` ``, `**bold**`, or `[a link](#guides)` to another page on the site.

## Adding things

- **Glossary term:** add `["Term", "Definition"]` to `EXTRA_WORDS`.
- **Career:** drop a `.jpg` in `images/careers/`, then add `["file-name", "Title", "Description"]` to `CAREERS`. The first value is the file name without `.jpg`.
- **Your photo:** save it as `images/mr-graham.jpg` (square works best), then in `js/app.js` search for `PHOTO:` and remove the comment markers around the `<img>` line.

## Running locally

Double-click `index.html`. That's it. The scripts are classic `defer` scripts, not ES modules, on purpose: modules are blocked when a page is opened straight from disk, and this way the site works with no local server.

If you'd rather use one: `python3 -m http.server` in this folder, then visit `http://localhost:8000`.

## Deploying

Netlify: drag this whole folder onto the site's **Deploys** tab. Keep the folder structure as is; `index.html` must stay at the top level.

Or connect a Git repo to Netlify and every push to `main` deploys automatically.
