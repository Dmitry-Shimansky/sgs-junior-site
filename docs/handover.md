# SGS Junior — project handover

Prepared on 14 September 2026. Both approved comparison designs are preserved as independently addressable pages in one project. The site is in German and uses the user-supplied SGS products.

## Design overview

| Route | Visual direction | Hero headline |
| --- | --- | --- |
| `/` | Bright blue and white, product cards | Für kleine Helden. Für jeden Tag. |
| `/design-2` | Navy and yellow, large typography, alternating product sections | Anziehen. Losziehen. |

The second design uses CSS crops of the same original product images in its hero. The full product packs are also displayed. Neither design requires generated model photography.

## Included assets

| Repository path | Original supplied filename | Content |
| --- | --- | --- |
| `public/images/sgs-logo.jpg` | `37dffa16-5624-4263-83e9-cdbca875699e.JPG` | SGS logo |
| `public/images/klassischer-mix.png` | `exec-bfafed86-6897-4f6b-a51e-06429972b3cd.PNG` | Classic mix: 4 black, 3 blue, 3 grey |
| `public/images/bunter-mix.jpg` | `PHOTO-2026-09-07-14-59-18.jpg` | Colourful mix: 2 each in burgundy, petrol, blue, grey and light blue |
| `public/images/schwarz.png` | `exec-8db2d3a4-cf42-44fb-96e6-5ef73acb975c.PNG` | Ten black boxers |

The black-pack image contains a contradictory source annotation listing several colours. Website copy describes the visible ten black garments; the original image has been retained.

## Amazon and product content

All shopping buttons use the supplied link: <https://amzn.eu/d/01feguzW>.

The listing was read on 13 September 2026 and resolved to Amazon Germany product `B0C7JKZP46`. The copy uses 95% cotton, 5% elastane, a 10-pack, machine washing, and EU children’s sizes 98–176. Detailed source and editorial notes are in `german-website-copy.md`. This handover records the earlier check; it is not a new availability or price check.

All three product presentations currently lead to that same listing. If separate variant URLs are supplied later, update the product data and shopping links in both pages. Prices and stock are displayed by Amazon.

## Maintenance notes

- Both pages use the shared root layout. Changes to `app/globals.css` should be checked on both routes; the second design also has a scoped CSS module.
- The source project retains the starter UI library for future additions, although the current pages are mostly plain React and CSS.
- Run the commands in `README.md` after changes. The static export is rebuilt into `dist/client`.
- The source archive excludes local Git internals, installed dependencies, build output, caches, and temporary work. All source code, images, configuration, and project documents are included.
- Repository preparation updated the project name and package-manager declaration, replaced the starter’s Cloudflare-only start command with `vinext start`, added a typecheck command, and corrected the metadata hostname to the existing SGS site. The page designs and product copy are preserved.
- No remote repository is configured in this handover, and no Git push or website redeployment is part of preparing the archive.
