<script lang="ts">
	export let type = 'button';
	export let label = '';
</script>

<button
	type={type === 'submit' ? 'submit' : 'button'}
	class="rounded-lg shadow-inner hover:shadow-lg py-2 px-3 bg-[#FFC8DD] hover:bg-[#FFAFCC] transition-all"
	>{label}</button
>
