<script lang="ts">
  import { page } from '$app/stores';
</script>

<nav>
  <a href="/" class="logo">GitSkin</a>
  <div class="links">
    <a href="/themes" class:active={$page.url.pathname.startsWith('/themes')}>Themes</a>
    <a href="/submit" class:active={$page.url.pathname === '/submit'}>Submit</a>
    <a href="/docs" class:active={$page.url.pathname.startsWith('/docs')}>Docs</a>
    <a href="https://github.com/deskinned/gitskin" target="_blank" rel="noopener">GitHub</a>
  </div>
</nav>

<style>
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    border-bottom: 1px solid var(--border, #333);
  }

  .logo {
    font-weight: 700;
    font-size: 1.25rem;
    text-decoration: none;
    color: var(--text, #fff);
  }

  .links {
    display: flex;
    gap: 1.5rem;
  }

  .links a {
    text-decoration: none;
    color: var(--text-muted, #999);
    transition: color 0.15s;
  }

  .links a:hover,
  .links a.active {
    color: var(--text, #fff);
  }
</style>
