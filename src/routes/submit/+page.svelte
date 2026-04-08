<script lang="ts">
  import SubmitFlow from '$lib/components/SubmitFlow.svelte';
</script>

<svelte:head>
  <title>Submit a Theme — GitSkin</title>
</svelte:head>

<div class="submit">
  <h1>Submit a Theme</h1>
  <p>Paste your <code>.skin</code> file below. We'll validate it, run a security scan, and open a PR on skinbank.</p>
  <p class="note">You'll need to authenticate with GitHub. Your theme goes through automated review before merging.</p>
  <SubmitFlow />
</div>

<style>
  .submit {
    max-width: 48rem;
    margin: 0 auto;
    padding: 3rem 2rem;
  }

  h1 {
    font-size: 2rem;
    margin: 0 0 0.5rem;
  }

  p {
    color: var(--text-muted, #999);
    line-height: 1.5;
    margin: 0 0 1rem;
  }

  code {
    background: var(--bg-subtle, #1c1c1c);
    padding: 0.15rem 0.35rem;
    border-radius: 0.2rem;
    font-size: 0.9em;
  }

  .note {
    font-size: 0.85rem;
    margin-bottom: 2rem;
  }
</style>
