<!-- 
  可编辑属性
 -->
<script>
	let html = '<p>Write some text!</p>';
</script>

<!-- 
  textContent 获取页面所有元素内容，包括select的option,##输入框的值不在包含内##
 -->
<div contenteditable="true" bind:textContent={html}></div>

<div contenteditable="true" bind:textInnerHTML={html}></div>

<div contenteditable="true" bind:textInnerText={html}></div>

<pre>{html}</pre>

<style>
	[contenteditable] {
		padding: 0.5em;
		border: 1px solid #eee;
		border-radius: 4px;
	}
</style>