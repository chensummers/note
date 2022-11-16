<!-- 它们是等价的 -->
<div class="{active ? 'active' : ''}">...</div>
<div class:active={active}>...</div>

<!-- 简写 -->
<div class:active>...</div>

<!-- 可以包含多个class状态 -->
<div class:active class:inactive={!active} class:isAdmin>...</div>