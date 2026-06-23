# Vercel Deployment Guide

## Overview

Sapphire OS is configured for seamless deployment on Vercel with automatic CI/CD integration through GitHub Actions.

## Quick Setup

### Option 1: Automatic GitHub Deployment (Recommended)

This is the fastest way to deploy. Vercel will automatically deploy every push to `main`.

#### Step 1: Connect GitHub Repository

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"New Project"**
3. Click **"Import Git Repository"**
4. Select your GitHub account
5. Find and select **`sapphire-os`** repository
6. Click **"Import"**

#### Step 2: Configure Environment Variables

1. In the Vercel project settings, go to **"Settings"** → **"Environment Variables"**
2. Add the following variables:

**For Development/Staging:**
```
NEXT_PUBLIC_API_URL=https://api-staging.sapphire-os.com
NEXT_PUBLIC_BACKEND_URL=https://sapphire-api-staging.herokuapp.com
NEXT_PUBLIC_ENABLE_OFFLINE_MODE=true
NEXT_PUBLIC_ENVIRONMENT=staging
```

**For Production:**
```
NEXT_PUBLIC_API_URL=https://api.sapphire-os.com
NEXT_PUBLIC_BACKEND_URL=https://sapphire-api.herokuapp.com
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENVIRONMENT=production
```

**Authentication (All Environments):**
```
AUTH0_DOMAIN=your-auth0-domain.auth0.com
AUTH0_CLIENT_ID=your-client-id
AUTH0_CLIENT_SECRET=your-client-secret (marked as sensitive)
```

**AI Services (All Environments):**
```
GOOGLE_GEMINI_API_KEY=your-api-key (marked as sensitive)
NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY=your-api-key
YOUTUBE_API_KEY=your-api-key (marked as sensitive)
```

#### Step 3: Configure GitHub Actions Secrets

For auto-deployment via GitHub Actions, add these secrets:

1. Go to GitHub repository **Settings** → **Secrets and variables** → **Actions**
2. Add these secrets:

```
VERCEL_TOKEN          # Get from Vercel: Settings → Tokens → Create
VERCEL_ORG_ID         # Get from Vercel project settings
VERCEL_PROJECT_ID     # Get from Vercel project settings
```

**To get these values:**

- **VERCEL_TOKEN**: Visit https://vercel.com/account/tokens → Create new token
- **VERCEL_ORG_ID**: Go to Vercel Dashboard → Select project → Settings → scroll down to "Project ID" (the org ID is above it)
- **VERCEL_PROJECT_ID**: Same as above, look for "Project ID"

#### Step 4: Deploy

Simply push to the `main` branch:
```bash
git push origin main
```

GitHub Actions will:
1. Run linting
2. Build the project
3. Deploy to Vercel (if build succeeds)

---

### Option 2: Manual CLI Deployment

Deploy directly using the Vercel CLI.

#### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

#### Step 2: Login to Vercel

```bash
vercel login
```

#### Step 3: Deploy

```bash
# Deploy to staging
vercel --env-file .env.local

# Deploy to production
vercel --prod
```

---

## Deployment Configuration Files

### `vercel.json`

Configures build settings and environment variables:

```json
{
  "name": "Sapphire OS",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "framework": "nextjs",
  "nodeVersion": "20.x"
}
```

### `.vercelignore`

Excludes unnecessary files from deployment to reduce bundle size:

```
node_modules
.git
.github
docs
.next (rebuilt on deploy)
```

---

## Environment Variables

### Public Variables (Prefixed with `NEXT_PUBLIC_`)

These are visible in browser and should contain non-sensitive data:

```
NEXT_PUBLIC_API_URL         # API endpoint
NEXT_PUBLIC_BACKEND_URL     # Backend service URL
NEXT_PUBLIC_ENVIRONMENT     # development | staging | production
NEXT_PUBLIC_ENABLE_OFFLINE_MODE
NEXT_PUBLIC_ENABLE_ANALYTICS
NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY
```

### Secret Variables (No `NEXT_PUBLIC_` prefix)

These are server-side only and hidden from browser:

