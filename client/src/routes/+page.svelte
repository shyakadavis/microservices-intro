<script lang="ts">
	import PostCreate from '$lib/components/PostCreate.svelte';
	import PostList from '$lib/components/PostList.svelte';

	export let data;
	export let form: any;
</script>

<h1 class="text-2xl tracking-wide">Create Post</h1>

{#if form?.error}
	<p class="error">{form.error}</p>
{/if}

<PostCreate />

<hr />

<section class="grid grid-cols-3 gap-5">
	{#each data.posts as post}
		<PostList {post} />
	{/each}
</section>
