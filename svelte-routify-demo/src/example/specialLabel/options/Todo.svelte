<!-- 
  immutable={true} ：你不能使用可变数据，因此编译器可以通过引用简单的对比检查来确定值是否已更改。
  immutable={false} ：默认值。对于可变对象数据变更，Svelte将其保持不变。
  accessors={true} ：为组件的属性添加getter和setter。
  accessors={false}：默认。
  namespace="..." ：将使用namespace的组件，最常见的是"svg"。
  tag="..." ：指定将此组件编译为自定义标签时使用的名称。
 -->

<svelte:options immutable={true}/>

<script>
	import { afterUpdate } from 'svelte';
	import flash from './flash.js';

	export let todo;

	let div;

	afterUpdate(() => {
		flash(div);
	});
</script>

<style>
	div {
		cursor: pointer;
		line-height: 1.5;
	}
</style>

<!-- the text will flash red whenever
     the `todo` object changes -->
<div bind:this={div} on:click>
	{todo.done ? '👍': ''} {todo.text}
</div>
