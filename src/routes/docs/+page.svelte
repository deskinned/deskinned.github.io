<svelte:head>
  <title>Docs — GitSkin</title>
</svelte:head>

<div class="docs">
  <h1>Documentation</h1>
  <div class="cards">
    <a href="/docs/authoring" class="card">
      <h2>Theme Authoring</h2>
      <p>Learn how to write a <code>.skin</code> file, from basic color overrides to full component-level theming.</p>
    </a>
    <a href="/docs/adapter-spec" class="card">
      <h2>Adapter Spec</h2>
      <p>How adapters map GitSkin's abstract component model to GitHub's DOM. For contributors maintaining the adapter layer.</p>
    </a>
    <a href="/docs/contributing" class="card">
      <h2>Contributing</h2>
      <p>How to contribute themes, report adapter breakage, and hack on GitSkin itself.</p>
    </a>
  </div>
</div>

<style>
  .docs {
    max-width: 48rem;
    margin: 0 auto;
    padding: 3rem 2rem;
  }

  h1 {
    font-size: 2rem;
    margin: 0 0 2rem;
  }

  .cards {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .card {
    display: block;
    padding: 1.5rem;
    border: 1px solid var(--border, #333);
    border-radius: 0.5rem;
    text-decoration: none;
    color: inherit;
    transition: border-color 0.15s;
  }

  .card:hover {
    border-color: var(--accent, #58a6ff);
  }

  .card h2 {
    margin: 0 0 0.5rem;
    font-size: 1.1rem;
  }

  .card p {
    margin: 0;
    color: var(--text-muted, #999);
    font-size: 0.9rem;
    line-height: 1.5;
  }

  code {
    background: var(--bg-subtle, #1c1c1c);
    padding: 0.1rem 0.3rem;
    border-radius: 0.2rem;
    font-size: 0.85em;
  }
</style>
