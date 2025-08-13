#!/usr/bin/env python3
"""
Production Deployment Helper
Prepare your menu system for real restaurant use
"""

import os
import sys
import shutil
import json
from datetime import datetime
from pathlib import Path

class ProductionDeployment:
    def __init__(self):
        self.source_dir = r"C:\DOWNS\Lazlle_Demo"
        self.deploy_dir = os.path.join(self.source_dir, "production_build")
        self.backup_dir = os.path.join(self.source_dir, "backups")
        
    def create_backup(self):
        """Create backup of current files"""
        print("💾 Creating backup...")
        
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        backup_path = os.path.join(self.backup_dir, f"backup_{timestamp}")
        
        os.makedirs(backup_path, exist_ok=True)
        
        files_to_backup = [
            "menu.html",
            "menu-styles.css", 
            "menu-script.js",
            "index.html",
            "styles.css",
            "script.js"
        ]
        
        for file in files_to_backup:
            if os.path.exists(file):
                shutil.copy2(file, backup_path)
                print(f"✅ Backed up: {file}")
        
        print(f"📁 Backup created: {backup_path}")
        return backup_path
    
    def optimize_files(self):
        """Optimize files for production"""
        print("\n🚀 Optimizing for production...")
        
        # Create production directory
        os.makedirs(self.deploy_dir, exist_ok=True)
        
        # Copy and optimize HTML files
        self.optimize_html("menu.html")
        self.optimize_html("index.html")
        
        # Copy and optimize CSS files
        self.optimize_css("menu-styles.css")
        self.optimize_css("styles.css")
        
        # Copy and optimize JS files
        self.optimize_js("menu-script.js")
        self.optimize_js("script.js")
        
        print(f"✅ Production files created in: {self.deploy_dir}")
    
    def optimize_html(self, filename):
        """Optimize HTML file"""
        if not os.path.exists(filename):
            return
            
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Add production optimizations
        optimizations = [
            # Add cache control meta tag
            '<meta http-equiv="Cache-Control" content="max-age=31536000">',
            # Add viewport optimization
            '<meta name="theme-color" content="#667eea">',
            # Add PWA manifest link (if we create one)
            '<link rel="manifest" href="manifest.json">'
        ]
        
        # Insert optimizations before closing head tag
        for opt in optimizations:
            if opt not in content:
                content = content.replace('</head>', f'    {opt}\n</head>')
        
        # Write optimized file
        output_path = os.path.join(self.deploy_dir, filename)
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"✅ Optimized: {filename}")
    
    def optimize_css(self, filename):
        """Optimize CSS file"""
        if not os.path.exists(filename):
            return
            
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Basic CSS optimization (remove extra whitespace)
        lines = content.split('\n')
        optimized_lines = []
        
        for line in lines:
            line = line.strip()
            if line and not line.startswith('/*'):  # Remove comments
                optimized_lines.append(line)
        
        optimized_content = '\n'.join(optimized_lines)
        
        # Write optimized file
        output_path = os.path.join(self.deploy_dir, filename)
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(optimized_content)
        
        print(f"✅ Optimized: {filename}")
    
    def optimize_js(self, filename):
        """Optimize JavaScript file"""
        if not os.path.exists(filename):
            return
            
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove console.log statements for production
        lines = content.split('\n')
        optimized_lines = []
        
        for line in lines:
            if 'console.log' not in line or '// Keep this log' in line:
                optimized_lines.append(line)
        
        optimized_content = '\n'.join(optimized_lines)
        
        # Write optimized file
        output_path = os.path.join(self.deploy_dir, filename)
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(optimized_content)
        
        print(f"✅ Optimized: {filename}")
    
    def create_manifest(self):
        """Create PWA manifest for mobile app-like experience"""
        print("\n📱 Creating PWA manifest...")
        
        manifest = {
            "name": "Restaurant Manager Menu",
            "short_name": "Menu",
            "description": "Digital restaurant menu system",
            "start_url": "/menu.html",
            "display": "standalone",
            "background_color": "#667eea",
            "theme_color": "#667eea",
            "icons": [
                {
                    "src": "icon-192.png",
                    "sizes": "192x192",
                    "type": "image/png"
                },
                {
                    "src": "icon-512.png", 
                    "sizes": "512x512",
                    "type": "image/png"
                }
            ]
        }
        
        manifest_path = os.path.join(self.deploy_dir, "manifest.json")
        with open(manifest_path, 'w') as f:
            json.dump(manifest, f, indent=2)
        
        print("✅ PWA manifest created")
    
    def create_deployment_guide(self):
        """Create deployment guide"""
        print("\n📋 Creating deployment guide...")
        
        guide_content = """# 🍽️ Restaurant Menu - Production Deployment Guide

## Files to Upload to Your Web Server

Upload all files from the `production_build` folder to your web server:

### Core Files:
- `menu.html` - Customer-facing menu
- `menu-styles.css` - Menu styling
- `menu-script.js` - Menu functionality
- `index.html` - Admin panel (optional)
- `styles.css` - Admin panel styling
- `script.js` - Admin panel functionality

### PWA Files:
- `manifest.json` - Progressive Web App manifest
- `icon-192.png` - App icon (192x192) - *Create this*
- `icon-512.png` - App icon (512x512) - *Create this*

## QR Code Setup

1. **Generate QR Codes**: Use your production domain
   ```bash
   python generate_all_qr_codes.py https://yourdomain.com
   ```

2. **Print QR Codes**: High-quality prints, minimum 2x2 inches

3. **Table Placement**: Eye-level, protected from spills

## Server Configuration

### Apache (.htaccess)
```apache
# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript
</IfModule>

# Set cache headers
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType text/html "access plus 1 day"
</IfModule>
```

### Nginx
```nginx
location ~* \.(css|js)$ {
    expires 1M;
    add_header Cache-Control "public, immutable";
}

location ~* \.html$ {
    expires 1d;
    add_header Cache-Control "public";
}
```

## Testing Checklist

### Before Going Live:
- [ ] Test all QR codes with different devices
- [ ] Verify menu loads on various browsers
- [ ] Check mobile responsiveness
- [ ] Test all menu categories and items
- [ ] Verify search functionality
- [ ] Test call waiter button
- [ ] Check theme toggle
- [ ] Validate all links work

### Performance:
- [ ] Page loads in under 3 seconds
- [ ] Images are optimized
- [ ] CSS and JS are minified
- [ ] HTTPS is enabled
- [ ] Compression is enabled

## Security Considerations

1. **HTTPS Only**: Ensure SSL certificate is installed
2. **Admin Panel**: Protect with proper authentication
3. **Regular Updates**: Keep files updated
4. **Backup**: Regular backups of menu data

## Monitoring

1. **Analytics**: Add Google Analytics to track usage
2. **Error Monitoring**: Monitor for JavaScript errors
3. **Performance**: Track loading times
4. **User Feedback**: Collect customer feedback

## Support

For technical issues:
1. Check browser console for errors
2. Verify all files uploaded correctly
3. Test QR codes individually
4. Check server logs for errors

---

**Your restaurant menu is ready for production! 🚀**
"""
        
        guide_path = os.path.join(self.deploy_dir, "DEPLOYMENT_GUIDE.md")
        with open(guide_path, 'w', encoding='utf-8') as f:
            f.write(guide_content)
        
        print("✅ Deployment guide created")
    
    def create_htaccess(self):
        """Create .htaccess for Apache servers"""
        print("\n🔧 Creating .htaccess...")
        
        htaccess_content = """# Restaurant Menu - Apache Configuration

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript application/json
</IfModule>

# Set cache headers
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType text/html "access plus 1 day"
    ExpiresByType application/json "access plus 1 day"
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
</IfModule>

# Force HTTPS (uncomment when SSL is ready)
# RewriteEngine On
# RewriteCond %{HTTPS} off
# RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Custom error pages (optional)
# ErrorDocument 404 /404.html
# ErrorDocument 500 /500.html
"""
        
        htaccess_path = os.path.join(self.deploy_dir, ".htaccess")
        with open(htaccess_path, 'w') as f:
            f.write(htaccess_content)
        
        print("✅ .htaccess created")
    
    def run_deployment(self):
        """Run complete deployment preparation"""
        print("🍽️  Restaurant Menu - Production Deployment")
        print("="*60)
        
        try:
            # Create backup
            backup_path = self.create_backup()
            
            # Optimize files
            self.optimize_files()
            
            # Create PWA manifest
            self.create_manifest()
            
            # Create deployment guide
            self.create_deployment_guide()
            
            # Create .htaccess
            self.create_htaccess()
            
            print("\n" + "="*60)
            print("✅ PRODUCTION DEPLOYMENT READY!")
            print("="*60)
            print(f"📁 Production files: {self.deploy_dir}")
            print(f"💾 Backup created: {backup_path}")
            print("📋 Read DEPLOYMENT_GUIDE.md for next steps")
            print("="*60)
            print("\n🎯 Next Steps:")
            print("1. Upload files from production_build/ to your web server")
            print("2. Generate QR codes with your production domain")
            print("3. Test everything thoroughly")
            print("4. Print and place QR codes on tables")
            print("5. Go live! 🚀")
            
            return True
            
        except Exception as e:
            print(f"❌ Deployment preparation failed: {e}")
            return False

def main():
    """Main function"""
    deployment = ProductionDeployment()
    
    print("🍽️  Preparing for Production Deployment")
    print("="*50)
    
    confirm = input("This will create optimized production files. Continue? (y/n): ").lower()
    if confirm != 'y':
        print("👋 Deployment cancelled")
        return
    
    success = deployment.run_deployment()
    
    if success:
        print("\n✅ Your restaurant menu is ready for production!")
    else:
        print("\n❌ Deployment preparation failed")
        sys.exit(1)

if __name__ == "__main__":
    main()