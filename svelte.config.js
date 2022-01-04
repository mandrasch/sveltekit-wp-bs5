import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

// postcss autoprefixer, recommended for bootstrap sass handling (https://getbootstrap.com/docs/5.0/getting-started/download/#source-files)
import autoprefixer from 'autoprefixer';

// from https://github.com/sveltejs/kit/tree/master/packages/adapter-static#github-pages
const dev = process.env.NODE_ENV === 'development'; // TODO: use import.meta.env.MODE?

// import.meta.env is undefined here - why?
const pathsBase =
	import.meta.env.VITE_PATHS_BASE === undefined ? '' : import.meta.env.VITE_PATHS_BASE;
//console.log('process.env', process.env);

// quick workaround for local testing for github pages subdirectory deployment
/*var pathsBase = '';
if (process.env.NODE_ENV === 'production' && process.env.VITE_PATHS_BASE === undefined) {
	pathsBase = '/subdirectory-test';
} else {
	pathsBase = process.env.VITE_PATHS_BASE === undefined ? '' : process.env.VITE_PATHS_BASE;
}*/

console.log('Building with pathsBase setting ...', pathsBase);
// github pages repo name, prefix for ghpages, because this will be hosted in subdirectory (e.g. '/<your-repo>')

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// add svelte-preprocess for scss handling
	preprocess: preprocess({
		sourceMap: dev,
		postcss: {
			plugins: [autoprefixer()]
		}
	}),
	kit: {
		adapter: adapter(),
		paths: {
			base: pathsBase
		},
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
