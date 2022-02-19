<script>
	import { base } from '$app/paths';
	import '../styles/main.scss';

	// gutenberg standard styles
	// TODO: import them in scss as well? where exactly?
	import '@wordpress/block-library/build-style/style.css';
	import '@wordpress/block-library/build-style/theme.css';
	import '@wordpress/block-library/build-style/common.css';

	// import Header from '../components/Header.svelte';

	import { onMount } from 'svelte';
	onMount(async () => {
		// TODO: move to components
		await import('bootstrap/js/dist/dropdown');
		await import('bootstrap/js/dist/collapse');
	});
</script>

<main>
	<slot />
</main>
