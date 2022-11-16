<!-- 
  媒体标签 (<audio> 和 <video>) 也有一组绑定属性。 其中 6 个只读属性：
  duration (readonly) ：表示视频的总时长，以秒为单位。
  buffered (readonly) ：数组，包含{start, end} 对象。
  seekable (readonly) ：同上。
  played (readonly) ：同上。
  seeking (readonly) ：布尔值。
  ended (readonly) ：布尔值。

  以及四个双向绑定：
  currentTime ：视频中的当前点，以秒为单位。
  playbackRate ：播放视频的倍速， 1 为 '正常'。
  paused ：暂停。
  volume ：音量，0到1之间的值。

  <video> 标签较之还有多出了只读属性videoWidth和videoHeight的属性。
 -->
<video
	src={clip}
	bind:duration
	bind:buffered
	bind:seekable
	bind:seeking
	bind:played
	bind:ended
	bind:currentTime
	bind:paused
	bind:volume
	bind:videoWidth
	bind:videoHeight
></video>

<!-- 
  块级元素具有4个只读属性的绑定：
  clientWidth
  clientHeight
  offsetWidth
  offsetHeight
 -->
<div
	bind:offsetWidth={width}
	bind:offsetHeight={height}
>
	<Chart {width} {height}/>
</div>

<!-- 多个input值可以使用bind:group进行绑定。 -->
<div>
  <!-- radio inputs 是互斥的 -->
  <input type="radio" bind:group={tortilla} value="Plain">
  <input type="radio" bind:group={tortilla} value="Whole wheat">
  <input type="radio" bind:group={tortilla} value="Spinach">

  <!-- checkbox inputs 键入的值将会填入其数组 -->
  <input type="checkbox" bind:group={fillings} value="Rice">
  <input type="checkbox" bind:group={fillings} value="Beans">
  <input type="checkbox" bind:group={fillings} value="Cheese">
  <input type="checkbox" bind:group={fillings} value="Guac (extra)">
</div>

<!-- 
  bind:this={dom_node}
 -->
<script>
	import { onMount } from 'svelte';

	let canvasElement;

	onMount(() => {
		const ctx = canvasElement.getContext('2d');
		drawStuff(ctx);
	});
</script>

<canvas bind:this={canvasElement}></canvas>