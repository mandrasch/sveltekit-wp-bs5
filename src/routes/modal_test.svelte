<script>
	import { onMount } from 'svelte';
	onMount(async () => {
		// TODO: move to components
		await import('bootstrap/js/dist/modal');
	});

	const openModal = function () {
		// TODO: good idea? accessing DOM directly is generally considered bad ide?
		console.log(document.getElementById('modal1'));
		document.getElementById('modal1').show();
	};
</script>

<p><a href="/blog">Go to blog</a></p>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<h2>Bootstrap test</h2>

<div class="row">
	<div class="col-12">
		<button type="button" class="btn btn-primary">Primary</button>
		<button type="button" class="btn btn-secondary">Secondary</button>
		<button type="button" class="btn btn-success">Success</button>
		<button type="button" class="btn btn-danger">Danger</button>
		<button type="button" class="btn btn-warning">Warning</button>
		<button type="button" class="btn btn-info">Info</button>
		<button type="button" class="btn btn-light">Light</button>
		<button type="button" class="btn btn-dark">Dark</button>

		<button type="button" class="btn btn-link">Link</button>
	</div>
</div>
<div class="row">
	<div class="col-sm-8">col-sm-8</div>
	<div class="col-sm-4">col-sm-4</div>
</div>
<div class="row">
	<div class="col-sm">col-sm</div>
	<div class="col-sm">col-sm</div>
	<div class="col-sm">col-sm</div>
</div>
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
	Launch demo modal
</button>

<!-- Modal -->
<div
	class="modal fade"
	id="exampleModal"
	tabindex="-1"
	aria-labelledby="exampleModalLabel"
	aria-hidden="true"
>
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
			</div>
			<div class="modal-body">...</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
				<button type="button" class="btn btn-primary">Save changes</button>
			</div>
		</div>
	</div>
</div>
