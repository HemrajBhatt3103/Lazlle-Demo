#!/usr/bin/env python3
"""
Debug Server Issues
Comprehensive troubleshooting for server problems
"""

import os
import sys
import socket
import subprocess
import time
import urllib.request

def check_python():
    """Check Python installation"""
    print("🐍 Checking Python...")
    try:
        version = sys.version
        print(f"✅ Python version: {version}")
        return True
    except:
        print("❌ Python check failed")
        return False

def check_directory():
    """Check if we're in the right directory"""
    print("\n📁 Checking directory...")
    current_dir = os.getcwd()
    print(f"Current directory: {current_dir}")
    
    required_files = ['menu.html', 'menu-styles.css', 'menu-script.js']
    missing_files = []
    
    for file in required_files:
        if os.path.exists(file):
            print(f"✅ Found: {file}")
        else:
            print(f"❌ Missing: {file}")
            missing_files.append(file)
    
    if missing_files:
        print(f"\n⚠️  Missing files: {', '.join(missing_files)}")
        print("Make sure you're running from C:\\DOWNS\\Lazlle_Demo\\")
        return False
    
    return True

def check_port(port):
    """Check if port is available"""
    print(f"\n🔌 Checking port {port}...")
    
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    try:
        result = sock.connect_ex(('localhost', port))
        if result == 0:
            print(f"❌ Port {port} is already in use")
            return False
        else:
            print(f"✅ Port {port} is available")
            return True
    except:
        print(f"⚠️  Could not check port {port}")
        return True
    finally:
        sock.close()

def find_available_port(start_port=8000):
    """Find an available port"""
    print(f"\n🔍 Finding available port starting from {start_port}...")
    
    for port in range(start_port, start_port + 10):
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        try:
            result = sock.connect_ex(('localhost', port))
            if result != 0:  # Port is available
                print(f"✅ Found available port: {port}")
                return port
        except:
            pass
        finally:
            sock.close()
    
    print("❌ No available ports found")
    return None

def test_server_start(port):
    """Test starting the server manually"""
    print(f"\n🚀 Testing server start on port {port}...")
    
    try:
        # Start server
        process = subprocess.Popen([
            sys.executable, "-m", "http.server", str(port)
        ], stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        
        print("⏳ Waiting for server to start...")
        time.sleep(3)
        
        # Test if server is responding
        try:
            with urllib.request.urlopen(f"http://localhost:{port}", timeout=5) as response:
                if response.status == 200:
                    print(f"✅ Server is responding on port {port}")
                    
                    # Test menu.html specifically
                    try:
                        with urllib.request.urlopen(f"http://localhost:{port}/menu.html", timeout=5) as menu_response:
                            if menu_response.status == 200:
                                print("✅ menu.html is accessible")
                                result = True
                            else:
                                print(f"❌ menu.html returned status {menu_response.status}")
                                result = False
                    except Exception as e:
                        print(f"❌ menu.html not accessible: {e}")
                        result = False
                else:
                    print(f"❌ Server returned status {response.status}")
                    result = False
        except Exception as e:
            print(f"❌ Server not responding: {e}")
            result = False
        
        # Stop the test server
        process.terminate()
        try:
            process.wait(timeout=5)
        except subprocess.TimeoutExpired:
            process.kill()
        
        return result
        
    except Exception as e:
        print(f"❌ Failed to start server: {e}")
        return False

def check_firewall():
    """Check for firewall issues"""
    print("\n🔥 Checking for firewall issues...")
    print("If you're having connection issues:")
    print("1. Windows Defender Firewall might be blocking Python")
    print("2. Try running as Administrator")
    print("3. Add Python to firewall exceptions")
    print("4. Try a different port")

def run_diagnostics():
    """Run complete diagnostics"""
    print("🔧 Server Diagnostics")
    print("="*50)
    
    # Check Python
    if not check_python():
        return False
    
    # Check directory and files
    if not check_directory():
        return False
    
    # Check default port
    port = 8000
    if not check_port(port):
        # Find alternative port
        port = find_available_port()
        if not port:
            return False
    
    # Test server
    if not test_server_start(port):
        check_firewall()
        return False
    
    print("\n" + "="*50)
    print("✅ All diagnostics passed!")
    print(f"💡 Recommended port: {port}")
    print("="*50)
    
    return True

def main():
    """Main diagnostic function"""
    print("🍽️  Restaurant Menu Server Diagnostics")
    print("="*60)
    
    if run_diagnostics():
        print("\n🎯 Next Steps:")
        print("1. Your system looks good!")
        print("2. Try running the server again")
        print("3. If issues persist, try the alternative port shown above")
        
        # Offer to start server
        try:
            choice = input("\nWould you like to start the server now? (y/n): ").lower()
            if choice == 'y':
                port = find_available_port()
                if port:
                    print(f"\n🚀 Starting server on port {port}...")
                    print(f"📱 Menu URL: http://localhost:{port}/menu.html?table=2")
                    print("⚠️  Press Ctrl+C to stop")
                    
                    # Start server and keep it running
                    process = subprocess.Popen([
                        sys.executable, "-m", "http.server", str(port)
                    ])
                    
                    try:
                        process.wait()
                    except KeyboardInterrupt:
                        print("\n👋 Stopping server...")
                        process.terminate()
        except KeyboardInterrupt:
            print("\n👋 Goodbye!")
    else:
        print("\n❌ Issues found. Please fix the problems above and try again.")

if __name__ == "__main__":
    main()