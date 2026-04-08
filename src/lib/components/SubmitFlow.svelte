<script lang="ts">
  import { submitTheme, type SubmitEvent } from '$lib/github/api';

  let skinContent = $state('');
  let events = $state<SubmitEvent[]>([]);
  let error = $state('');
  let done = $state(false);
  let submitting = $state(false);

  function handleSubmit() {
    events = [];
    error = '';
    done = false;
    submitting = true;

    submitTheme(
      skinContent,
      (event) => {
        events = [...events, event];
      },
      (err) => {
        error = err;
        submitting = false;
      },
      () => {
        done = true;
        submitting = false;
      },
    );
  }
</script>

<div class="flow">
  <textarea
    bind:value={skinContent}
    placeholder="Paste your .skin file contents here..."
    rows="20"
    disabled={submitting}
  ></textarea>

  <button onclick={handleSubmit} disabled={submitting || !skinContent.trim()}>
    {submitting ? 'Submitting...' : 'Submit Theme'}
  </button>

  {#if events.length > 0}
    <div class="steps">
      {#each events as event}
        <div class="step" class:done={event.status === 'done'} class:running={event.status === 'running'}>
          <span class="name">{event.step}</span>
          <span class="message">{event.message}</span>
        </div>
      {/each}
    </div>
  {/if}

  {#if error}
    <div class="error">{error}</div>
  {/if}

  {#if done}
    <div class="success">Theme submitted! A PR has been created on skinbank.</div>
  {/if}
</div>

<style>
  .flow {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 48rem;
  }

  textarea {
    width: 100%;
    font-family: monospace;
    font-size: 0.85rem;
    padding: 1rem;
    background: var(--bg-subtle, #1c1c1c);
    color: var(--text, #fff);
    border: 1px solid var(--border, #333);
    border-radius: 0.5rem;
    resize: vertical;
  }

  button {
    align-self: flex-start;
    padding: 0.75rem 1.5rem;
    background: var(--accent, #58a6ff);
    color: #000;
    font-weight: 600;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .steps {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .step {
    display: flex;
    gap: 1rem;
    padding: 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.85rem;
  }

  .step.done {
    color: var(--success, #3fb950);
  }

  .step.running {
    color: var(--accent, #58a6ff);
  }

  .name {
    font-weight: 600;
    min-width: 6rem;
  }

  .error {
    color: var(--danger, #f85149);
    padding: 0.75rem;
    border: 1px solid var(--danger, #f85149);
    border-radius: 0.5rem;
  }

  .success {
    color: var(--success, #3fb950);
    padding: 0.75rem;
    border: 1px solid var(--success, #3fb950);
    border-radius: 0.5rem;
  }
</style>
