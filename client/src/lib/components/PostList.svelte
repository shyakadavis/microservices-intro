<script lang="ts">
	import { fade, fly, slide } from 'svelte/transition';
	import type { Post } from '../../utils';
	import CommentCreate from './CommentCreate.svelte';

	export let post: Post;
</script>

<section in:fly={{ y: -20 }} out:slide class="rounded-lg bg-[#CDB4DB] shadow-lg p-5">
	<h2 class="underline text-lg decoration-dashed">{post.title}</h2>

	<article class="my-5">{post.content}</article>

	<CommentCreate postId={post.id} />
	<ul>
		{#each post.comments as comment}
			<li transition:fade class="my-5">
				<p>{comment.content}</p>
			</li>
		{/each}
	</ul>
</section>
