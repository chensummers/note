<script>
	import File from './File.svelte';

	export let expanded = false;
	export let name;
	export let files;

	function toggle() {
		expanded = !expanded;
	}
</script>

<style>
	span {
		padding: 0 0 0 1.5em;
		font-weight: bold;
		cursor: pointer;
		display: flex;
    align-items: center;
	}

	.expanded {
	}
	.dot {
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 10px;
    background: #3267d9;
		margin-right: 10px;
  }

	ul {
		padding: 0.2em 0 0 0.5em;
		margin: 0 0 0 0.5em;
		list-style: none;
		border-left: 1px solid #eee;
	}

	li {
		padding: 0.2em 0;
	}
</style>

<span class:expanded on:click={toggle}><i class="dot"/>{name}</span>
<!-- 递归组件 -->
{#if expanded}
	<ul>
		{#each files as file}
			<li>
				{#if file.type === 'folder'}
					<svelte:self {...file}/>
				{:else}
					<File {...file}/>
				{/if}
			</li>
		{/each}
	</ul>
{/if}