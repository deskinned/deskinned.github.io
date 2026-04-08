<script lang="ts">
  import InstallButton from '$lib/components/InstallButton.svelte';
</script>

<svelte:head>
  <title>GitSkin — Theme GitHub</title>
  <meta name="description" content="Make GitHub yours. GitSkin is a browser extension that lets you skin GitHub's UI with community-built themes." />
</svelte:head>

<section class="hero">
  <h1>Make GitHub <em>yours</em>.</h1>
  <p>GitSkin is a browser extension that skins GitHub's entire UI. Pick a theme from the marketplace, build your own, or just slap some colors on it and call it a day.</p>
  <div class="actions">
    <InstallButton />
    <a href="/themes" class="secondary">Browse Themes</a>
  </div>
</section>

<section class="features">
  <div class="feature">
    <h2>Semantic theming</h2>
    <p>Themes target abstract components, not brittle CSS selectors. When GitHub changes their DOM, your theme survives.</p>
  </div>
  <div class="feature">
    <h2>Live adapters</h2>
    <p>Adapters resolve GitSkin's component model to GitHub's actual DOM. They're served from a CDN, so the extension never needs an update when GitHub ships changes.</p>
  </div>
  <div class="feature">
    <h2>5 levels of control</h2>
    <p>Level 0: just override Primer color tokens. Level 4: target individual components with scoped CSS. Pick your depth.</p>
  </div>
</section>

<style>
  .hero {
    text-align: center;
    padding: 6rem 2rem 4rem;
    max-width: 48rem;
    margin: 0 auto;
  }

  h1 {
    font-size: 3rem;
    margin: 0 0 1rem;
    line-height: 1.1;
  }

  h1 em {
    font-style: italic;
    color: var(--accent, #58a6ff);
  }

  .hero p {
    font-size: 1.15rem;
    color: var(--text-muted, #999);
    margin: 0 0 2rem;
    line-height: 1.6;
  }

  .actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .secondary {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: 1px solid var(--border, #333);
    color: var(--text, #fff);
    text-decoration: none;
    border-radius: 0.5rem;
    font-weight: 600;
    transition: border-color 0.15s;
  }

  .secondary:hover {
    border-color: var(--accent, #58a6ff);
  }

  .features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    padding: 4rem 2rem;
    max-width: 64rem;
    margin: 0 auto;
  }

  .feature h2 {
    font-size: 1.15rem;
    margin: 0 0 0.5rem;
  }

  .feature p {
    color: var(--text-muted, #999);
    font-size: 0.95rem;
    line-height: 1.5;
    margin: 0;
  }
</style>
