# sveltekit-wp-bootstrap5

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/mandrasch/sveltekit-wp-bootstrap5)

## TODOs

- [ ] Bugfix permalinks => manitu hosting installed them differently than standard, how can we automatically support them? (blog/2021/12/10/hello-world)
- [ ] Fix internal links https://www.youtube.com/watch?v=Naz0Fv_VVQk
- [ ] Figure out how to test the production build with other .env url via .env.production? https://timdeschryver.dev/blog/environment-variables-with-sveltekit
- [ ] Figure out pre-rendering and caching for sustainability
- [ ] Figure out webhooks on render.com, netlify, vercel, deploynow, etc.
- [ ] Figure out previews for editors?
- [ ] Figure out how to use 2-click-media embeds
- [ ] Figure out how to deal with cookies
- [ ] Figure out how to deal with images / where to host them, include them in static build?
- [ ] Use bootstrap navbar & footer (with content from WP?)
- [ ] Get featured blog post for hero section
- [ ] Try out adapter-node as well
- [ ] Add wordpress graphql api in .env via GitHub action secret
- [ ] Try out ACF & graphql acf
- [ ] Try out Custom Post Types UI (has built in support for graphql 🥳)
- [ ] Try out https://de.wordpress.org/plugins/headless-mode/
- [ ] Try out yoast & graphql

## How was this created?

1. Create (empty) github repo without license/README
1. Clone it to local harddrive, go to folder:
1. Run `npm init svelte@next` in the new repo folder
1. `npm install bootstrap` - install bootstrap5
1. Add preprocess `npm install --save-dev svelte-preprocess`
1. `npm install --save-dev sass postcss autoprefixer` for scss
1. Add preprocess config for postcss autoprefixer & sass in config `svelte.config.js`
1. Run `npm i --save-dev @sveltejs/adapter-static@next`, add
1. Add to config, see here: https://github.com/sveltejs/kit/tree/master/packages/adapter-static#usage
1. Added `.vscode/`-folder,`.github/`(action)-folder + `gitpod.yml` config
1. Add process.env.PATHS_BASE & dev to config
1. Add `src/route/__layout.svelte` for scss and js loading
1. Add gutenberg standard styles `npm install @wordpress/block-library --save`
1. Add gutenberg standard styles to \_\_layout.svelte
1. And most important: Add `static/.nojekyll` otherwise GitHub Pages won't work 🤦

Thanks to

- https://www.youtube.com/watch?v=Naz0Fv_VVQk
- https://github.com/Dax89/electron-sveltekit#bootstrap-5-and-fontawesome-support
- https://github.com/mylastore/svelte-kit/blob/main/src/lib/Nav.svelte#L19

## How can you use this?

### Setup a wordpress (locally or live) with wpgraphql-plugin

As backend you need to connect a wordpress instance. Use for example DDEV or local for local development.

1. Create `.env.local`, just copy `env.local.example`.
1. Install https://wordpress.org/plugins/wp-graphql/
1. Add fake data via https://de.wordpress.org/plugins/fakerpress/ e.g. (unfortunately no gutenberg support) or https://artisanthemes.io/sample-content-blocks-gutenberg/ (needs a lot of rework)

#### Develop your frontend with SvelteKit 🧡

Below are the official SvelteKit instructions for the frontend:

### Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
