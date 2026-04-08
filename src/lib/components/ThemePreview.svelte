<script lang="ts">
  import type { ThemeMeta } from '$lib/data/catalog';

  let { theme }: { theme: ThemeMeta } = $props();
</script>

<div class="preview">
  <img src={theme.preview} alt="{theme.name} preview" />
</div>

<style>
  .preview {
    border: 1px solid var(--border, #333);
    border-radius: 0.5rem;
    overflow: hidden;
  }

  img {
    width: 100%;
    display: block;
  }
</style>
