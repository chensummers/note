<script>
	import { count } from './stores.js';

	function decrement() {
		count.update(n => n - 1);
		// TODO decrement the count
	}
</script>

<button on:click={decrement}>
	-
</button>