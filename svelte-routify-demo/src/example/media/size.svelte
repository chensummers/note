<script>
	let w,h,o;
	let size = 42;
	let text = 'edit me';
</script>

<style>
	input { display: block; }
	div { display: inline-block; }
	span { word-break: break-all; }
</style>

<input type=range bind:value={size}>
<input bind:value={text}>

<p>size: {w}px x {h}px {o}px</p>

<div bind:clientWidth={w} bind:clientHeight={h} bind:offsetWidth={o}>
	<span style="font-size: {size}px">{text}</span>
</div>