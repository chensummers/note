<input type=checkbox>
<!-- <a href="page/{p}">page {p}</a> -->

<!-- <button disabled={!clickable}>...</button> -->
<!-- <button disabled="{number !== 42}">...</button> -->

<!-- <div {name}/> <div name={name} /> -->

<!-- <button disabled={disabled}>...</button> -->
<!-- <button {disabled}>...</button> -->
<!-- 
  $$props 可以传递所有 props 属性到一个 component 中，包含未使用export声明的 props 属性。
  它在特殊情况下很有用，但通常不推荐使用，因为Svelte难以优化。
 -->
<!-- <Widget {...$$props}/> -->
<!-- <Widget {...things}/> -->