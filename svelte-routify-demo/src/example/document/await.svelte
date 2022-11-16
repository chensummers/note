<!-- 
  {#await expression}...{:then name}...{:catch name}...{/await}
  {#await expression}...{:then name}...{/await}
  {#await expression then name}...{/await}
 -->

 {#await promise}
	<!-- promise 状态是“未决” -->
	<p>waiting for the promise to resolve...</p>
{:then value}
	<!-- promise 状态是 “完成” -->
	<p>The value is {value}</p>
{:catch error}
	<!-- promise 状态是“被拒绝” -->
	<p>Something went wrong: {error.message}</p>
{/await}

<!-- 如果你不关心“未决”状态，也可以省略该块。 -->
{#await promise then value}
	<p>The value is {value}</p>
{/await}