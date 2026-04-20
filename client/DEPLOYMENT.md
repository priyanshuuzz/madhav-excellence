# Netlify Deployment Guide

## Quick Deploy

### Option 1: Drag & Drop (Easiest)
1. Run `npm run build` in the `client` folder
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `client/dist` folder to the upload area
4. Done! Your site is live

### Option 2: Git Deploy (Recommended)
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. Configure build settings:
   - **Base directory**: `client`
   - **Build command**: `npm run build`
   - **Publish directory**: `client/dist`
6. Click "Deploy site"

### Option 3: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy from client folder
cd client
netlify deploy --prod
```

## Important Files

- `client/public/_redirects` - Handles client-side routing
- `client/netlify.toml` - Netlify configuration
- `client/vite.config.js` - Vite build configuration

## Environment Variables

If you need environment variables:
1. Go to Site settings → Environment variables
2. Add your variables (e.g., API URLs)
3. Redeploy the site

## Custom Domain

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

## Troubleshooting

- **404 on refresh**: Ensure `_redirects` file exists in `public` folder
- **Assets not loading**: Check that all paths start with `/` (e.g., `/logo.png`)
- **Build fails**: Run `npm run build` locally first to check for errors

## Build Output

After running `npm run build`, the `dist` folder contains:
- `index.html` - Main HTML file
- `assets/` - CSS and JS bundles
- `logo.png`, `hero-image.jpg` - Static assets
- `_redirects` - Routing configuration
