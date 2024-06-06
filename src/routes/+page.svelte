<script>
  import Counter from '$lib/Counter.svelte';
  import viteLogo from '$lib/assets/vite.svg';
  import svelteLogo from '$lib/assets/svelte.svg';
  import unoLogo from '$lib/assets/uno.svg';
</script>

<svelte:head>
  <title>Vite + SvelteKit + UnoCSS</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="p-8 text-center">
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://kit.svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo sveltekit" alt="SvelteKit Logo" />
    </a>
    <a href="https://github.com/unocss/unocss" target="_blank" rel="noreferrer">
      <img src={unoLogo} class="logo uno" alt="UnoCSS Logo" />
    </a>
  </div>
  <h1 class="text-5xl font-bold">Vite + SvelteKit + UnoCSS</h1>

  <div class="p-8">
    <Counter />
  </div>
</div>

<style>
  .logo {
    display: inline;
    height: 9em;
    padding: 1.5em;
    will-change: filter;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .logo.sveltekit:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }

  .logo.uno:hover {
    filter: drop-shadow(0 0 2em #484848aa);
  }
</style>
