# Eyebrow Zone - Beauty Salon Website

A modern, responsive website for Eyebrow Zone beauty salon in New York City.

## Features

- **Responsive Design**: Fully responsive across all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Service Showcase**: Complete listing of all beauty services with pricing
- **Interactive Gallery**: Image gallery with lightbox functionality
- **Special Promotions**: Dedicated section for current offers and deals
- **Contact Information**: Easy access to location, hours, and contact details
- **Mobile-Friendly Navigation**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Enhanced user experience with smooth page transitions
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- Google Fonts (Playfair Display, Poppins)
- Google Maps Embed

## Deployment Instructions

### GitHub Setup

1. **Create a new repository on GitHub**
   - Go to [GitHub](https://github.com)
   - Click "New repository"
   - Name it: `eyebrow-zone-website` (or your preferred name)
   - Choose "Public"
   - Don't initialize with README (we already have one)
   - Click "Create repository"

2. **Push your code to GitHub**
   ```bash
   # Navigate to your project folder
   cd eyebrow-zone-website
   
   # Initialize git (if not already done)
   git init
   
   # Add all files
   git add .
   
   # Commit files
   git commit -m "Initial commit - Eyebrow Zone website"
   
   # Add your GitHub repository as remote
   git remote add origin https://github.com/YOUR-USERNAME/eyebrow-zone-website.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

### Netlify Deployment

#### Option 1: Deploy from GitHub (Recommended)

1. **Sign up/Login to Netlify**
   - Go to [Netlify](https://www.netlify.com)
   - Sign up or login (you can use your GitHub account)

2. **Create New Site**
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Authorize Netlify to access your GitHub

3. **Configure Build Settings**
   - Select your repository: `eyebrow-zone-website`
   - Build settings:
     - Base directory: (leave empty)
     - Build command: (leave empty - it's a static site)
     - Publish directory: `/` or `.` (root directory)
   - Click "Deploy site"

4. **Custom Domain (Optional)**
   - Once deployed, go to "Site settings" → "Domain management"
   - Click "Add custom domain"
   - Follow instructions to connect your domain

#### Option 2: Manual Deploy via Netlify Drop

1. **Go to Netlify Drop**
   - Visit [Netlify Drop](https://app.netlify.com/drop)
   
2. **Drag and Drop**
   - Drag your entire project folder to the Netlify Drop zone
   - Netlify will automatically deploy your site

3. **Get Your URL**
   - Netlify will provide you with a URL like: `https://random-name-123456.netlify.app`
   - You can customize this in Site settings → Domain management → "Edit site name"

### Custom Domain Setup

If you have a custom domain:

1. **In Netlify Dashboard**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter your domain name

2. **Update DNS Settings**
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Add DNS records as instructed by Netlify
   - Wait for DNS propagation (can take up to 48 hours)

3. **Enable HTTPS**
   - Netlify automatically provisions SSL certificate
   - Your site will be accessible via HTTPS

## File Structure

```
eyebrow-zone-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── README.md          # This file
├── DEPLOYMENT_GUIDE.md # Step-by-step deployment instructions
├── TERMUX_GUIDE.md    # Termux-specific deployment guide
├── .gitignore         # Git ignore rules
├── netlify.toml       # Netlify configuration
└── images/            # All salon photos and promotional images
    ├── eyelash-lifting.jpg
    ├── eyebrow-threading-tint.jpg
    ├── henna-design.jpg
    ├── mink-extensions.jpg
    ├── waxing.jpg
    ├── interior.jpg
    ├── storefront.jpg
    ├── birthday-promo.jpg
    ├── body-waxing.jpg
    ├── waxing-service.jpg
    └── (other images)
```

## Customization

### Update Content
- **Business Hours**: Edit the hours in the `contact` section of `index.html`
- **Phone Numbers**: Update phone numbers throughout `index.html`
- **Address**: Modify address in the contact section
- **Services & Pricing**: Update service lists in the `services` section
- **Promotions**: Modify the promotions section with current offers

### Update Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #d4536b;
    --secondary-color: #f8b4c3;
    --accent-color: #ff69b4;
    /* etc... */
}
```

### Add Images
Replace the Unsplash placeholder images with your own:
1. Upload images to your repository
2. Update image URLs in `index.html`
3. Or use a service like Cloudinary or ImgBB

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized images
- Minimal dependencies
- Fast loading times
- Lighthouse score: 90+

## Future Enhancements

- [ ] Add online booking system
- [ ] Integrate customer reviews
- [ ] Add blog section
- [ ] Implement contact form
- [ ] Add before/after gallery
- [ ] Multi-language support
- [ ] Social media feed integration

## Support

For issues or questions about the website, please contact:
- Email: info@eyebrowzone.com (update with actual email)
- Phone: 212-518-3098

## License

This website is proprietary and belongs to Eyebrow Zone beauty salon.

---

**Built with ❤️ for Eyebrow Zone**

Last Updated: February 2026
