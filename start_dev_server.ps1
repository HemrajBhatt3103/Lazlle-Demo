# Restaurant Menu Development Server - PowerShell
$Host.UI.RawUI.WindowTitle = "Restaurant Menu Development Server"

Write-Host ""
Write-Host "🍽️  Restaurant Menu Development Server" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Check Python
try {
    $pythonVersion = python --version 2>&1
    Write-Host "✅ Python found: $pythonVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Python is not installed or not in PATH" -ForegroundColor Red
    Write-Host ""
    Write-Host "📥 Please install Python from https://python.org" -ForegroundColor Yellow
    Write-Host "   Make sure to check 'Add Python to PATH' during installation" -ForegroundColor Yellow
    Write-Host ""
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""

# Check if menu.html exists
if (-not (Test-Path "menu.html")) {
    Write-Host "⚠️  menu.html not found in current directory" -ForegroundColor Yellow
    Write-Host "📁 Make sure you're running this from C:\DOWNS\Lazlle_Demo\" -ForegroundColor Yellow
    Write-Host ""
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "✅ Menu file found" -ForegroundColor Green
Write-Host ""

# Run the development server
Write-Host "🚀 Starting development server..." -ForegroundColor Green
Write-Host ""

try {
    python run_menu_dev.py
} catch {
    Write-Host "❌ Failed to start development server" -ForegroundColor Red
    Write-Host "Error: $_" -ForegroundColor Red
}

Write-Host ""
Write-Host "👋 Development server stopped" -ForegroundColor Yellow
Read-Host "Press Enter to exit"