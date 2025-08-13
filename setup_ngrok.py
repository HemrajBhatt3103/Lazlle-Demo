#!/usr/bin/env python3
"""
Setup ngrok authentication and test
"""

import subprocess
import sys
import webbrowser

def setup_ngrok():
    print("🔧 Setting up ngrok...")
    print("="*40)
    
    # Check if ngrok is available
    try:
        result = subprocess.run(["ngrok", "version"], capture_output=True, text=True)
        if result.returncode == 0:
            print("✅ ngrok is installed")
            print(f"Version: {result.stdout.strip()}")
        else:
            print("❌ ngrok not working properly")
            return False
    except FileNotFoundError:
        print("❌ ngrok not found")
        return False
    
    print("\n🔑 ngrok requires authentication for tunnels")
    print("="*50)
    print("1. Go to https://dashboard.ngrok.com/get-started/your-authtoken")
    print("2. Sign up for a free account (if you don't have one)")
    print("3. Copy your authtoken")
    print("4. Run: ngrok config add-authtoken YOUR_TOKEN")
    print("="*50)
    
    # Open ngrok dashboard
    try:
        webbrowser.open("https://dashboard.ngrok.com/get-started/your-authtoken")
        print("🌐 Opening ngrok dashboard in browser...")
    except:
        print("⚠️  Could not open browser automatically")
    
    print("\nAfter setting up your authtoken, run the menu server again!")
    return True

if __name__ == "__main__":
    setup_ngrok()