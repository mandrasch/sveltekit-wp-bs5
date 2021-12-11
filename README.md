# sveltekit-wp-bs5

Experimental learning project, connecting a SvelteKit-frontend (made with bootstrap5) to a WordPress backend via WPGraphQL-plugin. This is called a 'headless WordPress'-setup. It's work in progress.

- Live-Demo: [mandrasch.github.io/sveltekit-wp-bs5/](https://mandrasch.github.io/sveltekit-wp-bs5/)
- WordPress : [WP-Backend](https://sveltekit-wp-bootstrap5-backend.mandrasch.eu/) (can later be hidden and redirected to SvelteKit-frontend)

Big thanks to Kellen Mace for sharing [Intro to Headless WordPress with SvelteKit](https://www.youtube.com/watch?v=94FZvB6B_c0) and [Gutenberg in Headless WordPress: Render Blocks as HTML](https://www.youtube.com/watch?v=Naz0Fv_VVQk)!

## Try it out in Gitpod

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/mandrasch/sveltekit-wp-bootstrap5)

Note for Gitpod: _You must create `.env.local` (see `.env.local.example`) in order to connect a WordPress instance with WPGraphQL-plugin._

## Use it locally

See ["How can you use this"](#how-can-you-use-this) below.

## Technical background

Currently I use `@sveltejs/adapter-static`, but I also want to test (sustainable) node hosting with `@sveltejs/adapter-node` on providers like render.com in future.

### How was this created?

1. Create (empty) github repo without license/README
1. Clone it to local harddrive, go to folder:
1. Run `npm init svelte@next` in the new repo folder
1. `npm install bootstrap` - install bootstrap5
1. Add preprocess `npm install --save-dev svelte-preprocess`
1. `npm install --save-dev sass postcss autoprefixer` for scss
1. Add preprocess config for postcss autoprefixer & sass in config `svelte.config.js`
1. Run `npm i --save-dev @sveltejs/adapter-static@next`, add to config, see here: https://github.com/sveltejs/kit/tree/master/packages/adapter-static#usage
1. Added `.vscode/`-folder,`.github/`(action)-folder + `gitpod.yml` config
1. Add process.env.PATHS_BASE & dev to config
1. Add `src/route/__layout.svelte` for scss and js loading
1. Add gutenberg standard styles `npm install @wordpress/block-library --save`, add them them to \_\_layout.svelte thanks to https://www.youtube.com/watch?v=Naz0Fv_VVQk
1. And most importantly: Add `static/.nojekyll` otherwise GitHub Pages won't work!! 🤦

Big thanks to

- https://www.youtube.com/watch?v=Naz0Fv_VVQk
- https://github.com/Dax89/electron-sveltekit#bootstrap-5-and-fontawesome-support
- https://github.com/mylastore/svelte-kit/blob/main/src/lib/Nav.svelte#L19

## How can you use this?

### Setup a wordpress (locally or live)

As backend you need to connect a wordpress instance. Use for example [DDEV](https://ddev.readthedocs.io/en/stable/users/cli-usage/#wordpress-quickstart) or [local](https://localwp.com/) for a local wordpress instance.

1. Install WordPress
1. Install plugin https://wordpress.org/plugins/wp-graphql/
1. Add fake data via https://de.wordpress.org/plugins/fakerpress/ e.g. (unfortunately no gutenberg support) or https://artisanthemes.io/sample-content-blocks-gutenberg/ (needs a lot of rework)

### Develop your SvelteKit-frontend 🧡

1. Clone this repo
1. Run `npm install`
1. Create `.env.local` (just copy `env.local.example`) and insert your wordpress URL, e.g. `https://mywp-site.xyz/graphql`
1. Run `npm run dev`

Below are the official SvelteKit instructions for the frontend:

#### Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

#### Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.

## TODOs

- [ ] ⚠️ Bugfix permalinks and links to articles with base path => manitu hosting installed them differently than standard, how can we automatically support them? (e.g. blog/2021/12/10/hello-world)
- [ ] ⚠️ Fix internal links in posts, see: https://www.youtube.com/watch?v=Naz0Fv_VVQk
- [x] Figure out how to test the production build with other .env url via .env.production? https://timdeschryver.dev/blog/environment-variables-with-sveltekit
- [ ] Figure out pre-rendering and caching for sustainability
  - See: https://twitter.com/m_andrasch/status/1468899046488256519
- [ ] Figure out webhooks on render.com, netlify, vercel, deploynow, etc.
- [ ] Figure out previews for editors?
- [ ] Figure out how to use 2-click-media embeds (GDPR / Privacy)
- [ ] Figure out how to deal with cookies (GDPR / Privacy)
- [ ] Figure out how to deal with images / where to host them, include them in static build?
- [ ] Use bootstrap navbar & footer (with content - and settings from WP?)
- [ ] Use aliases? https://codingcat.dev/post/make-pathing-easier-with-aliases-in-sveltekit
- [ ] Get featured blog post for hero section
- [ ] Try out adapter-node as well
- [ ] Add wordpress graphql api in .env via GitHub action secret
- [ ] Try out ACF & graphql acf
- [ ] Try out Custom Post Types UI (has built in support for graphql 🥳)
- [ ] Try out https://de.wordpress.org/plugins/headless-mode/
- [ ] Try out yoast & graphql
- [ ] Figure out how to exclude README.md from pipeline process, site doesn't need to be re-generated if I commit a README change 🌱
- [ ] Provide DDEV WordPress auto-install, so everything can be launched on Gitpod (see [DDEV Gitpod launcher](https://github.com/drud/ddev-gitpod-launcher)) 🚀
