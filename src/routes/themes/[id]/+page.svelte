<script lang="ts">
  import ThemePreview from '$lib/components/ThemePreview.svelte';
  import InstallButton from '$lib/components/InstallButton.svelte';

  let { data } = $props();
  const theme = data.theme;
</script>

<svelte:head>
  <title>{theme.name} — GitSkin</title>
</svelte:head>

<div class="detail">
  <div class="header">
    <div>
      <h1>{theme.name}</h1>
      <p class="author">by {theme.author} {#if theme.verified}<span class="badge">Verified</span>{/if}</p>
      <p class="description">{theme.description}</p>
      <div class="meta">
        <span>Level {theme.level}</span>
        <span>v{theme.version}</span>
        {#each theme.tags as tag}
          <span class="tag">{tag}</span>
        {/each}
      </div>
      <div class="actions">
        <InstallButton />
      </div>
    </div>
  </div>
  <ThemePreview {theme} />
</div>

<style>
  .detail {
    max-width: 64rem;
    margin: 0 auto;
    padding: 3rem 2rem;
  }

  .header {
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 2rem;
    margin: 0 0 0.25rem;
  }

  .author {
    color: var(--text-muted, #999);
    margin: 0 0 0.75rem;
  }

  .badge {
    background: var(--accent, #58a6ff);
    color: #000;
    padding: 0.1rem 0.4rem;
    border-radius: 0.2rem;
    font-size: 0.75rem;
    font-weight: 600;
  }

  .description {
    margin: 0 0 1rem;
    line-height: 1.5;
  }

  .meta {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
    font-size: 0.85rem;
  }

  .meta span {
    background: var(--bg-subtle, #1c1c1c);
    padding: 0.2rem 0.5rem;
    border-radius: 0.25rem;
  }

  .tag {
    color: var(--text-muted, #999);
  }

  .actions {
    margin-top: 1rem;
  }
</style>
