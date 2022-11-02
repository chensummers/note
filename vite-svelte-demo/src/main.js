import './app.css'
// import App from './App.svelte'
// import App from './views/example/input/group.svelte'
// import App from './views/example/input/index.svelte'
// import App from './views/example/input/each.svelte'
// import App from './views/example/media/index.svelte'
// import App from './views/example/media/size.svelte'
// import App from './views/example/media/canvas.svelte'
import App from './views/example/media/calc.svelte'

const app = new App({
  target: document.getElementById('app')
})

export default app
