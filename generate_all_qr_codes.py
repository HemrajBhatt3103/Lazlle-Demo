#!/usr/bin/env python3
"""
Generate QR codes for all tables
Creates QR codes for multiple tables at once
"""

import os
import sys
import urllib.parse

def install_qrcode():
    """Install qrcode package if not available"""
    try:
        import qrcode
        return True
    except ImportError:
        print("📦 Installing QR code package...")
        import subprocess
        try:
            subprocess.check_call([sys.executable, "-m", "pip", "install", "qrcode[pil]"], 
                                stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            return True
        except:
            print("❌ Failed to install qrcode package")
            return False

def generate_qr_code(url, filename, table_id):
    """Generate a single QR code"""
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
        qr.add_data(url)
        qr.make(fit=True)
        
        # Create image
        img = qr.make_image(fill_color="black", back_color="white")
        
        # Save QR code
        img.save(filename)
        print(f"✅ Table {table_id}: {filename}")
        return True
        
    except Exception as e:
        print(f"❌ Table {table_id}: Failed ({e})")
        return False

def generate_online_qr(url, filename, table_id):
    """Generate QR code using online service"""
    try:
        import urllib.request
        
        # Use QR Server API
        encoded_url = urllib.parse.quote(url)
        qr_api_url = f"https://api.qrserver.com/v1/create-qr-code/?size=300x300&data={encoded_url}"
        
        # Download QR code image
        urllib.request.urlretrieve(qr_api_url, filename)
        print(f"✅ Table {table_id}: {filename} (online)")
        return True
        
    except Exception as e:
        print(f"❌ Table {table_id}: Failed ({e})")
        return False

def main():
    if len(sys.argv) != 2:
        print("Usage: python generate_all_qr_codes.py <base_url>")
        print("Example: python generate_all_qr_codes.py https://abc123.ngrok.io")
        print("Example: python generate_all_qr_codes.py http://localhost:8000")
        sys.exit(1)
    
    base_url = sys.argv[1].rstrip('/')
    
    print("🍽️  Generating QR Codes for All Tables")
    print("="*50)
    print(f"Base URL: {base_url}")
    print()
    
    # Configuration
    tables = [1, 2, 3, 4, 5, 6, 7, 8]  # Generate for 8 tables
    output_dir = r"C:\DOWNS\Lazlle_Demo"
    
    # Try to install qrcode package
    has_qrcode = install_qrcode()
    
    success_count = 0
    
    for table_id in tables:
        # Create menu URL for this table
        menu_url = f"{base_url}/menu.html?table={table_id}"
        filename = os.path.join(output_dir, f"table{table_id}_qr.png")
        
        # Try local generation first, then online
        if has_qrcode:
            success = generate_qr_code(menu_url, filename, table_id)
        else:
            success = generate_online_qr(menu_url, filename, table_id)
        
        if success:
            success_count += 1
    
    print()
    print("="*50)
    print(f"📊 Generated {success_count}/{len(tables)} QR codes")
    print(f"📁 Location: {output_dir}")
    print("="*50)
    
    if success_count == len(tables):
        print("✅ All QR codes generated successfully!")
        
        # Display usage instructions
        print("\n🎯 Usage Instructions:")
        print("1. Print the QR code images")
        print("2. Place them on corresponding tables")
        print("3. Customers scan to access the menu")
        print("4. Each QR code shows the correct table number")
        
    else:
        print("⚠️  Some QR codes failed to generate")
    
    print(f"\n📱 Test URL format: {base_url}/menu.html?table=X")

if __name__ == "__main__":
    main()