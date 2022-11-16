<script>
	import Hoverable from './Hoverable.svelte';
</script>

<style>
	div {
    display:inline-block;
		padding: 1em;
		margin: 0 0 1em 0;
		background-color: #eee;
	}

	.active {
		background-color: #ff3e00;
		color: white;
	}
</style>

<Hoverable let:hovering={active}>
	<div class:active="{active===true}">
		{#if active}
			<p>I am being hovered upon.</p>
		{:else}
			<p>Hover over me!</p>
		{/if}
	</div>
</Hoverable>

<Hoverable let:hovering={active}>
	<div class:active="{active===true}">
		{#if active}
			<p>I am being hovered upon.</p>
		{:else}
			<p>Hover over me!</p>
		{/if}
	</div>
</Hoverable>

<Hoverable let:hovering={active}>
	<div class:active="{active===true}">
		{#if active}
			<p>I am being hovered upon 1222.</p>
		{:else}
			<p>Hover over me!</p>
		{/if}
	</div>
</Hoverable>