<script>
	export let bar;

	function foo(node, bar) {
		// node已挂载在DOM中

		return {
			update(bar) {
				// `bar` 已发生变更
			},

			destroy() {
				// node已从DOM中移除
			}
		};
	}
</script>

<!-- 类似于vue的 directive -->
<div use:foo={bar}></div>