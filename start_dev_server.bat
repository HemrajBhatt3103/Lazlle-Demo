@echo off
title Restaurant Menu Development Server

echo.
echo 🍽️  Restaurant Menu Development Server
echo =====================================
echo.

REM Check if Python is available
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Python is not installed or not in PATH
    echo.
    echo 📥 Please install Python from https://python.org
    echo    Make sure to check "Add Python to PATH" during installation
    echo.
    pause
    exit /b 1
)

echo ✅ Python found
echo.

REM Check if we're in the right directory
if not exist "menu.html" (
    echo ⚠️  menu.html not found in current directory
    echo 📁 Make sure you're running this from C:\DOWNS\Lazlle_Demo\
    echo.
    pause
    exit /b 1
)

echo ✅ Menu file found
echo.

REM Run the development server
echo 🚀 Starting development server...
echo.
python run_menu_dev.py

echo.
echo 👋 Development server stopped
pause