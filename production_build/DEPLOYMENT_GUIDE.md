# 🍽️ Restaurant Menu - Production Deployment Guide

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
