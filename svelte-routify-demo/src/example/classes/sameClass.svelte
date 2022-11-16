<script>
	let big = false;
</script>

<style>
	.big {
		font-size: 2em;
	}
</style>

<label>
	<input type=checkbox bind:checked={big}>
	big
</label>

<div class:big>
	some {big ? 'big' : 'small'} text
</div>