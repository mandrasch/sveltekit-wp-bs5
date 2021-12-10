# sveltekit-wp-bootstrap5

# tzettel

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/mandrasch/sveltekit-wp-bootstrap5)

## How was this created?

1. Create (empty) github repo without license/README
1. Clone it to local harddrive, go to folder:
1. Run `npm init svelte@next` in the new repo folder
1. `npm install bootstrap` - install bootstrap5
1. Added `.vscode/`-folder,`.github/`(action)-folder + `gitpod.yml` config

## How can you use this?

As backend you need to connect a wordpress instance. Use for example DDEV or local for local development.

1. Create `.env.local`, just copy `env.local.example`.
1. Install https://wordpress.org/plugins/wp-graphql/

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
