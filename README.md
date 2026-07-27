# Alexander Knight Portfolio Website

## Preview locally
Open `index.html` directly in a browser, or run a local server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Add FPV footage
In `index.html`, find the `video-placeholder` elements under the `#fpv` section. Replace each placeholder `<div>` with a YouTube or Vimeo embed, for example:

```html
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" title="FPV reel" allowfullscreen></iframe>
```

Add this to `styles.css` if needed:

```css
.video-card iframe { width: 100%; aspect-ratio: 16/9; border: 0; }
```

## Publish free
- GitHub Pages: push this folder to a repository, then enable Pages in repository settings.
- Netlify: drag the folder into Netlify Drop.
- Cloudflare Pages: connect a Git repository and use no build command.

## Update content
All text is in `index.html`. Images and PDFs are in `assets/`.
