<script>
	let scoop = 3;
	let flavours = [];
	let scoops = [
		{label:'One scoop', value:1},
		{label:'Two scoop', value:2},
		{label:'Three scoop', value:3},
	]
	let menu = [
		'Cookies and cream',
		'Mint choc chip',
		'Raspberry ripple',
	]
	
	function join(flavours) {
		if (flavours.length === 1) return flavours[0];
		console.log('ssss',flavours.slice(0, -1).join(', '))
		return `${flavours.slice(0, -1).join(', ')} and ${flavours[flavours.length - 1]}`;
	}
</script>

<h2>Size</h2>
{#each scoops as {label,value} (value)}
<p>
	<label>
		<input type=radio bind:group={scoop} value={value}>
		{label}
	</label>
</p>
{/each}

<h2>Flavours</h2>

{#each menu as flavour}
<div>
	<label>
		<input type=checkbox bind:group={flavours} value={flavour}>
		{flavour}
	</label>
</div>
{/each}

{#if flavours.length === 0}
	<p>Please select at least one flavour</p>
{:else if flavours.length > scoop}
	<p>Can't order more flavours than scoops!</p>
{:else}
	<p>
		You ordered {scoop} {scoop === 1 ? 'scoop' : 'scoops'}
		of {join(flavours)}
	</p>
{/if}
