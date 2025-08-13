@echo off
title Quick Server Fix

echo 🔧 Quick Server Fix Tool
echo ========================

echo.
echo 1. Killing any existing Python servers...
taskkill /f /im python.exe >nul 2>&1
echo ✅ Done

echo.
echo 2. Checking if we're in the right directory...
if not exist "menu.html" (
    echo ❌ menu.html not found!
    echo 📁 Please run this from C:\DOWNS\Lazlle_Demo\
    pause
    exit /b 1
)
echo ✅ Found menu.html

echo.
echo 3. Starting robust server...
python robust_menu_server.py

pause