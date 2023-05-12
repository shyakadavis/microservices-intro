<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from './Button.svelte';
	import Input from './Input.svelte';

	export let postId = '';
</script>

<form method="POST" action="?/comment" use:enhance class="flex flex-col gap-5">
	<div class="hidden">
		<Input id="postId" label="Post ID" name="postId" type="hidden" value={postId} />
	</div>
	<Input id="content" label="Comment" name="content" type="text" />
	<Button label="Comment" type="submit" />
</form>
