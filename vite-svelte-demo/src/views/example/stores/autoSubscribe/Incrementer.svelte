<script>
	import { count } from './stores.js';

	function increment() {
		count.update(n => n?n*2:n+1);
		// TODO increment the count
	}
</script>

<button on:click={increment}>
	+
</button>