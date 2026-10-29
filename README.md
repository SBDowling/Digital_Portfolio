# Samuel Bradley Dowling – Portfolio

My personal developer portfolio, built with React and deployed on Vercel.

## How to edit the content

All the text on the site (name, intro, skills, experience, education, projects, links) lives in **one file**:

```
src/data/portfolio.js
```

Edit it, save, and the site updates. Other things you might change:

| What | Where |
|---|---|
| CV shown on the Resume page | replace `src/Assets/CV.pdf` (keep the same name) |
| Project screenshots | put images in `public/projects/` and set `image: "/projects/name.png"` in the data file |
| Skill / tool icons | icon names are listed in `src/components/About/Techstack.js` |
| Colours and layout | `src/style.css` |

## Run it locally

```
npm install
npm start
```

Then open http://localhost:3000.

## Deploy

Pushing to the `main` branch on GitHub redeploys the site on Vercel automatically.

## Credit

Based on the portfolio template by [Soumyajit Behera](https://github.com/soumyajit4419/Portfolio).
