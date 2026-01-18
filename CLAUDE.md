# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a Hugo static site (personal website/blog) deployed on Netlify. It uses the `hello-friend-ng` theme as a git submodule.

## Commands

```bash
# Local development server with live reload
hugo server -D

# Build for production (used by Netlify)
hugo --gc --minify

# Create a new blog post
hugo new blog/my-post-title.md
```

## Architecture

- **Theme**: `themes/hello-friend-ng` (git submodule from rhazdon/hugo-theme-hello-friend-ng)
- **Content**: Markdown files in `content/` with front matter
  - `content/blog/` - Blog posts
  - `content/projects/` - Project pages
  - `content/about.md` - About page
  - `content/_index.md` - Homepage content
- **Custom layouts**: `layouts/` overrides theme templates
  - `layouts/partials/` - Custom partial templates (header, footer, TOC, etc.)
  - `layouts/index.html` - Custom homepage
- **Assets**: `assets/` contains SCSS/CSS/JS that Hugo processes; `static/` for unprocessed files

## Configuration

- `config.toml` - Main Hugo configuration (site params, menus, taxonomies)
- `netlify.toml` - Netlify build settings (Hugo 0.129.0) and security headers

## Content Front Matter

Blog posts use this structure:
```yaml
---
title: "Post Title"
date: YYYY-MM-DD
draft: false
categories:
  - category-name
tags:
  - tag1
  - tag2
series:
---
```

## Taxonomies

The site uses: `categories`, `tags`, `series`, and `dnd` (custom taxonomy).
