# 🍽️ Restaurant Menu Development Server - Quick Start

## One-Click Setup for Testing Your Menu on Any Device

### 📋 Prerequisites (One-time setup)

1. **Install Python** (if not already installed)
   - Download from https://python.org
   - ✅ **IMPORTANT**: Check "Add Python to PATH" during installation

2. **Install ngrok** (if not already installed)
   - Download from https://ngrok.com/download
   - Extract `ngrok.exe` to this folder: `C:\DOWNS\Lazlle_Demo\`
   - Or add ngrok to your system PATH

### 🚀 Running the Development Server

#### Option 1: Double-click the batch file
```
Double-click: start_dev_server.bat
```

#### Option 2: Run PowerShell script
```powershell
Right-click start_dev_server.ps1 → "Run with PowerShell"
```

#### Option 3: Command line
```bash
cd C:\DOWNS\Lazlle_Demo
python run_menu_dev.py
```

### 📱 What Happens Next

The script will automatically:

1. ✅ **Check dependencies** and install missing packages
2. 🚀 **Start local server** at `http://localhost:8000`
3. 🌐 **Create ngrok tunnel** for internet access
4. 📱 **Generate QR code** and save as `table2_qr.png`
5. 📊 **Display all URLs** in the console

### 🎯 Expected Output

```
🍽️  RESTAURANT MENU DEVELOPMENT SERVER READY
======================================================================
📁 Menu Directory: C:\DOWNS\Lazlle_Demo
🖥️  Local Server: http://localhost:8000
🌍 Public URL: https://abc123.ngrok.io
📱 Menu URL: https://abc123.ngrok.io/menu.html?table=2
📷 QR Code File: C:\DOWNS\Lazlle_Demo\table2_qr.png
======================================================================
🎯 TESTING INSTRUCTIONS:
1. Open the QR code image and scan with your phone
2. Or share this URL with others:
   https://abc123.ngrok.io/menu.html?table=2
3. Menu should show 'Table 2 Menu' at the top
4. Test all categories, search, and item details
======================================================================
⚠️  Keep this window open - Press Ctrl+C to stop
======================================================================
```

### 📱 Testing Your Menu

1. **QR Code**: Open `table2_qr.png` and scan with any phone
2. **Direct Link**: Copy the Menu URL and open on any device
3. **Local Testing**: Use `http://localhost:8000/menu.html?table=2`

### 🛑 Stopping the Server

- Press `Ctrl+C` in the console window
- Or simply close the console window

### 🔧 Troubleshooting

#### "Python not found"
- Install Python from python.org
- Make sure "Add to PATH" was checked

#### "ngrok not found"
- Download ngrok from ngrok.com
- Place `ngrok.exe` in the same folder as your menu files

#### "Menu not loading"
- Make sure `menu.html` exists in `C:\DOWNS\Lazlle_Demo\`
- Check that you're running the script from the correct directory

#### "QR code doesn't work"
- Try opening the Menu URL directly in your phone's browser first
- Make sure your phone has internet access

### 📁 Generated Files

After running, you'll find:
- `table2_qr.png` - QR code image for Table 2
- Console output with all URLs and instructions

### 🔄 Re-running

Each time you run the script:
- New ngrok URL is generated (unless you have ngrok Pro)
- New QR code is created with the updated URL
- All previous sessions are automatically cleaned up

### 💡 Tips

- **Share the Menu URL** with team members for testing
- **Test on different devices** - phones, tablets, laptops
- **Check different browsers** - Chrome, Safari, Firefox
- **Test the QR code** from different QR scanner apps
- **Keep the console open** while testing - closing it stops the servers

---

**Ready to test your restaurant menu on any device worldwide!** 🌍📱