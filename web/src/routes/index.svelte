<svelte:head>
	<title>Welcome</title>
</svelte:head>



<script>
  export /**
* @type {string | any[]}
*/
   let posts
</script>
	


{#if posts && posts.length}
<ul>
  {#each posts as post}
	<li>{post.title}</li>
  {/each}
</ul>
{:else}
	<p>No animals found.</p>
{/if}