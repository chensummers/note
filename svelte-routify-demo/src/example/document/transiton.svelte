<!-- 
  transition:fn
  transition:fn={params}
  transition:fn|local
  transition:fn|local={params}

  transition = (node: HTMLElement, params: any) => {
    delay?: number,
    duration?: number,
    easing?: (t: number) => number,
    css?: (t: number, u: number) => string,
    tick?: (t: number, u: number) => void
  }
 -->
{#if visible}
	<div transition:fade>
		fades in and out
	</div>
{/if}

{#if visible}
	<div transition:fade="{{ duration: 2000 }}">
		flies in, fades out over two seconds
	</div>
{/if}