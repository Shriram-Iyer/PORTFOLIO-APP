# Shriram V. Iyer — Portfolio

Modern React + Vite portfolio tailored for deployment on GitHub Pages.

## 🚀 Live Demo

Visit the live portfolio at: [https://shriram-iyer.github.io/PORTFOLIO-APP](https://shriram-iyer.github.io/PORTFOLIO-APP)

## 🛠️ Local Development

```bash
npm install
npm run dev
```

## 📦 Production Build

```bash
npm run build
npm run preview
```

## 🌐 Deploying to GitHub Pages

This project supports both automatic and manual deployment to GitHub Pages.

### Automatic Deployment (Recommended)

The project is configured with GitHub Actions for automatic deployment:

1. **Push to main branch**: Any push to the `main` branch will automatically trigger a deployment
2. **Manual trigger**: You can manually trigger a deployment from the GitHub Actions tab
3. **First-time setup**: 
   - Go to your repository's Settings → Pages
   - Set source to "GitHub Actions"
   - Your site will be available at `https://shriram-iyer.github.io/PORTFOLIO-APP`

### Manual Deployment

For manual deployment using the `gh-pages` package:

**On Windows (PowerShell):**
```powershell
.\deploy.ps1
```

**On macOS/Linux:**
```bash
chmod +x deploy.sh
./deploy.sh
```

**Or using npm directly:**
```bash
npm run deploy
```

This builds the project and publishes the `dist` folder to the `gh-pages` branch.

### ⚙️ Configuration

The project is pre-configured for GitHub Pages deployment:
- **Base path**: Set to `/PORTFOLIO-APP/` in `vite.config.ts`
- **Homepage**: Configured in `package.json`
- **GitHub Actions**: Workflow file in `.github/workflows/deploy.yml`

## 🎨 Customizing

- Update copy and content in `src/data/`
- Replace the resume link by placing your PDF in `public/assets/shriram-iyer-resume.pdf` (create the folder if needed) or updating `profile.resumeUrl`
- Adjust colors and typography via the Tailwind `@theme` section in `src/styles.css`

## 📁 Project Structure

```
src/
├── components/          # React components
├── context/            # Theme context and providers
├── data/              # Portfolio content and data
├── hooks/             # Custom React hooks
└── styles.css         # Global styles
```

## 🔧 Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: GitHub Pages with GitHub Actions
