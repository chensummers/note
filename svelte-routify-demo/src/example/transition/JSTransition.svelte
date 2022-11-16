<script>
	let visible = false;

	function typewriter(node, { speed = 20 }) {
		// implementation goes here

    const valid = (
      node.childNodes.length === 1 &&
      node.childNodes[0].nodeType === 3
    );

    console.log('node',node)
    if (!valid) {
      throw new Error(`This transition only works on elements with a single text node child`);
    }

    const text = node.textContent;
    const duration = text.length * speed;

    return {
      duration,
      tick: t => {
        const i = ~~(text.length * t); //Math.floor
        console.log('i',i,t)
        node.textContent = text.slice(0, i);
      }
    };
	}
</script>

<label>
	<input type="checkbox" bind:checked={visible}>
	visible
</label>

{#if visible}
	<p in:typewriter>
		The quick brown fox jumps over the lazy dog
	</p>
{/if}