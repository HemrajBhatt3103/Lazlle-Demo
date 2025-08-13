#!/usr/bin/env python3
"""
Restaurant Menu Local Development Server
For quick local testing without ngrok
"""

import os
import sys
import time
import subprocess
import webbrowser
import urllib.request
import urllib.parse
from pathlib import Path

# Configuration
MENU_DIR = r"C:\DOWNS\Lazlle_Demo"
LOCAL_PORT = 8000
TABLE_ID = 2

class LocalMenuServer:
    def __init__(self):
        self.local_server = None
        
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
        time.sleep(3)
        
        # Test local server
        try:
            with urllib.request.urlopen(f"http://localhost:{LOCAL_PORT}/menu.html", timeout=5) as response:
                if response.status == 200:
                    print(f"✅ Local server running at http://localhost:{LOCAL_PORT}")
                    os.chdir(original_dir)
                    return True
        except Exception as e:
            print(f"❌ Local server failed: {e}")
            os.chdir(original_dir)
            return False
    
    def generate_local_qr(self):
        """Generate QR code for local testing"""
        menu_url = f"http://localhost:{LOCAL_PORT}/menu.html?table={TABLE_ID}"
        
        # Try to generate QR code
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
            qr_path = os.path.join(MENU_DIR, f"local_table{TABLE_ID}_qr.png")
            img.save(qr_path)
            
            print(f"✅ Local QR code saved: {qr_path}")
            return True
            
        except ImportError:
            # Install qrcode if not available
            print("📦 Installing QR code package...")
            try:
                subprocess.check_call([sys.executable, "-m", "pip", "install", "qrcode[pil]"], 
                                    stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
                return self.generate_local_qr()  # Retry
            except:
                print("⚠️  Could not install QR code package")
                return False
    
    def open_browser(self):
        """Open the menu in browser"""
        menu_url = f"http://localhost:{LOCAL_PORT}/menu.html?table={TABLE_ID}"
        try:
            webbrowser.open(menu_url)
            print(f"🌐 Opened menu in browser: {menu_url}")
        except:
            print(f"⚠️  Could not open browser automatically")
            print(f"🔗 Manual URL: {menu_url}")
    
    def display_results(self):
        """Display the results"""
        menu_url = f"http://localhost:{LOCAL_PORT}/menu.html?table={TABLE_ID}"
        qr_path = os.path.join(MENU_DIR, f"local_table{TABLE_ID}_qr.png")
        
        print("\n" + "="*60)
        print("🍽️  LOCAL RESTAURANT MENU SERVER READY")
        print("="*60)
        print(f"📁 Menu Directory: {MENU_DIR}")
        print(f"🖥️  Local Server: http://localhost:{LOCAL_PORT}")
        print(f"📱 Menu URL: {menu_url}")
        print(f"📷 QR Code: {qr_path}")
        print("="*60)
        print("🎯 LOCAL TESTING:")
        print("1. Menu should be open in your browser")
        print("2. For mobile testing on same WiFi network:")
        print("   - Find your computer's IP address")
        print("   - Use http://YOUR_IP:8000/menu.html?table=2")
        print("3. QR code works for devices on same network")
        print("="*60)
        print("💡 For internet access, use the full ngrok version")
        print("⚠️  Press Ctrl+C to stop the server")
        print("="*60)
    
    def cleanup(self):
        """Clean up processes"""
        print("\n🧹 Stopping local server...")
        
        if self.local_server:
            self.local_server.terminate()
            try:
                self.local_server.wait(timeout=5)
            except subprocess.TimeoutExpired:
                self.local_server.kill()
            print("✅ Local server stopped")
    
    def run(self):
        """Main execution"""
        print("🍽️  Local Restaurant Menu Server")
        print("="*40)
        
        try:
            # Start local server
            if not self.start_local_server():
                return False
            
            # Generate QR code
            self.generate_local_qr()
            
            # Open browser
            self.open_browser()
            
            # Display results
            self.display_results()
            
            # Keep running
            try:
                while True:
                    time.sleep(1)
            except KeyboardInterrupt:
                print("\n👋 Shutting down...")
                
        except Exception as e:
            print(f"❌ Error: {e}")
            return False
        finally:
            self.cleanup()
        
        return True

def main():
    server = LocalMenuServer()
    server.run()

if __name__ == "__main__":
    main()