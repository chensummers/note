<script>
	let current = 'foo';
	let currentA = 'b';
</script>

<style>
	button {
		display: block;
	}

	.selected {
		background-color: #ff3e00;
		color: white;
	}
	.a {
		width: 400px;
	}
</style>

<button
	class:selected="{current === 'foo'}"
	on:click="{() => current = 'foo'}"
>foo</button>

<button
	class:selected="{current === 'bar'}"
	class:a="{currentA === 'a'}"
	on:click="{() => {
		current = 'bar'
		currentA = 'a'
	}}"
>bar</button>

<button
	class:selected="{current === 'baz'}"
	on:click="{() => current = 'baz'}"
>baz</button>