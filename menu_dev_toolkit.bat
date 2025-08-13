@echo off
title Restaurant Menu Development Toolkit

:menu
cls
echo.
echo 🍽️  Restaurant Menu Development Toolkit
echo ==========================================
echo.
echo 1. Start Development Server (with ngrok)
echo 2. Start Local Server Only
echo 3. Test Menu Features
echo 4. Generate All QR Codes
echo 5. Setup ngrok Authentication
echo 6. Exit
echo.
set /p choice="Choose an option (1-6): "

if "%choice%"=="1" goto start_dev
if "%choice%"=="2" goto start_local
if "%choice%"=="3" goto test_features
if "%choice%"=="4" goto generate_qr
if "%choice%"=="5" goto setup_ngrok
if "%choice%"=="6" goto exit
goto menu

:start_dev
cls
echo 🚀 Starting Development Server with ngrok...
echo.
python run_menu_dev.py
pause
goto menu

:start_local
cls
echo 🖥️  Starting Local Server Only...
echo.
python run_local_menu.py
pause
goto menu

:test_features
cls
echo 🧪 Testing Menu Features...
echo.
set /p url="Enter base URL (e.g., http://localhost:8000): "
python test_menu_features.py "%url%"
pause
goto menu

:generate_qr
cls
echo 📱 Generating QR Codes for All Tables...
echo.
set /p url="Enter base URL (e.g., https://abc123.ngrok.io): "
python generate_all_qr_codes.py "%url%"
pause
goto menu

:setup_ngrok
cls
echo 🔧 Setting up ngrok Authentication...
echo.
python setup_ngrok.py
pause
goto menu

:exit
echo.
echo 👋 Goodbye!
exit /b 0