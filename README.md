# Clemmentino Portfolio

A light, interactive portfolio built with Next.js and designed for Vercel deployment.

The current direction is:
- portrait-led hero
- designer-forward runway layout
- light editorial palette
- stacked scene-style project sections
- responsive motion and interaction

## Tech Stack

- Next.js 16
- React 19
- App Router
- Custom CSS with a light visual system, stacked scene layouts, and interactive motion

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start the production server locally:

```bash
npm run start
```

## Deploying To Vercel

This project is already structured to work cleanly on Vercel with no special configuration.

### Option 1: Deploy from Git

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Open Vercel and create a new project.
3. Import the repository.
4. Let Vercel detect the framework as `Next.js`.
5. Click `Deploy`.

### Option 2: Deploy with the Vercel CLI

```bash
npm i -g vercel
vercel
```

## Project Structure

```text
app/
  globals.css
  layout.js
  page.js
components/
  portfolio-experience.jsx
```

## Files To Customize First

If you want to make the portfolio fully yours, start here:

- `components/portfolio-experience.jsx`
  Update the hero copy, featured projects, capabilities, contact email, and section content.
- `app/layout.js`
  Update the metadata title and description for search and link previews.
- `app/globals.css`
  Adjust colors, spacing, typography feel, and motion styling.
- `public/me.jpg`
  Replace the portrait if you want a different hero image.

## Notes

- The current project sections still use placeholder names and placeholder case studies.
- The contact email is a placeholder and should be replaced before deployment.
- The build has already been verified locally with `npm run build`.
