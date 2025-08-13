#!/usr/bin/env python3
"""
Restaurant Menu Development Server - One-Click Setup
Automatically starts local server, ngrok tunnel, and generates QR code
"""

import os
import sys
import time
import json
import subprocess
import threading
import urllib.request
import urllib.parse
from pathlib import Path

# Configuration
MENU_DIR = r"C:\DOWNS\Lazlle_Demo"
LOCAL_PORT = 8000
TABLE_ID = 2
QR_FILENAME = f"table{TABLE_ID}_qr.png"

class RestaurantMenuDev:
    def __init__(self):
        self.local_server = None
        self.ngrok_process = None
        self.public_url = None
        
    def install_dependencies(self):
        """Install required packages if not available"""
        print("📦 Checking and installing dependencies...")
        
        packages_to_install = []
        
        # Check qrcode
        try:
            import qrcode
        except ImportError:
            packages_to_install.append("qrcode[pil]")
            
        # Check requests (fallback for urllib)
        try:
            import requests
        except ImportError:
            packages_to_install.append("requests")
        
        if packages_to_install:
            print(f"Installing: {', '.join(packages_to_install)}")
            for package in packages_to_install:
                try:
                    subprocess.check_call([sys.executable, "-m", "pip", "install", package], 
                                        stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
                    print(f"✅ Installed {package}")
                except subprocess.CalledProcessError:
                    print(f"⚠️  Could not install {package} - will use fallback methods")
        else:
            print("✅ All dependencies available")
    
    def check_ngrok(self):
        """Check if ngrok is available"""
        try:
            result = subprocess.run(["ngrok", "version"], capture_output=True, text=True)
            if result.returncode == 0:
                print("✅ ngrok is available")
                return True
        except FileNotFoundError:
            pass
            
        print("❌ ngrok not found!")
        print("📥 Please install ngrok:")
        print("   1. Download from https://ngrok.com/download")
        print("   2. Extract ngrok.exe to this folder or add to PATH")
        return False
    
    def start_local_server(self):
        """Start the local HTTP server"""
        print(f"🚀 Starting local server on port {LOCAL_PORT}...")
        
        # Change to menu directory
        original_dir = os.getcwd()
        os.chdir(MENU_DIR)
        
        # Start HTTP server
        self.local_server = subprocess.Popen([
            sys.executable, "-m", "http.server", str(LOCAL_PORT)
        ], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        
        # Wait for server to start
        time.sleep(2)
        
        # Test local server
        try:
            with urllib.request.urlopen(f"http://localhost:{LOCAL_PORT}/menu.html", timeout=5) as response:
                if response.status == 200:
                    print(f"✅ Local server running at http://localhost:{LOCAL_PORT}")
                    print(f"📱 Local menu: http://localhost:{LOCAL_PORT}/menu.html?table={TABLE_ID}")
                    os.chdir(original_dir)
                    return True
        except Exception as e:
            print(f"❌ Local server failed: {e}")
            os.chdir(original_dir)
            return False
    
    def start_ngrok(self):
        """Start ngrok tunnel and get public URL"""
        print("🌐 Starting ngrok tunnel...")
        
        # Start ngrok process
        self.ngrok_process = subprocess.Popen([
            "ngrok", "http", str(LOCAL_PORT), "--log=stdout"
        ], stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        
        # Wait for ngrok to establish tunnel
        print("⏳ Waiting for ngrok tunnel...")
        
        max_attempts = 20
        for attempt in range(max_attempts):
            try:
                # Query ngrok API
                with urllib.request.urlopen("http://localhost:4040/api/tunnels", timeout=3) as response:
                    data = json.loads(response.read().decode())
                    tunnels = data.get("tunnels", [])
                    
                    # Find HTTPS tunnel
                    for tunnel in tunnels:
                        if tunnel.get("proto") == "https":
                            self.public_url = tunnel["public_url"]
                            print(f"✅ ngrok tunnel established!")
                            print(f"🌍 Public URL: {self.public_url}")
                            return True
                            
            except Exception:
                pass
                
            time.sleep(2)
            print(f"   Attempt {attempt + 1}/{max_attempts}...")
        
        print("❌ Failed to get ngrok tunnel URL")
        return False
    
    def generate_qr_code(self):
        """Generate QR code for the menu URL"""
        if not self.public_url:
            print("❌ No public URL available")
            return False
            
        # Create full menu URL
        menu_url = f"{self.public_url}/menu.html?table={TABLE_ID}"
        print(f"📱 Generating QR code for: {menu_url}")
        
        # Try to use qrcode library first
        try:
            import qrcode
            from PIL import Image
            
            # Generate QR code
            qr = qrcode.QRCode(
                version=1,
                error_correction=qrcode.constants.ERROR_CORRECT_L,
                box_size=10,
                border=4,
            )
            qr.add_data(menu_url)
            qr.make(fit=True)
            
            # Create image
            img = qr.make_image(fill_color="black", back_color="white")
            
            # Save QR code
            qr_path = os.path.join(MENU_DIR, QR_FILENAME)
            img.save(qr_path)
            
            print(f"✅ QR code saved: {qr_path}")
            return True
            
        except ImportError:
            # Fallback: Use online QR code service
            print("📱 Using online QR code service...")
            return self.generate_qr_online(menu_url)
    
    def generate_qr_online(self, menu_url):
        """Generate QR code using online service"""
        try:
            # Use QR Server API
            encoded_url = urllib.parse.quote(menu_url)
            qr_api_url = f"https://api.qrserver.com/v1/create-qr-code/?size=300x300&data={encoded_url}"
            
            # Download QR code image
            qr_path = os.path.join(MENU_DIR, QR_FILENAME)
            urllib.request.urlretrieve(qr_api_url, qr_path)
            
            print(f"✅ QR code downloaded: {qr_path}")
            return True
            
        except Exception as e:
            print(f"❌ Failed to generate QR code: {e}")
            print(f"🔗 Manual QR URL: https://api.qrserver.com/v1/create-qr-code/?size=300x300&data={urllib.parse.quote(menu_url)}")
            return False
    
    def display_results(self):
        """Display the final results"""
        menu_url = f"{self.public_url}/menu.html?table={TABLE_ID}"
        qr_path = os.path.join(MENU_DIR, QR_FILENAME)
        
        print("\n" + "="*70)
        print("🍽️  RESTAURANT MENU DEVELOPMENT SERVER READY")
        print("="*70)
        print(f"📁 Menu Directory: {MENU_DIR}")
        print(f"🖥️  Local Server: http://localhost:{LOCAL_PORT}")
        print(f"🌍 Public URL: {self.public_url}")
        print(f"📱 Menu URL: {menu_url}")
        print(f"📷 QR Code File: {qr_path}")
        print("="*70)
        print("🎯 TESTING INSTRUCTIONS:")
        print("1. Open the QR code image and scan with your phone")
        print("2. Or share this URL with others:")
        print(f"   {menu_url}")
        print("3. Menu should show 'Table 2 Menu' at the top")
        print("4. Test all categories, search, and item details")
        print("="*70)
        print("⚠️  Keep this window open - Press Ctrl+C to stop")
        print("="*70)
    
    def cleanup(self):
        """Clean up processes"""
        print("\n🧹 Shutting down servers...")
        
        if self.local_server:
            self.local_server.terminate()
            try:
                self.local_server.wait(timeout=5)
            except subprocess.TimeoutExpired:
                self.local_server.kill()
            print("✅ Local server stopped")
            
        if self.ngrok_process:
            self.ngrok_process.terminate()
            try:
                self.ngrok_process.wait(timeout=5)
            except subprocess.TimeoutExpired:
                self.ngrok_process.kill()
            print("✅ ngrok tunnel stopped")
    
    def run(self):
        """Main execution function"""
        print("🍽️  Restaurant Menu Development Setup")
        print("="*50)
        
        try:
            # Install dependencies
            self.install_dependencies()
            
            # Check ngrok
            if not self.check_ngrok():
                return False
            
            # Start local server
            if not self.start_local_server():
                return False
            
            # Start ngrok
            if not self.start_ngrok():
                return False
            
            # Generate QR code
            self.generate_qr_code()
            
            # Display results
            self.display_results()
            
            # Keep running
            try:
                print("🔄 Server running... (Ctrl+C to stop)")
                while True:
                    time.sleep(1)
            except KeyboardInterrupt:
                print("\n👋 Received shutdown signal...")
                
        except Exception as e:
            print(f"❌ Unexpected error: {e}")
            return False
        finally:
            self.cleanup()
        
        return True

def main():
    """Entry point"""
    dev_server = RestaurantMenuDev()
    
    try:
        success = dev_server.run()
        if success:
            print("✅ Development server session completed")
        else:
            print("❌ Development server failed to start")
            sys.exit(1)
    except KeyboardInterrupt:
        print("\n👋 Interrupted by user")
    except Exception as e:
        print(f"❌ Fatal error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()