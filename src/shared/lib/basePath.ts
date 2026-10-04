/** Prefixes a `public/` asset path with the deploy base path (e.g. "/sgs-junior-site" on GitHub Pages). */
export const withBasePath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`
