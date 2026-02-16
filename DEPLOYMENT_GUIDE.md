# Quick Deployment Guide

## Prerequisites
- GitHub account ([sign up here](https://github.com/join))
- Netlify account ([sign up here](https://app.netlify.com/signup))
- Git installed on your computer ([download here](https://git-scm.com/downloads))

## Step-by-Step Deployment

### Step 1: Prepare Your Files
1. Download all website files to a folder on your computer
2. Files you should have:
   - index.html
   - styles.css
   - script.js
   - README.md
   - .gitignore
   - netlify.toml

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the "+" icon → "New repository"
3. Fill in:
   - Repository name: `eyebrow-zone-website`
   - Description: "Official website for Eyebrow Zone beauty salon"
   - Select: Public
   - **Don't** check "Add a README file"
4. Click "Create repository"

### Step 3: Upload Code to GitHub

**Option A: Using GitHub Desktop (Easier for beginners)**

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Install and sign in with your GitHub account
3. Click "File" → "Add Local Repository"
4. Select your website folder
5. Click "Publish repository"
6. Choose settings and click "Publish"

**Option B: Using Command Line**

Open Terminal (Mac/Linux) or Command Prompt (Windows):

```bash
# Navigate to your website folder
cd path/to/your/website/folder

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Eyebrow Zone website"

# Add GitHub repository
git remote add origin https://github.com/YOUR-USERNAME/eyebrow-zone-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.

### Step 4: Deploy to Netlify

1. Go to [Netlify](https://app.netlify.com)
2. Sign in (you can use your GitHub account)
3. Click "Add new site" → "Import an existing project"
4. Click "Deploy with GitHub"
5. Authorize Netlify to access GitHub
6. Select your repository: `eyebrow-zone-website`
7. Keep default settings:
   - Base directory: (empty)
   - Build command: (empty)
   - Publish directory: `.` or `/`
8. Click "Deploy site"

### Step 5: Wait for Deployment

- Netlify will build and deploy your site (usually takes 1-2 minutes)
- You'll see a progress indicator
- Once complete, you'll get a URL like: `https://random-name-123456.netlify.app`

### Step 6: Customize Your Site URL (Optional)

1. In Netlify dashboard, go to "Site settings"
2. Click "Change site name" under "Site information"
3. Enter a custom name: `eyebrow-zone` 
4. Your URL will become: `https://eyebrow-zone.netlify.app`

### Step 7: Add Custom Domain (Optional)

If you have a domain name (like eyebrowzone.com):

1. In Netlify: Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain name
4. Follow the DNS setup instructions
5. Update your domain's DNS settings at your registrar
6. Wait for DNS propagation (can take 24-48 hours)
7. Netlify will automatically add HTTPS

## Making Updates

### To update your website:

1. Edit your local files
2. Push changes to GitHub:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
3. Netlify automatically detects changes and redeploys (takes 1-2 minutes)

## Troubleshooting

### Site not loading?
- Check if deployment completed successfully in Netlify dashboard
- Clear your browser cache
- Try opening in incognito/private mode

### Images not showing?
- Make sure image URLs are correct
- Check browser console for errors (F12 → Console tab)

### Changes not appearing?
- Wait 1-2 minutes for Netlify to rebuild
- Check Netlify deploy log for errors
- Clear browser cache

### DNS not working?
- DNS changes can take up to 48 hours
- Use [DNS Checker](https://dnschecker.org/) to verify propagation
- Double-check DNS records match Netlify's instructions

## Important URLs

- **GitHub Repository**: https://github.com/YOUR-USERNAME/eyebrow-zone-website
- **Netlify Dashboard**: https://app.netlify.com
- **Your Live Site**: https://your-site-name.netlify.app

## Need Help?

- **Netlify Documentation**: https://docs.netlify.com
- **GitHub Documentation**: https://docs.github.com
- **Web Development Help**: https://stackoverflow.com

## Checklist

- [ ] All files uploaded to GitHub
- [ ] Site deployed on Netlify
- [ ] Site is accessible via URL
- [ ] All pages and links work correctly
- [ ] Images load properly
- [ ] Mobile version looks good
- [ ] Contact information is correct
- [ ] Phone numbers are clickable
- [ ] Google Maps location is correct
- [ ] Custom domain configured (if applicable)

## Estimated Time

- GitHub setup: 5-10 minutes
- Netlify deployment: 2-5 minutes
- Custom domain (optional): 5 minutes + 24-48 hours for DNS

**Total: ~15-20 minutes (excluding DNS propagation)**

---

**Congratulations! Your website is now live! 🎉**

Share your website URL with customers and on social media!
