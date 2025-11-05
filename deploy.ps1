# Portfolio App Deployment Script for Windows PowerShell
# This script manually builds and deploys the app to GitHub Pages

Write-Host "🚀 Starting deployment process..." -ForegroundColor Green

# Check if we're in a git repository
if (!(Test-Path ".git")) {
    Write-Host "❌ Error: Not in a git repository" -ForegroundColor Red
    exit 1
}

# Check if all changes are committed
$gitStatus = git status --porcelain
if ($gitStatus) {
    Write-Host "⚠️  Warning: You have uncommitted changes" -ForegroundColor Yellow
    $response = Read-Host "Do you want to continue? (y/N)"
    if ($response -notmatch '^[Yy]$') {
        Write-Host "Deployment cancelled" -ForegroundColor Yellow
        exit 1
    }
}

Write-Host "📦 Installing dependencies..." -ForegroundColor Cyan
npm ci

if ($LASTEXITCODE -eq 0) {
    Write-Host "🔨 Building the project..." -ForegroundColor Cyan
    npm run build
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Build successful!" -ForegroundColor Green
        Write-Host "🚀 Deploying to GitHub Pages..." -ForegroundColor Cyan
        npm run deploy
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "🎉 Deployment successful!" -ForegroundColor Green
            Write-Host "📱 Your site will be available at: https://shriram-iyer.github.io/PORTFOLIO-APP" -ForegroundColor Cyan
            Write-Host "⏰ Note: It may take a few minutes for changes to appear" -ForegroundColor Yellow
        } else {
            Write-Host "❌ Deployment failed" -ForegroundColor Red
            exit 1
        }
    } else {
        Write-Host "❌ Build failed" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "❌ npm ci failed" -ForegroundColor Red
    exit 1
}