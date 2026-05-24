# mitl-site

Reworked Mark in the Loop site, repositioned as AI-tooling consulting.

- `index.html` — consulting homepage (services, approach, about, contact).
- `content.html` — the original video series + resource library.
- `css/styles.css` — all shared styles.
- `js/main.js` — nav, smooth scroll, mobile menu, footer year, Three.js init.
- `js/three-bg.js` — animated hero background + per-section particle systems.
- `js/content.js` — series-card toggle, resource filter, prompt modal (loaded only on `content.html`).
- `assets/` — logos.

## Local preview

```sh
cd ~/mitl-site
python3 -m http.server 8000
```

Open <http://localhost:8000/>.

## Deploy (GitHub Pages)

1. Create a new repo (or push into an existing one configured for Pages).
2. Push these files to the default branch.
3. In repo Settings → Pages, set the source to the default branch / root.
4. To repoint `www.markintheloop.com`, add a `CNAME` file with `www.markintheloop.com` and remove the CNAME from the old repo. DNS stays the same.

## Primary CTA

Hero buttons use `mailto:markjeromecr@gmail.com`. Change in `index.html` if the contact email changes.
