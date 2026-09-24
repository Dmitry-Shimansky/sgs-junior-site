# SGS Junior website

A German-language website for SGS Junior boys’ underwear, with two complete responsive designs and links to the existing Amazon product listing. Both designs are included in this project.

| Design | Route | Main files |
| --- | --- | --- |
| Blue and white — “Für kleine Helden. Für jeden Tag.” | `/` | `app/page.tsx`, `app/globals.css` |
| Navy and yellow — “Anziehen. Losziehen.” | `/design-2` | `app/design-2/page.tsx`, `app/design-2/design-two.module.css` |

The site uses React 19, TypeScript, and Vinext (Next.js-compatible routing on Vite). It builds a static site. Orders, payment, size selection, and customer service are handled on Amazon through the supplied product link; this project does not use an Amazon API or provide its own checkout.

## Run locally

Requirements: Node.js **22.13.0 or newer** and **pnpm 11.19.0**. The package manager version is recorded in `package.json`; dependency versions are recorded in `pnpm-lock.yaml`.

If pnpm is not installed:

```sh
npm install --global pnpm@11.19.0
```

From the project directory:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open the localhost address printed in the terminal. Visit `/` for the first design and `/design-2` for the second. No environment variables, API keys, or hosting account are needed to run locally.

## Check and build

```sh
pnpm typecheck
pnpm lint
pnpm build
pnpm start
```

TypeScript checks and the production build pass. The existing full-project lint command reports findings in the included starter components and flags native `<img>` elements used by the static pages. These are recorded in `docs/validation.md`; the lint command does not currently exit successfully.

`pnpm start` serves the production build at `http://localhost:3000` by default. Stop it with Ctrl+C. To use a different port or restrict it to this computer:

```sh
pnpm start --port 4173 --hostname 127.0.0.1
```

Static hosting files are generated in **`dist/client`**, including `index.html`, `design-2.html`, `404.html`, JavaScript, CSS, and images. Configure the host to resolve `/design-2` to `/design-2.html` and serve `404.html` for missing pages. The assets use root-relative URLs, so the current configuration expects the site at a domain root, rather than a repository subpath. Generated files are excluded from Git; rebuild them from source when deploying.

## Project contents

```text
app/
  layout.tsx                 German language, shared metadata and favicon
  page.tsx                   First design and its German copy
  globals.css                Shared styles and first design
  design-2/
    page.tsx                 Second design and its German copy
    design-two.module.css    Scoped second-design styles
public/
  favicon.svg
  images/                    SGS logo and all three original product images
docs/
  german-website-copy.md      Product source notes and original German copy
  handover.md                Design, asset and maintenance notes
components/ui/               Included UI components from the project starter
hooks/, lib/                 Starter helpers
.openai/hosting.json          Existing Sites hosting project association
next.config.ts               Static export configuration
vite.config.ts               Vite/Vinext configuration
package.json                 Commands and package versions
pnpm-lock.yaml               Dependency lockfile
```

## Edit the website

- **Text and Amazon links:** edit `app/page.tsx` and `app/design-2/page.tsx`. Each page defines its own `amazon` constant. The current link is `https://amzn.eu/d/01feguzW`.
- **Products and colours:** edit the `collections` and `products` arrays in those files.
- **Photos and logo:** files are bundled in `public/images`; no Downloads folder or remote image service is required.
- **Brand colours and layout:** edit the corresponding CSS files listed in the design table above.
- **Domain and metadata:** update `metadataBase` in `app/layout.tsx` when moving to another domain. Design 2 has its own title and description.

## Place in a repository

The source ZIP contains a `sgs-junior-site/` folder. Extract it and place its contents in the root of your chosen repository, or use that folder as a subdirectory of a larger repository. Keep hidden configuration files, especially `.gitignore`. Use `sgs-junior-site` as the build working directory if it is a subdirectory.

For a new empty repository, run these commands from the extracted project folder. Replace `YOUR_REPOSITORY_URL` with the actual Git URL:

```sh
git init -b main
git add .
git commit -m "Add SGS Junior website with two designs"
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

If using the existing local Git project instead of the ZIP, its history is already present; add your remote and push the current branch. For an existing repository, add the files on the branch of your choice and follow that repository’s review process.

## Existing hosted versions

- [Design 1](https://sgs-junior.tohtieva-juhar.chatgpt.site/)
- [Design 2](https://sgs-junior.tohtieva-juhar.chatgpt.site/design-2)

These links retain the existing Sites access settings. `.openai/hosting.json` records the existing project association and static output directory; it contains no credentials. Local builds do not publish the site or change its audience.

The repository handover does not grant a new licence to the SGS brand or supplied product photography. Dependency licences remain with their respective packages.
