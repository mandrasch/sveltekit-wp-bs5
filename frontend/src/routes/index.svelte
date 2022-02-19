<script context="module">
	const queryPosts = `
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

	// query homepage with custom fields
	const queryHomePage = `
    query getHomePage {
		nodeByUri(uri: "/") {
			__typename
			... on ContentType {
			id
			name
			}
			... on Page {
			id
			title
			heroFrontPage {
				description
				fieldGroupName
				title
				button2 {
				target
				title
				url
				}
				button1 {
				target
				title
				url
				}
				teaserimage {
					altText
					title
					uri
					sourceUrl(size: MEDIUM_LARGE)
				}
			}
			}
		}
		}`;

	// https://github.com/wp-graphql/wp-graphql/issues/653#issuecomment-454099419
	export async function load({ fetch }) {
		/*console.log(
			'import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL',
			import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL
		);*/

		// load posts
		const response = await fetch(import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			// TODO: Is this a good way to batch these requests?
			body: JSON.stringify([
				{
					query: queryPosts,
					operationName: 'getPosts'
				},
				{
					query: queryHomePage,
					operationName: 'getHomePage'
				}
			])
			// body: JSON.stringify({ query })
		});

		if (response.ok) {
			const responseObj = await response.json();

			// uncomment for debug:
			console.dir(responseObj, { depth: null });

			const posts = responseObj[0].data.posts.nodes;
			// TODO: convert to carbon fields
			//const heroData = responseObj[1].data.nodeByUri?.heroFrontPage; // from ACF

			// fix internal links - quick & dirty! 🤦
			// TODO: implement better and more robust link replacement fn for fixing internal links (won't be always /graphql)
			// see https://www.youtube.com/watch?v=Naz0Fv_VVQk&t=479s as well
			/*if (heroData.button1.url != undefined) {
				let wpDomain = import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL;
				wpDomain = wpDomain.replace(/\/graphql/g, ''); // TODO: This can be something else as well! (Can be configured in settings of wpgraphql)
				wpDomain = wpDomain.replace('http://', '');
				wpDomain = wpDomain.replace('https://', '');
				console.log('WP BASE DOMAIN:', wpDomain);
				heroData.button1.url = heroData.button1.url.replace('https://', '').replace('http://', '');
				heroData.button1.url = heroData.button1.url.replace(wpDomain, 'http://localhost:3000'); // TODO: how to get current domain reliable?
				console.log('Replaced link', heroData.button1.url);
			}*/

			// console.log('Returning heroData', heroData);
			return {
				props: {
					posts,
					//heroData
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
	import Hero from '../components/Hero.svelte';
	export let posts, heroData;
</script>

<div class="container">
	<!-- <Hero {heroData} /> -->
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

<p class="text-center mt-5">
	Sample posts generated with FakerPress / Image source: unsplash (via Lorem Ipsum) or own photos
</p>
