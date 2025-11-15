# Deploying Your Amius Website

Your website is ready to deploy! Here are the easiest options:

## Option 1: Netlify (Recommended - Easiest)

1. **Push to GitHub:**
   - Create a new repository on GitHub
   - Push this project to your repo

2. **Deploy on Netlify:**
   - Go to [netlify.com](https://netlify.com) and sign up (free)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account and select your repo
   - Build settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Click "Deploy site"

3. **Done!** Netlify will:
   - Build your site automatically
   - Give you a free URL (yoursite.netlify.app)
   - Auto-deploy whenever you push to GitHub
   - Provide free HTTPS
   - Support custom domains (if you have one)

## Option 2: Vercel (Also Great)

1. Push to GitHub (same as above)
2. Go to [vercel.com](https://vercel.com) and sign up
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite - just click "Deploy"

## Option 3: GitHub Pages

This requires a bit more setup but is also free:

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   Add these scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
   
   Add this field (replace YOUR-USERNAME and YOUR-REPO):
   ```json
   "homepage": "https://YOUR-USERNAME.github.io/YOUR-REPO"
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages:**
   - Go to your repo Settings → Pages
   - Select "gh-pages" branch
   - Save

## Build Command (For Manual Hosting)

If you want to build manually and host anywhere:

```bash
npm run build
```

This creates a `dist` folder with your production-ready site. Upload this folder to any static hosting service.

## Custom Domain Setup

Once deployed, you can add your custom domain:

**For Netlify/Vercel:**
- Go to Domain Settings
- Add your custom domain
- Follow DNS instructions

**For GitHub Pages:**
- Add a CNAME file to your `public` folder with your domain
- Update your DNS to point to GitHub's servers

## Environment Notes

Your site is 100% static (no backend database), so it works perfectly on all these platforms. The contact form currently logs to the console - you'll want to connect it to a form service like:
- Formspree
- Netlify Forms (built-in if using Netlify)
- EmailJS
- Your own backend API

## Recommended: Netlify

For your Amius site, I recommend **Netlify** because:
- Zero configuration needed
- Free SSL/HTTPS automatically
- Automatic deployments from GitHub
- Built-in form handling (can easily connect your contact form)
- Lightning fast CDN
- Custom domain support

The whole process takes about 5 minutes!
