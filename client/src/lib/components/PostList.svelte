<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	import type { Post } from '../../utils';

	export let post: Post;
</script>

<section in:fly={{ y: -20 }} out:slide class="rounded-lg bg-[#CDB4DB] shadow-lg p-5">
	<h2 class="underline text-lg decoration-dashed">{post.title}</h2>

	<article class="my-5">{post.content}</article>
</section>
