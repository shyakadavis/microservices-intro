<script lang="ts">
	import PostCreate from '../lib/components/PostCreate.svelte';

	export let data;
</script>

<h1 class="text-2xl tracking-wide">Create Post</h1>
<PostCreate />

<p>{data.posts}</p>
