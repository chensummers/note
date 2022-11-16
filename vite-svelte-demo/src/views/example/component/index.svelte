<script>
  import O from './O.svelte'
	function callbackFunction(event) {
		console.log(`Notify fired! Detail: ${event.detail}`)
	}
</script>

<O on:notify="{callbackFunction}"/>