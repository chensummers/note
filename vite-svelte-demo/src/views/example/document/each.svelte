<!-- 
  {#each expression as name}...{/each}
  {#each expression as name, index}...{/each}
  {#each expression as name, index (key)}...{/each}
  {#each expression as name}...{:else}...{/each}
 -->
<script>
  const items = []
</script>
<h1>Shopping list</h1>

<ul>
	{#each items as item}
		<li>{item.name} x {item.qty}</li>
	{/each}
</ul>

{#each items as item, i (item.id)}
	<li>{i + 1}: {item.name} x {item.qty}</li>
{/each}

{#each items as { id, name, qty }, i (id)}
	<li>{i + 1}: {name} x {qty}</li>
{/each}

{#each objects as { id, ...rest }}
	<li><span>{id}</span><MyComponent {...rest}/></li>
{/each}

{#each items as [id, ...rest]}
	<li><span>{id}</span><MyComponent values={rest}/></li>
{/each}


<!-- 
  each 还可以使用 {:else}子句，如果列表为空，则显示{:else} 条件下内容。
 -->
{#each todos as todo}
	<p>{todo.text}</p>
{:else}
	<p>No tasks today!</p>
{/each}