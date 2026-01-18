# 🚀 Deployment Guide for TEDx Demo

## Quick Setup (5 minutes)

### Option 1: Vercel (RECOMMENDED) ⭐
**Perfect for non-tech team leads - gives you a live URL to share**

1. **Create GitHub Repository**
   - Go to [github.com](https://github.com) and create a new repository
   - Upload all your project files there

2. **Deploy with Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account (free)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Deploy"
   - **Done!** You'll get a live URL like: `https://tedx-demo-xyz.vercel.app`

3. **Auto-Deploy Setup**
   - Every time you push changes to GitHub, Vercel automatically redeploys
   - No manual work needed!

**Benefits:**
- ✅ Free forever
- ✅ Automatic deployments
- ✅ Custom domain possible
- ✅ HTTPS included
- ✅ Global CDN (fast worldwide)

---

### Option 2: Netlify (Alternative)

1. **Drag & Drop Method**
   - Run `npm run build` in your project
   - Go to [netlify.com](https://netlify.com)
   - Drag the `build` folder to Netlify
   - Get instant live URL

2. **GitHub Integration**
   - Connect your GitHub repo
   - Auto-deploy on every push

---

### Option 3: GitHub Pages (Simple)

1. **Enable GitHub Pages**
   - In your GitHub repo settings
   - Enable Pages from `gh-pages` branch

2. **Deploy Command**
   ```bash
   npm install --save-dev gh-pages
   npm run build
   npx gh-pages -d build
   ```

---

## 📱 Sharing with Your Team Lead

Once deployed, you can share:

1. **Live Demo URL** - `https://your-app.vercel.app`
2. **Mobile-friendly** - works on phones/tablets
3. **Always up-to-date** - auto-updates when you make changes

## 🎯 Demo Features to Highlight

**For Non-Tech Audience:**
- "This shows how students will connect based on ideas, not CVs"
- "Red/black TEDx branding throughout"
- "Works on phones and computers"
- "European focus with 4 countries"
- "1,600 participants for February 2027 event"

**Key Pages to Show:**
1. **Home** - Project vision and statistics
2. **Matching** - How students find each other
3. **Events** - Conference and workshop details
4. **Community** - Post-event engagement
5. **Partners** - Sponsor integration (no commercial ads)

## 🔄 Making Changes

**With Vercel/Netlify:**
1. Edit your code locally
2. Push to GitHub
3. **Automatic deployment** happens
4. Share the same URL - it's updated!

**No need to redeploy manually!**

---

## 💡 Pro Tips for Demo

1. **Test on mobile** - your team lead might view it on phone
2. **Prepare talking points** about each feature
3. **Emphasize the "no CV" philosophy** - it's unique
4. **Show the European map/flags** - visual impact
5. **Highlight TEDx compliance** - no job board features

## 🆘 Need Help?

If you need assistance with deployment:
1. GitHub repository setup
2. Vercel connection
3. Custom domain setup
4. Any technical issues

Just ask! The goal is to get your team lead a live URL they can easily access and share.