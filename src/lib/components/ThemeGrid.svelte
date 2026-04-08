<script lang="ts">
  import type { ThemeMeta } from '$lib/data/catalog';
  import ThemeCard from './ThemeCard.svelte';

  let { themes }: { themes: ThemeMeta[] } = $props();
</script>

<div class="grid">
  {#each themes as theme (theme.id)}
    <ThemeCard {theme} />
  {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
    padding: 2rem;
  }
</style>
