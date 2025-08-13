#!/usr/bin/env python3
"""
Robust Menu Server with Error Recovery
Handles common server issues automatically
"""

import os
import sys
import time
import socket
import subprocess
import threading
import webbrowser
import urllib.request
from pathlib import Path

class RobustMenuServer:
    def __init__(self):
        self.server_process = None
        self.port = 8000
        self.menu_dir = r"C:\DOWNS\Lazlle_Demo"
        self.max_retries = 3
        self.retry_delay = 2
        
    def find_available_port(self, start_port=8000):
        """Find an available port"""
        for port in range(start_port, start_port + 20):
            sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            try:
                result = sock.connect_ex(('localhost', port))
                if result != 0:  # Port is available
                    return port
            except:
                pass
            finally:
                sock.close()
        return None
    
    def kill_existing_servers(self):
        """Kill any existing Python HTTP servers"""
        try:
            if os.name == 'nt':  # Windows
                subprocess.run(['taskkill', '/f', '/im', 'python.exe'], 
                             capture_output=True, check=False)
            else:  # Unix-like
                subprocess.run(['pkill', '-f', 'http.server'], 
                             capture_output=True, check=False)
            time.sleep(1)
        except:
            pass
    
    def setup_directory(self):
        """Ensure we're in the correct directory"""
        try:
            os.chdir(self.menu_dir)
            print(f"✅ Working directory: {self.menu_dir}")
            
            # Verify required files exist
            required_files = ['menu.html', 'menu-styles.css', 'menu-script.js']
            for file in required_files:
                if not os.path.exists(file):
                    print(f"❌ Missing file: {file}")
                    return False
            
            print("✅ All required files found")
            return True
            
        except Exception as e:
            print(f"❌ Directory setup failed: {e}")
            return False
    
    def start_server_with_retry(self):
        """Start server with automatic retry"""
        for attempt in range(self.max_retries):
            print(f"\n🚀 Starting server attempt {attempt + 1}/{self.max_retries}")
            
            # Find available port
            self.port = self.find_available_port(8000)
            if not self.port:
                print("❌ No available ports found")
                continue
            
            try:
                # Start server
                self.server_process = subprocess.Popen([
                    sys.executable, "-m", "http.server", str(self.port)
                ], stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
                
                # Wait for server to start
                time.sleep(self.retry_delay)
                
                # Test server
                if self.test_server():
                    print(f"✅ Server started successfully on port {self.port}")
                    return True
                else:
                    print(f"❌ Server test failed on port {self.port}")
                    self.stop_server()
                    
            except Exception as e:
                print(f"❌ Server start failed: {e}")
                self.stop_server()
            
            time.sleep(self.retry_delay)
        
        print("❌ All server start attempts failed")
        return False
    
    def test_server(self):
        """Test if server is responding"""
        try:
            # Test basic connectivity
            with urllib.request.urlopen(f"http://localhost:{self.port}", timeout=5) as response:
                if response.status != 200:
                    return False
            
            # Test menu.html specifically
            with urllib.request.urlopen(f"http://localhost:{self.port}/menu.html", timeout=5) as response:
                if response.status != 200:
                    return False
            
            # Test with table parameter
            with urllib.request.urlopen(f"http://localhost:{self.port}/menu.html?table=2", timeout=5) as response:
                return response.status == 200
                
        except Exception as e:
            print(f"Server test error: {e}")
            return False
    
    def stop_server(self):
        """Stop the server process"""
        if self.server_process:
            try:
                self.server_process.terminate()
                self.server_process.wait(timeout=5)
            except subprocess.TimeoutExpired:
                self.server_process.kill()
            except:
                pass
            self.server_process = None
    
    def monitor_server(self):
        """Monitor server health and restart if needed"""
        while self.server_process:
            time.sleep(10)  # Check every 10 seconds
            
            if not self.test_server():
                print("⚠️  Server health check failed, restarting...")
                self.stop_server()
                if not self.start_server_with_retry():
                    print("❌ Server restart failed")
                    break
                else:
                    print("✅ Server restarted successfully")
    
    def open_browser(self):
        """Open menu in browser"""
        menu_url = f"http://localhost:{self.port}/menu.html?table=2"
        try:
            webbrowser.open(menu_url)
            print(f"🌐 Opened menu in browser: {menu_url}")
        except:
            print(f"⚠️  Could not open browser. Manual URL: {menu_url}")
    
    def display_info(self):
        """Display server information"""
        menu_url = f"http://localhost:{self.port}/menu.html?table=2"
        
        print("\n" + "="*60)
        print("🍽️  ROBUST MENU SERVER READY")
        print("="*60)
        print(f"📁 Directory: {self.menu_dir}")
        print(f"🖥️  Server: http://localhost:{self.port}")
        print(f"📱 Menu URL: {menu_url}")
        print("="*60)
        print("🎯 FEATURES:")
        print("✅ Automatic port detection")
        print("✅ Server health monitoring")
        print("✅ Automatic restart on failure")
        print("✅ Error recovery")
        print("="*60)
        print("⚠️  Keep this window open - Press Ctrl+C to stop")
        print("="*60)
    
    def run(self):
        """Main server execution"""
        print("🍽️  Robust Restaurant Menu Server")
        print("="*50)
        
        try:
            # Setup
            print("🔧 Setting up server...")
            self.kill_existing_servers()
            
            if not self.setup_directory():
                return False
            
            # Start server
            if not self.start_server_with_retry():
                return False
            
            # Open browser
            self.open_browser()
            
            # Display info
            self.display_info()
            
            # Start monitoring in background
            monitor_thread = threading.Thread(target=self.monitor_server, daemon=True)
            monitor_thread.start()
            
            # Keep main thread alive
            try:
                while True:
                    time.sleep(1)
            except KeyboardInterrupt:
                print("\n👋 Shutting down server...")
                
        except Exception as e:
            print(f"❌ Server error: {e}")
            return False
        finally:
            self.stop_server()
        
        return True

def main():
    """Entry point"""
    server = RobustMenuServer()
    
    try:
        success = server.run()
        if success:
            print("✅ Server session completed")
        else:
            print("❌ Server failed to start")
            sys.exit(1)
    except KeyboardInterrupt:
        print("\n👋 Server stopped by user")
    except Exception as e:
        print(f"❌ Fatal error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()