<script lang="ts">
  const CHROME_URL = 'https://chrome.google.com/webstore/detail/gitskin';
  const FIREFOX_URL = 'https://addons.mozilla.org/en-US/firefox/addon/gitskin';

  let ua = $state('');

  $effect(() => {
    ua = navigator.userAgent;
  });

  const isFirefox = $derived(ua.includes('Firefox'));
  const url = $derived(isFirefox ? FIREFOX_URL : CHROME_URL);
  const label = $derived(isFirefox ? 'Add to Firefox' : 'Add to Chrome');
</script>

<a href={url} target="_blank" rel="noopener" class="install">{label}</a>

<style>
  .install {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background: var(--accent, #58a6ff);
    color: #000;
    font-weight: 600;
    text-decoration: none;
    border-radius: 0.5rem;
    transition: opacity 0.15s;
  }

  .install:hover {
    opacity: 0.85;
  }
</style>
