# GitHub Pages website (vendor-free)

This repository contains a **plain HTML/CSS/JS** website designed to run directly on **GitHub Pages**.

## What changed (vs. the exported Lovable HTML)

- Removed Lovable branding and badges (e.g., the `lovable-badge` block and related scripts/styles).
- Removed Lovable-specific analytics script (`~flock.js`).
- Removed the Lovable-hosted runtime asset links (they won't work once you leave the Lovable domain).
- Removed the external font loader that referenced `cdn.gpteng.co`.
- Replaced styling with a lightweight, dependency-free design using a **system font stack**.

## Deploy to GitHub Pages (no build step)

1. Create a new GitHub repository and push these files.
2. In GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, choose:
   - **Source:** Deploy from a branch
   - **Branch:** `main` (or your default branch)
   - **Folder:** `/ (root)`
4. Save. Your site will be served from the GitHub Pages URL.

## Local preview

Open `index.html` directly in your browser, or serve the folder with any static server.

## Customise

- Edit `index.html` for your content.
- Edit `assets/styles.css` for look-and-feel.
- Edit `assets/app.js` for small interactions.

---

If your original site content was rendered by a JavaScript bundle (common for Vite/React), you will need the **actual source code or build output** to reproduce the same screens.
This repo gives you a clean, open, and GitHub-native starting point.
