# SGS Junior website

A German-language website for SGS Junior boys’ underwear, with a responsive home page and links to the existing Amazon product listing.

| Design | Route | Main files |
| --- | --- | --- |
| Light, navy and gold — “SGS Junior – Komfort & Spaß für aktive Jungs!” | `/` | `app/page.tsx` → `src/views/home` (FSD, see below) |

The site uses React 19, TypeScript, and Vinext (Next.js-compatible routing on Vite). It builds a static site. Orders, payment, size selection, and customer service are handled on Amazon through the supplied product link; this project does not use an Amazon API or provide its own checkout.

## Home page structure (Feature-Sliced Design)

The `/` page lives in `src/` and follows FSD layers; each slice exposes a public API through its `index.ts`. `app/` is the Next-style routing layer and holds global styles.

```
src/
  views/home            – page composition (FSD "pages" layer; renamed to avoid clashing with Next routing)
  widgets/              – header, hero, product-sets, product-about, footer
  features/buy-on-amazon – Amazon call-to-action button
  entities/product      – product set data, types and ProductSetCard
  shared/               – config (Amazon URL, navigation) and UI kit (ButtonLink, Logo, Container)
```

Product sets, feature texts and the Amazon link are edited in `src/entities/product/model/data.ts` and `src/shared/config`.

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

Open the localhost address printed in the terminal. No environment variables, API keys, or hosting account are needed to run locally.

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

Static hosting files are generated in **`dist/client`**, including `index.html`, `404.html`, JavaScript, CSS, and images. Configure the host to serve `404.html` for missing pages. The assets use root-relative URLs, so the current configuration expects the site at a domain root, rather than a repository subpath. Generated files are excluded from Git; rebuild them from source when deploying.

## Project contents

```text
app/
  layout.tsx                 German language, shared metadata and favicon
  page.tsx                   Route entry; renders src/views/home
  globals.css                Global base styles and font
src/                         Home page in FSD layers (see above)
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

- **Amazon link and navigation:** edit `src/shared/config`. The current link is `https://amzn.eu/d/01feguzW`.
- **Products and texts:** edit `src/entities/product/model/data.ts`.
- **Photos and logo:** files are bundled in `public/images`; no Downloads folder or remote image service is required.
- **Brand colours and layout:** colour tokens are in `src/views/home/ui/HomePage.module.css`; each widget has its own CSS module.
- **Domain and metadata:** update `metadataBase` in `app/layout.tsx` when moving to another domain.

## Place in a repository

The source ZIP contains a `sgs-junior-site/` folder. Extract it and place its contents in the root of your chosen repository, or use that folder as a subdirectory of a larger repository. Keep hidden configuration files, especially `.gitignore`. Use `sgs-junior-site` as the build working directory if it is a subdirectory.

For a new empty repository, run these commands from the extracted project folder. Replace `YOUR_REPOSITORY_URL` with the actual Git URL:

```sh
git init -b main
git add .
git commit -m "Add SGS Junior website"
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

If using the existing local Git project instead of the ZIP, its history is already present; add your remote and push the current branch. For an existing repository, add the files on the branch of your choice and follow that repository’s review process.

## Existing hosted versions

- [SGS Junior](https://sgs-junior.tohtieva-juhar.chatgpt.site/)

These links retain the existing Sites access settings. `.openai/hosting.json` records the existing project association and static output directory; it contains no credentials. Local builds do not publish the site or change its audience.

The repository handover does not grant a new licence to the SGS brand or supplied product photography. Dependency licences remain with their respective packages.
