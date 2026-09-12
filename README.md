# Timothy Dixon — Personal portfolio

A responsive, static portfolio with a dark terminal-inspired design. All career, education, skill, and contact facts come from Resume-2026.pdf. The about paragraph condenses the current role’s responsibilities; the experience bullets retain the resume’s wording. “Present” is preserved as supplied in the resume.

## Preview

Open `index.html` in a browser. No installation, build step, backend, external fonts, or third-party dependencies are required. A small dependency-free script toggles the mobile hamburger menu at widths of 760px and below. It closes after selecting a link or pressing Escape. Navigation and contact links remain available without JavaScript. Email and phone links open the visitor’s configured email or calling app.

## Deploy on GitHub Pages

1. Create a GitHub repository, or use an existing repository. A public repository works with GitHub Free.
2. Upload the **contents** of this folder to the repository’s `main` branch: `index.html`, the `assets` folder, `.nojekyll`, and this README. Keep `index.html` at the repository root, not inside an extra portfolio folder. The empty `.nojekyll` file may be hidden by your file manager.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**. Choose **main** and **/(root)**, then click **Save**.
5. Wait for the Pages deployment to complete. Open the site link shown in Pages settings. Later commits to the selected branch update the site.

Relative asset paths support both a user site and a project site hosted under a repository subpath. No base URL changes are needed.

Reference: [GitHub’s publishing-source instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Files and editing

- `index.html`: All text, navigation, contact links, metadata, and embedded favicon.
- `assets/styles.css`: Layout, colors, typography, responsive breakpoints, reduced-motion support, and print styles.
- `assets/menu.js`: Accessible mobile navigation toggle and keyboard behavior.
- `.nojekyll`: Allows plain static file publishing without Jekyll processing.

Edit the text directly in `index.html`. When changing contact information, update both the visible text and the `mailto:` or `tel:` destination. The design uses system fonts, semantic sections, a skip link, visible keyboard focus, and navigation that remains available on mobile.
