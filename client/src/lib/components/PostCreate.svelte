<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from './Button.svelte';
	import Input from './Input.svelte';
</script>

<form
	method="POST"
	action="?/create"
	use:enhance
	class="my-10 grid gap-5 rounded-xl shadow-lg border-[0.5px] bg-[#A2D2FF] p-10"
>
	<Input id="title" label="Title" name="title" />
	<Input id="content" label="Content" name="content" />

	<Button type="submit" label="Submit" />
</form>
<hr />