```
AUTH0_CLIENT_SECRET
GOOGLE_GEMINI_API_KEY
YOUTUBE_API_KEY
```

---

## Deployment Environments

### Preview Deployment

Automatically created for every pull request. Preview URLs are commented on the PR.

- Triggered by: Pull requests
- Deployed to: `https://sapphire-os-git-pr-XX.vercel.app`
- Auto-removed when PR is closed

### Staging Deployment

For testing before production.

- Triggered by: Push to `develop` branch
- Deployed to: Custom staging domain
- Useful for: QA, testing features, performance testing

### Production Deployment

Live for end users.

- Triggered by: Push to `main` branch
- Deployed to: `https://sapphire-os.vercel.app`
- Has all analytics and monitoring enabled

---

## GitHub Actions Workflow

The `.github/workflows/deploy.yml` automates the entire process:

1. **On every push to main or develop:**
   - Install dependencies
   - Run linter (eslint)
   - Build project
   - Run tests

2. **If build succeeds and push is to main:**
   - Deploy to Vercel production

### Viewing Deployment Status

Check the deployment status:
1. Go to GitHub repository → **Actions** tab
2. Click on the latest workflow run
3. See build logs and deployment status

---

## Monitoring & Analytics

### Vercel Analytics

1. Go to Vercel project → **Analytics** tab
2. View:
   - Web Vitals
   - Performance metrics
   - Error rates
   - Deployment history

### Error Tracking

Vercel automatically logs errors. To view:
1. Project Settings → **Monitoring**
2. View error logs and stack traces

---

## Custom Domain Setup

To use a custom domain instead of `vercel.app`:

1. Go to Vercel project → **Settings** → **Domains**
2. Click **"Add Domain"**
3. Enter your domain (e.g., `sapphire-os.com`)
4. Follow the DNS configuration instructions
5. Update environment variables to use the custom domain

---

## Deployment Checklist

Before deploying to production:

- [ ] All tests passing
- [ ] No ESLint errors
- [ ] Production environment variables configured
- [ ] API endpoints tested
- [ ] Auth credentials valid
- [ ] API keys for external services (Gemini, YouTube) verified
- [ ] Database migrations applied (if applicable)
- [ ] Analytics tracking tested
- [ ] Performance optimizations verified
- [ ] Security headers in place

---

## Troubleshooting

### Build Fails

**Check:**
1. Vercel build logs: Project → Deployments → Click failed deployment → Logs
2. Verify environment variables are set
3. Check Node.js version compatibility (using 20.x)
4. Ensure all dependencies are in `package.json`

### Environment Variables Not Loading

1. Verify variables are set in Vercel project settings
2. Restart deployment after adding variables
3. Public variables must start with `NEXT_PUBLIC_`
4. Check `.env.local` is in `.gitignore` (shouldn't be in repo)

### Deployment Takes Too Long

1. Check `.vercelignore` excludes unnecessary files
2. Review build logs for slow steps
3. Verify no heavy computations during build
4. Check for large dependencies

### 404 Errors After Deployment

1. Ensure routes are properly configured in `app/` directory
2. Check `vercel.json` for rewrites/redirects
3. Verify ISR (Incremental Static Regeneration) settings
4. Clear Vercel cache: Project → Settings → Deployment

---

## Performance Tips

1. **Image Optimization**: Next.js automatically optimizes images
2. **Code Splitting**: Next.js splits code per route
3. **Compression**: Enabled by default in `next.config.ts`
4. **Caching**: Leverage HTTP caching headers
5. **CDN**: Vercel's edge network serves static assets globally

---

## CI/CD Pipeline

### GitHub → Vercel Flow

```
Git Push (main)
    ↓
GitHub Actions triggered
    ↓
Lint Check ✓
    ↓
Build ✓
    ↓
Test ✓
    ↓
Vercel Deploy ✓
    ↓
Live at https://sapphire-os.vercel.app
```

---

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Custom Domains](https://vercel.com/docs/concepts/projects/domains)

---

## Support

For issues:
1. Check Vercel build logs
2. Review GitHub Actions logs
3. Verify environment configuration
4. Check [Vercel Support](https://vercel.com/help)
