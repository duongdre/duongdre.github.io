# GitHub Pages Deployment Guide

## Quick Setup

1. **Create Repository**
   - Go to GitHub and create a new repository
   - Name it something like `portfolio` or `your-username.github.io`

2. **Upload Files**
   - Upload the `index.html` file to your repository
   - Commit the changes

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

4. **Access Your Site**
   - Your site will be available at:
     - `https://yourusername.github.io/repository-name` (if repo name is not your-username.github.io)
     - `https://yourusername.github.io` (if repo name is your-username.github.io)

## Custom Domain (Optional)

1. **Add CNAME file**
   - Create a file named `CNAME` (no extension)
   - Add your domain name (e.g., `yourname.com`)

2. **Configure DNS**
   - Point your domain's A records to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

## Troubleshooting

- **Site not loading**: Wait 5-10 minutes after enabling Pages
- **404 error**: Make sure `index.html` is in the root directory
- **Images not showing**: Ensure image URLs are correct and accessible

## Updates

To update your portfolio:
1. Edit the `index.html` file
2. Commit and push changes
3. GitHub Pages will automatically rebuild your site
