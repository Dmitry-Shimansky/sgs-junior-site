# SGS Junior website

A German-language website for SGS Junior boys’ underwear, with a responsive home page and links to the existing Amazon product listing.

| Design | Route | Main files |
| --- | --- | --- |
| Light, navy and gold — “SGS Junior – Komfort & Spaß für aktive Jungs!” | `/` | `app/page.tsx` → `src/views/home` (FSD, see below) |

The site uses React 19, TypeScript, and Next.js (App Router). It builds a static site (`output: 'export'`). Orders, payment, size selection, and customer service are handled on Amazon through the supplied product link; this project does not use an Amazon API or provide its own checkout.

## Home page structure (Feature-Sliced Design)

The `/` page lives in `src/` and follows FSD layers; each slice exposes a public API through its `index.ts`. `app/` is the Next-style routing layer and holds global styles.

```
src/
  views/home            – page composition (FSD "pages" layer; renamed to avoid clashing with Next routing)
  widgets/              – header, hero, product-sets, product-about, footer
  features/buy-on-amazon – Amazon call-to-action button
  entities/product      – product set data, types and ProductSetCard
  shared/constants      – Amazon URL, section anchors, navigation
  shared/lib            – small helpers (external-link attributes)
  shared/ui             – UI kit: Button, TextLink, Badge, Section, Container, Logo
  styles/               – SCSS design system (see below)
```

Each component in `shared/ui` lives in its own PascalCase folder with a `.module.scss` file next to it, and everything is exported from `src/shared/ui/index.ts`. Use `Button` for every call-to-action: it renders an `<a>` when `href` is passed (add `external` for new-tab links) and a `<button>` otherwise. It supports `variant` (`primary`, `outline`), `size` (`md`, `lg`), `icon` and `fullWidth`.

### Styles

```
src/styles/
  index.scss            – global entry, imported once in app/layout.tsx
  abstract/             – palette + palette() function, variables, mixins (media-down, focus-ring, …)
  base/                 – themes (CSS colour variables), typography mixins, global base styles
```

CSS modules use the abstract layer and the typography mixins, and read colours from the theme variables:

```scss
@use '../../../styles/abstract' as abstract;
@use '../../../styles/base/typography' as typo;

.title {
  @include typo.h2;
  color: var(--color-heading);
  @include abstract.media-down(sm) { … }
}
```

Product sets, feature texts and the Amazon link are edited in `src/entities/product/model/data.ts` and `src/shared/constants`.

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

`pnpm start` serves the static export in `out/` with [`serve`](https://github.com/vercel/serve) at `http://localhost:3000` by default (`next start` does not work with static export). Stop it with Ctrl+C. To use a different port:

```sh
pnpm start --listen 4173
```

Static hosting files are generated in **`out`**, including `index.html`, `404.html`, JavaScript, CSS, and images. Configure the host to serve `404.html` for missing pages. The assets use root-relative URLs, so the current configuration expects the site at a domain root, rather than a repository subpath. Generated files are excluded from Git; rebuild them from source when deploying.

## Project contents

```text
app/
  layout.tsx                 German language, shared metadata and favicon
  page.tsx                   Route entry; renders src/views/home
  globals.css                Font, Tailwind and starter UI tokens (site styles: src/styles)
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
postcss.config.mjs           Tailwind CSS PostCSS setup
package.json                 Commands and package versions
pnpm-lock.yaml               Dependency lockfile
```

## Edit the website

- **Amazon link and navigation:** edit `src/shared/constants`. The current link is `https://amzn.eu/d/01feguzW`.
- **Products and texts:** edit `src/entities/product/model/data.ts`.
- **Photos and logo:** files are bundled in `public/images`; no Downloads folder or remote image service is required.
- **Brand colours and layout:** the palette is in `src/styles/abstract/_palette.scss` and is mapped to CSS variables in `src/styles/base/_themes.scss`; each component has its own SCSS module.
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
