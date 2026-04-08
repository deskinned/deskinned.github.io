---
title: Theme Authoring
---

# Theme Authoring Guide

GitSkin themes are `.skin` files — YAML with a specific schema. Themes can range from simple color overrides (Level 0) to full component-level styling (Level 4).

## Quick start

Create a file called `theme.skin`:

```yaml
meta:
  name: my-theme
  author: your-github-username
  version: 1.0.0
  description: A short description of your theme.

tokens:
  canvas:
    default: "#0d1117"
    subtle: "#161b22"
  fg:
    default: "#e6edf3"
    muted: "#8b949e"
  accent:
    fg: "#58a6ff"
    emphasis: "#1f6feb"
```

That's a Level 0 theme — it overrides Primer color tokens and nothing else. Install the GitSkin extension, load this file, and you'll see GitHub transform.

## Theme levels

| Level | What it does | Complexity |
|-------|-------------|-----------|
| 0 | Primer token overrides only | Just colors |
| 1 | Tokens + typography (fonts, sizes) | Still simple |
| 2 | Tokens + typography + component token overrides | Moderate |
| 3 | All of Level 2 + scoped CSS per component | Advanced |
| 4 | All of Level 3 + custom global CSS | Full control |

## Token reference

Tokens follow GitHub's Primer design system. The full token list is in the [theme schema](https://skinbank.gitsk.in/v1/theme-schema.json).

Common token paths:

- `tokens.canvas.default` — page background
- `tokens.canvas.subtle` — sidebar/secondary backgrounds
- `tokens.fg.default` — primary text color
- `tokens.fg.muted` — secondary text color
- `tokens.accent.fg` — link/accent color
- `tokens.accent.emphasis` — button/badge accent
- `tokens.border.default` — default border color
- `tokens.btn.primary.bg` — primary button background

## Component-level theming (Level 2+)

At Level 2 and above, you can override tokens scoped to specific components:

```yaml
components:
  RepoHeader:
    tokens:
      canvas.default: "#1a1a2e"
      accent.fg: "#e94560"

  PRDiffView:
    tokens:
      diff.addition.bg: "#0d4429"
      diff.deletion.bg: "#67060c"
```

Component names come from GitSkin's abstract component model. They map to GitHub UI sections through adapters.

## Scoped CSS (Level 3+)

```yaml
components:
  RepoHeader:
    css: |
      & {
        border-bottom: 2px solid var(--accent-fg);
      }
```

The `&` selector targets the resolved component element. CSS is scoped — it only applies to that component.

## Custom global CSS (Level 4)

```yaml
customCSS: |
  :root {
    --custom-font: "JetBrains Mono", monospace;
  }
```

Global CSS is injected at the page level. Use sparingly. The security scanner will flag unsafe patterns.

## Submitting your theme

Once your `.skin` file is ready:

1. Go to [gitsk.in/submit](/submit) and paste your file
2. Authenticate with GitHub
3. We validate, security-scan, and generate preview screenshots
4. A PR is opened on skinbank for review
5. Once merged, your theme appears in the marketplace
