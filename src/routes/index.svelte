<script context="module">
	const query = `
    query getPosts {
      posts {
        nodes {
          databaseId
          uri
          title
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
              altText
              mediaDetails {
                width
                height
              }
            }
          }
        }
      }
    }
  `;

	export async function load({ fetch }) {
		console.log(
			'import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL',
			import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL
		);
		const response = await fetch(import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ query })
		});

		if (response.ok) {
			const responseObj = await response.json();
			const posts = responseObj.data.posts.nodes;

			return {
				props: {
					posts
				}
			};
		}

		return {
			status: response.status,
			error: new Error('Could not load') //`Could not load ${url}`)
		};
	}
</script>

<script>
	import PostCard from '../components/PostCard.svelte';
	export let posts;
</script>

<div class="container">
	<div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
		<div class="col-md-6 px-0">
			<h1 class="display-4 fst-italic">Title of a longer featured blog post</h1>
			<p class="lead my-3">
				Multiple lines of text that form the lede, informing new readers quickly and efficiently
				about what’s most interesting in this post’s contents.
			</p>
			<p class="lead mb-0"><a href="#" class="text-white fw-bold">Continue reading...</a></p>
		</div>
	</div>
	<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
		{#if posts}
			{#each posts as post}
				<PostCard {post} />
			{/each}
		{:else}
			<p>No posts found.</p>
		{/if}
	</div>
</div>

<p>
	Sample posts generated with FakerPress / Image source: unsplash (via Lorem Ipsum) or own photos
</p>
