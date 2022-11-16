<script>
	import { count } from './stores.js';

	function reset() {
		count.set(0)
		// TODO reset the count
	}
</script>

<button on:click={reset}>
	reset
</button>