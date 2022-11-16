<!-- fly directive -->
<script>
	import { fly } from 'svelte/transition';
	let visible = true;
  const flyOption = {
    y: 200,
    duration: 2000
  }
</script>

<label>
	<input type="checkbox" bind:checked={visible}>
	visible
</label>

{#if visible}
	<p transition:fly={flyOption}>
		Fades in and out
	</p>
{/if}