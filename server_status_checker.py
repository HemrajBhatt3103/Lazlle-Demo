#!/usr/bin/env python3
"""
Server Status Checker
Real-time monitoring of menu server status
"""

import time
import urllib.request
import urllib.error
import json
from datetime import datetime

class ServerStatusChecker:
    def __init__(self, base_url="http://localhost:8000"):
        self.base_url = base_url.rstrip('/')
        self.endpoints = [
            "/",
            "/menu.html",
            "/menu.html?table=1",
            "/menu.html?table=2",
            "/menu-styles.css",
            "/menu-script.js"
        ]
        self.status_history = []
    
    def check_endpoint(self, endpoint):
        """Check a single endpoint"""
        url = f"{self.base_url}{endpoint}"
        try:
            start_time = time.time()
            with urllib.request.urlopen(url, timeout=5) as response:
                response_time = (time.time() - start_time) * 1000  # ms
                return {
                    "endpoint": endpoint,
                    "status": response.status,
                    "response_time": round(response_time, 2),
                    "success": True,
                    "error": None
                }
        except urllib.error.HTTPError as e:
            return {
                "endpoint": endpoint,
                "status": e.code,
                "response_time": 0,
                "success": False,
                "error": f"HTTP {e.code}"
            }
        except Exception as e:
            return {
                "endpoint": endpoint,
                "status": 0,
                "response_time": 0,
                "success": False,
                "error": str(e)
            }
    
    def check_all_endpoints(self):
        """Check all endpoints"""
        results = []
        for endpoint in self.endpoints:
            result = self.check_endpoint(endpoint)
            results.append(result)
        return results
    
    def display_status(self, results):
        """Display status in a nice format"""
        timestamp = datetime.now().strftime("%H:%M:%S")
        
        print(f"\n🕐 Status Check - {timestamp}")
        print("="*60)
        
        all_good = True
        total_response_time = 0
        successful_requests = 0
        
        for result in results:
            status_icon = "✅" if result["success"] else "❌"
            endpoint = result["endpoint"]
            
            if result["success"]:
                print(f"{status_icon} {endpoint:<25} {result['response_time']:>6.1f}ms")
                total_response_time += result["response_time"]
                successful_requests += 1
            else:
                print(f"{status_icon} {endpoint:<25} {result['error']}")
                all_good = False
        
        # Summary
        print("-" * 60)
        if all_good:
            avg_response = total_response_time / successful_requests if successful_requests > 0 else 0
            print(f"🎯 All endpoints OK - Avg response: {avg_response:.1f}ms")
        else:
            print(f"⚠️  {len(results) - successful_requests} endpoints failed")
        
        return all_good
    
    def run_continuous_monitoring(self, interval=10):
        """Run continuous monitoring"""
        print("🍽️  Menu Server Status Monitor")
        print("="*50)
        print(f"📊 Monitoring: {self.base_url}")
        print(f"⏰ Check interval: {interval} seconds")
        print("⚠️  Press Ctrl+C to stop")
        print("="*50)
        
        try:
            while True:
                results = self.check_all_endpoints()
                status_ok = self.display_status(results)
                
                # Store status history
                self.status_history.append({
                    "timestamp": datetime.now(),
                    "status": "OK" if status_ok else "ERROR",
                    "results": results
                })
                
                # Keep only last 100 entries
                if len(self.status_history) > 100:
                    self.status_history.pop(0)
                
                time.sleep(interval)
                
        except KeyboardInterrupt:
            print("\n👋 Monitoring stopped")
            self.show_summary()
    
    def run_single_check(self):
        """Run a single status check"""
        print("🍽️  Menu Server Status Check")
        print("="*40)
        print(f"📊 Checking: {self.base_url}")
        
        results = self.check_all_endpoints()
        status_ok = self.display_status(results)
        
        if status_ok:
            print("\n✅ Server is healthy and all endpoints are working!")
        else:
            print("\n❌ Server has issues. Check the failed endpoints above.")
        
        return status_ok
    
    def show_summary(self):
        """Show monitoring summary"""
        if not self.status_history:
            return
        
        print("\n📊 Monitoring Summary")
        print("="*30)
        
        total_checks = len(self.status_history)
        ok_checks = sum(1 for entry in self.status_history if entry["status"] == "OK")
        error_checks = total_checks - ok_checks
        
        uptime_percentage = (ok_checks / total_checks) * 100 if total_checks > 0 else 0
        
        print(f"Total checks: {total_checks}")
        print(f"Successful: {ok_checks}")
        print(f"Failed: {error_checks}")
        print(f"Uptime: {uptime_percentage:.1f}%")
        
        if self.status_history:
            first_check = self.status_history[0]["timestamp"]
            last_check = self.status_history[-1]["timestamp"]
            duration = last_check - first_check
            print(f"Duration: {duration}")

def main():
    """Main function"""
    import sys
    
    # Default URL
    base_url = "http://localhost:8000"
    
    # Check for custom URL
    if len(sys.argv) > 1:
        base_url = sys.argv[1]
    
    checker = ServerStatusChecker(base_url)
    
    # Check if user wants continuous monitoring
    try:
        mode = input("Choose mode:\n1. Single check\n2. Continuous monitoring\nEnter choice (1 or 2): ").strip()
        
        if mode == "2":
            try:
                interval = int(input("Check interval in seconds (default 10): ") or "10")
            except ValueError:
                interval = 10
            checker.run_continuous_monitoring(interval)
        else:
            checker.run_single_check()
            
    except KeyboardInterrupt:
        print("\n👋 Goodbye!")

if __name__ == "__main__":
    main()