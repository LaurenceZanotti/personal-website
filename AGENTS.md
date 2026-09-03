<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project: laurencezanotti.dev

Personal portfolio site (Next.js App Router, TypeScript, Tailwind CSS v4).

- Package manager: pnpm (`pnpm@11.25.0`, pinned via `packageManager` in package.json). Don't use npm/yarn — no lockfile for them exists.
- Scripts: `pnpm dev`, `pnpm build`, `pnpm start`, `pnpm lint`.
- Structure: routes in `app/`, UI in `components/<Section>/`, global styles in `styles/globals.css`, static assets in `public/`.
- `next.config.ts` sets `output: 'standalone'` — required for the Docker build below; don't remove it without updating the Dockerfile.

### Docker

Production image is a 3-stage build (`dependencies` → `builder` → `runner`) following [Docker's Next.js guide](https://docs.docker.com/guides/nextjs), using the standalone output and running as the non-root `node` user on port 3000.

- Build/run: `docker compose up -d --build`
- The container filesystem is read-only (`tmpfs` covers `/tmp` and `.next/cache`) — any code that writes elsewhere at runtime will break in this image.
