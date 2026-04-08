<script lang="ts">
  import type { ThemeMeta } from '$lib/data/catalog';

  let { theme }: { theme: ThemeMeta } = $props();
</script>

<a href="/themes/{theme.id}" class="card">
  <img src={theme.preview} alt="{theme.name} preview" class="preview" />
  <div class="info">
    <h3>{theme.name}</h3>
    <p class="author">by {theme.author}</p>
    <p class="description">{theme.description}</p>
    <div class="meta">
      <span class="level">Level {theme.level}</span>
      {#if theme.verified}
        <span class="verified">Verified</span>
      {/if}
    </div>
  </div>
</a>

<style>
  .card {
    display: block;
    text-decoration: none;
    color: inherit;
    border: 1px solid var(--border, #333);
    border-radius: 0.5rem;
    overflow: hidden;
    transition: border-color 0.15s;
  }

  .card:hover {
    border-color: var(--accent, #58a6ff);
  }

  .preview {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }

  .info {
    padding: 1rem;
  }

  h3 {
    margin: 0 0 0.25rem;
    font-size: 1rem;
  }

  .author {
    color: var(--text-muted, #999);
    font-size: 0.85rem;
    margin: 0 0 0.5rem;
  }

  .description {
    font-size: 0.85rem;
    margin: 0 0 0.75rem;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .meta {
    display: flex;
    gap: 0.5rem;
    font-size: 0.75rem;
  }

  .level {
    background: var(--bg-subtle, #1c1c1c);
    padding: 0.15rem 0.5rem;
    border-radius: 0.25rem;
  }

  .verified {
    background: var(--accent, #58a6ff);
    color: #000;
    padding: 0.15rem 0.5rem;
    border-radius: 0.25rem;
  }
</style>
