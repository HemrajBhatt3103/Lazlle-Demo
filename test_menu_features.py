#!/usr/bin/env python3
"""
Restaurant Menu Feature Testing Script
Automated testing of menu functionality
"""

import time
import urllib.request
import json
import sys

def test_menu_endpoints(base_url):
    """Test various menu endpoints and functionality"""
    print("🧪 Testing Menu Features")
    print("="*40)
    
    tests = [
        {
            "name": "Menu Page Load",
            "url": f"{base_url}/menu.html",
            "expected": 200
        },
        {
            "name": "Menu with Table Parameter",
            "url": f"{base_url}/menu.html?table=1",
            "expected": 200
        },
        {
            "name": "Menu with Table 2",
            "url": f"{base_url}/menu.html?table=2",
            "expected": 200
        },
        {
            "name": "Menu Styles",
            "url": f"{base_url}/menu-styles.css",
            "expected": 200
        },
        {
            "name": "Menu Script",
            "url": f"{base_url}/menu-script.js",
            "expected": 200
        },
        {
            "name": "Admin Panel",
            "url": f"{base_url}/index.html",
            "expected": 200
        }
    ]
    
    passed = 0
    failed = 0
    
    for test in tests:
        try:
            with urllib.request.urlopen(test["url"], timeout=10) as response:
                if response.status == test["expected"]:
                    print(f"✅ {test['name']}: PASS")
                    passed += 1
                else:
                    print(f"❌ {test['name']}: FAIL (Status: {response.status})")
                    failed += 1
        except Exception as e:
            print(f"❌ {test['name']}: FAIL ({str(e)})")
            failed += 1
        
        time.sleep(0.5)  # Small delay between tests
    
    print("\n" + "="*40)
    print(f"📊 Test Results: {passed} passed, {failed} failed")
    print("="*40)
    
    return failed == 0

def check_menu_content(base_url):
    """Check if menu contains expected content"""
    print("\n🔍 Checking Menu Content")
    print("="*30)
    
    try:
        with urllib.request.urlopen(f"{base_url}/menu.html?table=2", timeout=10) as response:
            content = response.read().decode('utf-8')
            
            checks = [
                ("Menu Title", "Restaurant Manager" in content),
                ("Table Parameter", "tableInfo" in content),
                ("Category Navigation", "category-nav" in content),
                ("Menu Items Container", "menuItems" in content),
                ("Search Functionality", "searchInput" in content),
                ("Item Modal", "itemModal" in content),
                ("Call Waiter Button", "callWaiterBtn" in content),
                ("Theme Toggle", "themeToggle" in content)
            ]
            
            for check_name, result in checks:
                if result:
                    print(f"✅ {check_name}: Found")
                else:
                    print(f"❌ {check_name}: Missing")
            
            return all(result for _, result in checks)
            
    except Exception as e:
        print(f"❌ Failed to check content: {e}")
        return False

def main():
    if len(sys.argv) != 2:
        print("Usage: python test_menu_features.py <base_url>")
        print("Example: python test_menu_features.py http://localhost:8000")
        print("Example: python test_menu_features.py https://abc123.ngrok.io")
        sys.exit(1)
    
    base_url = sys.argv[1].rstrip('/')
    
    print(f"🍽️  Testing Restaurant Menu at: {base_url}")
    print("="*60)
    
    # Test endpoints
    endpoints_ok = test_menu_endpoints(base_url)
    
    # Check content
    content_ok = check_menu_content(base_url)
    
    # Final result
    print(f"\n🎯 Overall Result:")
    if endpoints_ok and content_ok:
        print("✅ All tests passed! Menu is ready for use.")
        sys.exit(0)
    else:
        print("❌ Some tests failed. Check the issues above.")
        sys.exit(1)

if __name__ == "__main__":
    main()