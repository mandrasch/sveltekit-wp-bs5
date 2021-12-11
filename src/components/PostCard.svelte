<script>
	import { base } from '$app/paths';
	export let post;
</script>

<div class="col">
	<div class="card shadow-sm">
		{#if post.featuredImage}
			<a href={`${base}/blog${post.uri}`}>
				<img
					src={post.featuredImage.node.sourceUrl}
					alt={post.featuredImage.node.altText}
					class="bd-placeholder-img card-img-top"
				/>
			</a>
		{/if}
		<div class="card-body">
			<a href={`${base}/blog${post.uri}`}>
				<h2 class="card-title">{post.title}</h2>
			</a>
			<p class="card-text">
				{@html post.excerpt}
			</p>
			<div class="d-flex justify-content-between align-items-center">
				<div class="btn-group">
					<a href={`${base}/blog${post.uri}`} class="btn btn-sm btn-outline-secondary">View</a>
				</div>
				<small class="text-muted">9 mins</small>
			</div>
		</div>
	</div>
</div>
