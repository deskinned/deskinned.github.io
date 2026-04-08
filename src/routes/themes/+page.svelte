<script lang="ts">
  import ThemeGrid from '$lib/components/ThemeGrid.svelte';

  let { data } = $props();
</script>

<svelte:head>
  <title>Themes — GitSkin</title>
</svelte:head>

<div class="marketplace">
  <h1>Themes</h1>
  <p>Community-built skins for GitHub. Install one, remix it, or build your own from scratch.</p>
  <ThemeGrid themes={data.themes} />
</div>

<style>
  .marketplace {
    padding: 3rem 2rem;
    max-width: 72rem;
    margin: 0 auto;
  }

  h1 {
    font-size: 2rem;
    margin: 0 0 0.5rem;
  }

  p {
    color: var(--text-muted, #999);
    margin: 0 0 2rem;
  }
</style>
