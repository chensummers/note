<button on:click={handleClick}>
	count: {count}
</button>

<button on:click="{() => count += 1}">
	count: {count}
</button>

<!-- 
  可以使用的修饰符有：
  preventDefault ：在程序运行之前调用 event.preventDefault()
  stopPropagation ：调用 event.stopPropagation(), 防止事件到达下一个标签
  passive ：改善了 touch/wheel 事件的滚动表现（Svelte会在合适的地方自动加上它）
  capture：表示在 capture阶段而不是bubbling触发其程序
  once ：程序运行一次后删除自身
  修饰符可以串联在一起，比如on:click|once|capture={...}。
 -->
<form on:submit|preventDefault={handleSubmit}>
	<!-- the `submit` event's default is prevented,
		 so the page won't reload -->
</form>

<!-- 同一事件可以有多个事件侦听器： -->
<script>
	let counter = 0;
	function increment() {
		counter = counter + 1;
	}

	function track(event) {
		trackEvent(event)
	}
</script>

<button on:click={increment} on:click={track}>Click me!</button>