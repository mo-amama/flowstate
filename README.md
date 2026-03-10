# Flowstate Landing Page

A focus and deep work tool for creative professionals.

## About This Repo

This is a team code-reading exercise. The landing page has intentional bugs — your job is to find and fix them.

## Project Structure

The codebase is organized by component. Each section has its own HTML reference file and CSS file:

```
flowstate/
├── index.html                  ← Full page (open this in your browser)
├── css/
│   ├── app.css                 ← Imports everything (DO NOT EDIT)
│   ├── base.css                ← Variables, reset, shared styles (DO NOT EDIT)
│   ├── header.css              ← Header & navigation styles
│   ├── hero.css                ← Hero section styles
│   ├── features.css            ← Features section styles
│   ├── pricing.css             ← Pricing section styles
│   ├── testimonials.css        ← Testimonials section styles
│   └── footer.css              ← Footer styles
└── components/
    ├── header.html             ← Header markup reference
    ├── hero.html               ← Hero markup reference
    ├── features.html           ← Features markup reference
    ├── pricing.html            ← Pricing markup reference
    ├── testimonials.html       ← Testimonials markup reference
    └── footer.html             ← Footer markup reference
```

**How it works:** `index.html` is the full assembled page — open it in your browser to see the site. The `components/` folder has each section's HTML separately for easy reference. When you fix bugs, edit the relevant section in `index.html` AND/OR the matching CSS file.

Bugs may be in the CSS file, the HTML markup, or both. Read carefully.

## Your Task

1. **Claim your section** — post in Discord which section you're taking. One person per section.

2. **Create a branch**
   ```
   git checkout -b fix-<section-name>
   ```
   Example: `git checkout -b fix-header` or `git checkout -b fix-pricing`

3. **Open index.html in your browser** — look at the page. Identify what's visually wrong with your section.

4. **Read the code** — open your section's CSS file and find your section's HTML in `index.html` (each section is marked with a comment showing which component and CSS file it belongs to). Look for:
   - Missing or incorrect CSS properties
   - Typos in class names (compare HTML classes to CSS selectors)
   - Broken HTML (unclosed tags, wrong nesting)
   - Wrong values (colors, sizes, spacing)

5. **Fix the bugs** — only fix bugs in YOUR section. Don't touch other people's sections.

6. **Commit your changes**
   ```
   git add .
   git commit -m "fix: describe what you fixed"
   ```
   Example: `git commit -m "fix: add flexbox layout to header and fix nav spacing"`

7. **Push your branch**
   ```
   git push -u origin fix-<section-name>
   ```

8. **Open a Pull Request on GitHub**
   - Go to the repo on GitHub
   - You'll see a prompt to create a PR from your branch
   - Title: "Fix: [Section Name]"
   - In the description, list what you found and what you changed

## Sections

| # | Section | Files to check | Difficulty |
|---|---------|---------------|------------|
| 1 | Header / Nav | `css/header.css` + header markup in `index.html` | ★☆☆ |
| 2 | Hero | `css/hero.css` + hero markup in `index.html` | ★★☆ |
| 3 | Features | `css/features.css` + features markup in `index.html` | ★★☆ |
| 4 | Pricing | `css/pricing.css` + pricing markup in `index.html` | ★★★ |
| 5 | Testimonials | `css/testimonials.css` + testimonials markup in `index.html` | ★★★ |
| 6 | Footer | `css/footer.css` + footer markup in `index.html` | ★★☆ |

## Rules

- Only fix YOUR section
- Read both the HTML and the CSS
- Don't edit `base.css` or `app.css`
- Write a clear commit message describing what you fixed
- Your PR description should explain the bugs you found
