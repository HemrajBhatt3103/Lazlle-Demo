#!/usr/bin/env python3
"""
Simple Server - Minimal setup for troubleshooting
"""

import os
import sys
import subprocess
import time
import webbrowser

def start_simple_server():
    """Start a simple HTTP server with error handling"""
    
    # Configuration
    MENU_DIR = r"C:\DOWNS\Lazlle_Demo"
    PORT = 8000
    
    print("🍽️  Simple Restaurant Menu Server")
    print("="*40)
    
    # Check if we're in the right directory
    if not os.path.exists("menu.html"):
        print("❌ menu.html not found!")
        print(f"📁 Please run this from: {MENU_DIR}")
        
        # Try to change to the correct directory
        try:
            os.chdir(MENU_DIR)
            print(f"✅ Changed to: {MENU_DIR}")
        except:
            print("❌ Could not change to menu directory")
            return False
    
    # Check if port is available
    import socket
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    result = sock.connect_ex(('localhost', PORT))
    sock.close()
    
    if result == 0:
        print(f"⚠️  Port {PORT} is in use, trying port 8001...")
        PORT = 8001
    
    print(f"🚀 Starting server on port {PORT}...")
    print(f"📁 Serving from: {os.getcwd()}")
    
    try:
        # Start the server
        process = subprocess.Popen([
            sys.executable, "-m", "http.server", str(PORT)
        ], stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        
        # Wait a moment
        time.sleep(2)
        
        # Test the server
        import urllib.request
        try:
            with urllib.request.urlopen(f"http://localhost:{PORT}/menu.html", timeout=5):
                print(f"✅ Server is running!")
                print(f"🌐 Local URL: http://localhost:{PORT}/menu.html?table=2")
                
                # Try to open in browser
                try:
                    webbrowser.open(f"http://localhost:{PORT}/menu.html?table=2")
                    print("🌐 Opened in browser")
                except:
                    print("⚠️  Could not open browser automatically")
                
                print("\n" + "="*50)
                print("🎯 Server is ready!")
                print(f"📱 Test URL: http://localhost:{PORT}/menu.html?table=2")
                print("⚠️  Keep this window open")
                print("⚠️  Press Ctrl+C to stop")
                print("="*50)
                
                # Keep server running
                try:
                    process.wait()
                except KeyboardInterrupt:
                    print("\n👋 Stopping server...")
                    process.terminate()
                    return True
                    
        except Exception as e:
            print(f"❌ Server test failed: {e}")
            print("🔍 Checking server output...")
            
            # Get server output
            stdout, stderr = process.communicate(timeout=2)
            if stdout:
                print(f"Server output: {stdout}")
            if stderr:
                print(f"Server errors: {stderr}")
            
            process.terminate()
            return False
            
    except Exception as e:
        print(f"❌ Failed to start server: {e}")
        return False

if __name__ == "__main__":
    start_simple_server()