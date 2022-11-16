<!-- 
	在文本表达式中，诸如< 和 > 都将被转义，但HTML表达式不会。
	HTML表达式应该是有效且完整的，{@html "<div>"}content{@html "</div>"} 将不会生效，因为 </div> 是无效的HTML标签。
-->
<div class="blog-post">
	<h1>{post.title}</h1>
	{@html post.content}
</div>