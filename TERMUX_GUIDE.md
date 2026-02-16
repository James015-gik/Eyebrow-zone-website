# Termux Deployment Guide for Eyebrow Zone Website

## Prerequisites
1. Termux app installed on your Android device
2. GitHub account created

## Step 1: Install Git in Termux

Open Termux and run:

```bash
pkg update && pkg upgrade
pkg install git
```

## Step 2: Configure Git

Set up your GitHub username and email:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Step 3: Create GitHub Repository

1. Open GitHub.com in your browser
2. Click "+" → "New repository"
3. Name: `eyebrow-zone-website`
4. Description: "Eyebrow Zone Beauty Salon Website"
5. Set to Public
6. Don't initialize with README
7. Click "Create repository"

## Step 4: Prepare Your Website Files

In Termux, navigate to where you want to store your website:

```bash
# Go to storage (if you want to access phone storage)
termux-setup-storage
cd ~/storage/shared/

# Create a folder for your website
mkdir eyebrow-zone-website
cd eyebrow-zone-website
```

Now copy all your website files into this folder:
- index.html
- styles.css
- script.js
- README.md
- DEPLOYMENT_GUIDE.md
- .gitignore
- netlify.toml
- images/ (folder with all images)

## Step 5: Initialize Git Repository

In Termux, inside your website folder:

```bash
# Initialize git
git init

# Add all files
git add .

# Check what will be committed
git status

# Commit files
git commit -m "Initial commit - Eyebrow Zone website"
```

## Step 6: Connect to GitHub

**Important:** For authentication, you'll need a Personal Access Token (not password)

### Create GitHub Token:
1. Go to GitHub.com → Settings → Developer settings
2. Click "Personal access tokens" → "Tokens (classic)"
3. Click "Generate new token (classic)"
4. Give it a name: "Termux Access"
5. Select scopes: Check "repo" (all sub-options)
6. Click "Generate token"
7. **COPY THE TOKEN** (you won't see it again!)

### Push to GitHub:

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/eyebrow-zone-website.git

# Verify remote was added
git remote -v

# Push to GitHub
git branch -M main
git push -u origin main
```

When prompted for username: Enter your GitHub username
When prompted for password: **Paste your Personal Access Token** (not your password!)

## Step 7: Deploy to Netlify

### Option A: Connect GitHub to Netlify (Recommended)

1. Go to [Netlify.com](https://netlify.com) on your browser
2. Sign up/Login (can use GitHub account)
3. Click "Add new site" → "Import an existing project"
4. Choose "GitHub"
5. Authorize Netlify
6. Select `eyebrow-zone-website`
7. Click "Deploy site"
8. Wait 2-3 minutes
9. Your site is live! 🎉

### Option B: Manual Deploy

1. Download your website files as a ZIP
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag and drop your ZIP file
4. Site deployed!

## Making Updates

When you make changes to your website:

```bash
# Navigate to your website folder
cd ~/storage/shared/eyebrow-zone-website

# Check what changed
git status

# Add changed files
git add .

# Commit with a message
git commit -m "Updated services pricing"

# Push to GitHub
git push
```

Netlify will automatically detect changes and redeploy (takes 1-2 minutes).

## Common Termux Commands

```bash
# See where you are
pwd

# List files
ls -la

# Go to previous directory
cd ..

# View file contents
cat filename.html

# Edit file (using nano editor)
nano index.html
```

## Troubleshooting

### "Permission denied" error
Run: `termux-setup-storage` and grant storage permission

### "Authentication failed"
Make sure you're using your Personal Access Token, not your password

### Can't find files
Make sure you copied files to the correct directory. Check with: `ls -la`

### Git push rejected
```bash
git pull origin main --rebase
git push origin main
```

### Need to remove git remote and re-add
```bash
git remote remove origin
git remote add origin https://github.com/YOUR-USERNAME/eyebrow-zone-website.git
```

## Tips for Termux

1. **Storage Access**: Run `termux-setup-storage` to access phone files
2. **Keyboard**: Install Hacker's Keyboard from Play Store for easier terminal use
3. **Copy/Paste**: Long press on screen for copy/paste options
4. **Tab Completion**: Press Tab to auto-complete file/folder names
5. **Command History**: Use Up/Down arrows to navigate previous commands

## Quick Reference

```bash
# Full workflow for updates
cd ~/storage/shared/eyebrow-zone-website
git add .
git commit -m "Description of changes"
git push

# Check status
git status

# View commit history  
git log --oneline

# Create new branch
git checkout -b new-feature

# Switch branches
git checkout main
```

## Important Files Location

After running `termux-setup-storage`:
- Phone Storage: `~/storage/shared/`
- Downloads: `~/storage/downloads/`
- DCIM: `~/storage/dcim/`

## Your Repository URLs

- GitHub Repo: `https://github.com/YOUR-USERNAME/eyebrow-zone-website`
- Live Site: `https://your-site-name.netlify.app`

## Need Help?

- Termux Wiki: https://wiki.termux.com/
- Git Documentation: https://git-scm.com/doc
- GitHub Help: https://docs.github.com/

---

**Remember:** 
- Always use Personal Access Token for authentication, not your password
- Git commands are case-sensitive
- Use Tab completion to avoid typos
- Commit often with clear messages

Good luck with your deployment! 🚀
