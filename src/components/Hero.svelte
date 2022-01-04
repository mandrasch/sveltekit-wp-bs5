<script>
	export let heroData;
</script>

<div class="px-4 pt-5 my-5 text-center border-bottom">
	<div class="container px-5">
		<img
			src={heroData.teaserimage.sourceUrl}
			alt={heroData.teaserimage.altText}
			class="img-fluid border rounded-3 shadow-lg mb-4"
			style="max-height:30vh;width:auto;"
		/>
	</div>
	<h1 class="display-4 fw-bold">{heroData.title}</h1>
	<div class="col-lg-6 mx-auto">
		<p class="lead mb-4">
			{heroData.description}
		</p>
		<div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
			<a href={heroData.button1.url} class="btn btn-primary btn-lg px-4 me-sm-3"
				>{heroData.button1.title} (Internal Link)</a
			>
			<a href={heroData.button2.url} class="btn btn-outline-secondary btn-lg px-4"
				>{heroData.button2.title}</a
			>
		</div>
	</div>
</div>
