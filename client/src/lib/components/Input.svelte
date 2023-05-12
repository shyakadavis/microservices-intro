<script lang="ts">
	export let label = '';
	export let type = 'text';
	export let name = '';
	export let id = '';
</script>

<label class="w-full flex flex-col gap-3" for={id}>
	<span class="text-lg underline decoration-dashed cursor-pointer">{label}</span>
	<input
		class="py-2 px-3 bg-[#BDE0FE] border-[0.5px] border-[#FFC8DD] backdrop-blur rounded-md shadow-md focus:outline-none focus:ring-1 focus:ring-[#FFC8DD] transition"
		{type}
		{name}
		{id}
		autocomplete="off"
		required
	/>
</label>
