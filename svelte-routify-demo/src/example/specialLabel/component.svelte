<script>
	import RedThing from './component/RedThing.svelte';
	import GreenThing from './component/GreenThing.svelte';
	import BlueThing from './component/BlueThing.svelte';

	const options = [
		{ color: 'red',   component: RedThing   },
		{ color: 'green', component: GreenThing },
		{ color: 'blue',  component: BlueThing  },
	];

	let selected = options[0];
</script>
<!-- 切换组件  -->
<select bind:value={selected}>
	{#each options as option}
		<option value={option}>{option.color}</option>
	{/each}
</select>

<svelte:component this={selected.component}/>