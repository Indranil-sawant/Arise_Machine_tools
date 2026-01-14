# Arise Machine Tools Solutions - Official Website

[![Production Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)](https://github.com/Indranil-sawant/Arise_Machine_tools)
[![Hosting](https://img.shields.io/badge/Hosting-GitHub%20Pages%20%2F%20Hostinger-blue)](https://github.com/Indranil-sawant/Arise_Machine_tools)
[![License](https://img.shields.io/badge/License-Proprietary-red)](LICENSE.txt)

## 🎯 Project Overview

This is the **production-ready official website** for **Arise Machine Tools Solutions**, a leading provider of high-quality CNC tooling, industrial lubricants, and precision engineering solutions based in Pune, Maharashtra, India.

The website showcases our comprehensive product range, services, infrastructure, and company information in a modern, professional, and SEO-optimized manner.

---

## 🏢 About Arise Machine Tools Solutions

**Industry:** Manufacturing & Industrial Engineering  
**Location:** Pune, Maharashtra, India  
**Contact:** +91 91304 72008 | helpdeskarisemachinetools@gmail.com  
**Website Goal:** B2B Lead Generation, Product Showcase, Customer Support

### Our Offerings:
- **CNC/VMC/HMC Tools** - Milling, Drilling, Boring, Turning Solutions
- **Tool Holding Systems** - Adapters, Collets, Holders
- **Industrial Fluids & Chemicals** - Cutting Oils, Rust Removers, Lubricants
- **Reconditioning Services** - Lead Screws, Ball Screws, Slides
- **Tool Handling Systems** - Trolleys, Cupboards, Racks

---

## 🛠️ Tech Stack

### Frontend Technologies
| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic structure, SEO optimization |
| **CSS3** | Modern styling, responsive design, animations |
| **JavaScript (Vanilla)** | Interactive components, search, gallery |
| **Bootstrap 5** | Grid system, responsive utilities |
| **Font Awesome 5** | Icon library |
| **WOW.js** | Scroll animations |
| **Owl Carousel** | Image carousels |
| **Lightbox** | Gallery image previews |
| **Waypoints** | Scroll-based triggers |
| **CounterUp** | Animated statistics |

### Libraries & Dependencies
- **jQuery 3.4.1** - DOM manipulation
- **Bootstrap 5.0.0** - Responsive framework
- **Animate.css** - CSS animations
- **Easing.js** - Smooth scroll effects

### Analytics & Tracking
- **Google Analytics (GA4)** - ID: `G-MPHL2PF1QJ`
- **Google Tag Manager** - ID: `GTM-KL6Q4VC8`

---

## 📁 Folder Structure

```
Arise_Machine_tools/
│
├── index.html                  # Homepage (Primary landing page)
├── about.html                  # Company information, team, values
├── products.html               # Product catalog with search functionality
├── contact.html                # Contact form and company details
├── gallery.html                # Image gallery showcase
├── industries.html             # Industries we serve
├── infrastructure.html         # Manufacturing infrastructure
├── enquiry.html                # Product enquiry form
├── blog.html                   # Blog/News section
├── testimonial.html            # Customer testimonials
├── feature.html                # Special features page
├── 404.html                    # Custom error page
├── arise-extended-sections.html # Reusable HTML component snippets
│
├── css/                        # All stylesheets
│   ├── style.css               # Main template styles
│   ├── bootstrap.min.css       # Bootstrap framework
│   ├── antigravity.css         # Custom scroll effects
│   ├── cnc-*.css               # Component-specific premium styles
│   └── optimization-premium.css # Performance optimizations
│
├── js/                         # JavaScript files
│   ├── main.js                 # Main application logic
│   ├── arise-global-search.js  # Global search functionality
│   ├── gallery.js              # Gallery image loading
│   ├── optimization-premium.js # Performance optimizations
│   └── antigravity.js          # (Unused - marked for review)
│
├── img/                        # Image assets (137MB total)
│   ├── tools/                  # Product images
│   ├── *.jpg, *.png, *.webp    # Various site images
│   └── [Large images flagged for compression]
│
├── lib/                        # Third-party libraries
│   ├── animate/                # Animate.css
│   ├── owlcarousel/            # Owl Carousel
│   ├── lightbox/               # Lightbox gallery
│   ├── waypoints/              # Waypoints scroll detection
│   ├── counterup/              # Counter animations
│   ├── wow/                    # WOW.js animations
│   └── easing/                 # Easing functions
│
├── scss/                       # Bootstrap SCSS source (820KB)
│   └── bootstrap/              # Bootstrap source files (for development)
│
├── assets/                     # Static assets
│   └── img/
│       └── favicon.ico         # Site favicon
│
├── info/                       # Data files
│   └── data.txt                # Product listing reference
│
├── .git/                       # Git version control
├── .history/                   # Local history folder
├── .lh/                        # Local development folder
│
├── LICENSE.txt                 # Template license
└── README.md                   # This file
```

---

## 🚀 How to Run Locally

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Local server (for testing)

### Steps

#### Option 1: Direct File Opening
```bash
# Clone the repository
git clone https://github.com/Indranil-sawant/Arise_Machine_tools.git

# Navigate to the directory
cd Arise_Machine_tools

# Open index.html in your browser
# On Linux:
xdg-open index.html
# On macOS:
open index.html
# On Windows:
start index.html
```

#### Option 2: Using Python HTTP Server
```bash
# Navigate to project folder
cd Arise_Machine_tools

# Start a simple HTTP server (Python 3)
python3 -m http.server 8000

# Or Python 2
python -m SimpleHTTPServer 8000

# Open browser to:
# http://localhost:8000
```

#### Option 3: Using Node.js `http-server`
```bash
# Install http-server globally (if not installed)
npm install -g http-server

# Navigate to project
cd Arise_Machine_tools

# Start server
http-server -p 8000

# Open browser to:
# http://localhost:8000
```

---

## 🌐 Deployment

### Current Hosting
- **Platform:** GitHub Pages / Hostinger
- **Domain:** [Your production domain]
- **SSL/HTTPS:** Enabled
- **CDN:** Cloudflare (if applicable)

### Deployment Steps
1. **Commit changes** to the repository
2. **Push to main/master branch**
3. **GitHub Actions/Manual deployment** triggers update
4. Changes are live within 1-5 minutes

### Important Deployment Notes
⚠️ **NEVER** delete files without cross-referencing dependencies  
⚠️ **ALWAYS** test changes locally before deploying  
⚠️ **BACKUP** before major changes  

---

## 🔍 SEO & Performance

### SEO Features Implemented
✅ Semantic HTML5 markup  
✅ Meta descriptions on all pages  
✅ Open Graph tags for social sharing  
✅ Structured heading hierarchy (H1-H6)  
✅ Alt tags on all images  
✅ Clean URL structure  
✅ XML sitemap (recommended to add)  
✅ Robots.txt (recommended to add)  

### Performance Optimizations
- Lazy loading for images (`optimization-premium.js`)
- Minified CSS and JS libraries
- Font preloading via CDN
- Async loading for analytics scripts
- Deferred non-critical CSS

### Recommended Additional Optimizations
1. **Image Compression**: Some images exceed 20MB (see audit below)
2. **WebP Conversion**: Convert large JPG/PNG to WebP format
3. **CSS Purging**: Remove unused CSS classes
4. **Caching Strategy**: Implement browser caching headers

---

## 📊 Performance Metrics (Current Status)

| Metric | Value | Status |
|--------|-------|--------|
| Total HTML Files | 13 | ✅ Production Ready |
| Total CSS Files | 27 | ✅ Modular Structure |
| Total JS Files | 6 | ✅ Optimized |
| Total Image Size | 137 MB | ⚠️ Needs Compression |
| Library Size | 464 KB | ✅ Acceptable |
| SCSS Source | 820 KB | ⚠️ Not Used in Production |

---

## 🧰 Maintenance Guidelines

### Regular Maintenance Tasks
- [ ] Review and update product listings quarterly
- [ ] Compress new images before upload (target: <500KB per image)
- [ ] Test contact forms monthly
- [ ] Review analytics data weekly
- [ ] Update blog/news section regularly
- [ ] Check for broken links quarterly

### Code Quality Standards
- Keep HTML semantic and accessible
- Maintain consistent naming conventions
- Comment complex JavaScript logic
- Remove `console.log` statements before production
- Version control all changes via Git

### Browser Compatibility
Tested and compatible with:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Android)

---

## ⚠️ Important Warnings

### Production Safety Rules
1. **DO NOT delete any files without dependency checking**
2. **DO NOT modify working CSS/JS without testing**
3. **DO NOT remove HTML files - they may be linked externally**
4. **DO NOT change folder structure - breaks relative paths**
5. **ALWAYS backup before making structural changes**
6. **ALWAYS test on staging before deploying to production**

### Critical Files (DO NOT MODIFY/DELETE)
- `index.html` - Primary landing page
- `css/style.css` - Main stylesheet
- `js/main.js` - Core application logic
- `img/arise-logo-removebg.png` - Company logo
- All files in `lib/` directory - Third-party dependencies

---

## 🧪 Testing Checklist

Before deploying changes, verify:
- [ ] All navigation links work correctly
- [ ] Contact form submits successfully
- [ ] Product search functions properly
- [ ] Gallery images load correctly
- [ ] Mobile responsiveness is maintained
- [ ] No console errors in browser DevTools
- [ ] Google Analytics tracking fires
- [ ] Page load time < 3 seconds
- [ ] All CTA buttons are active and linked

---

## 📞 Contact & Support

**Company:** Arise Machine Tools Solutions  
**Location:** Pune, Maharashtra, India  
**Phone:** +91 91304 72008  
**Email:** helpdeskarisemachinetools@gmail.com  

**Technical Support:**  
For website-related issues, contact the development team or create an issue in the GitHub repository.

---

## 📜 License & Credits

### License
This project is licensed by **AISYNC Software Solutions**.

### Template Credits
This website uses the **Mailler - SaaS Website Template** by HTML Codex
### Customizations
Extensive customizations and premium enhancements have been made for Arise Machine Tools Solutions, including:
- Custom CNC-themed components
- Advanced search functionality
- Gallery systems
- SEO optimization
- Performance enhancements

### Third-Party Libraries
All third-party libraries are used under their respective licenses. See individual library documentation for details.

---

## 🔄 Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | Initial | Base template implementation |
| 2.0.0 | 2026-01 | Complete production overhaul with premium features |

---

## 🚨 Repository Cleanliness Notes

This repository has been audited for production readiness. For detailed findings, see the **PRODUCTION_AUDIT_REPORT.md** file.

**Key Findings:**
- ✅ All HTML pages are actively used
- ⚠️ Some development scripts (`.py` files) can be safely removed from production
- ⚠️ Zone.Identifier files should be cleaned up
- ⚠️ Large images need compression
- ⚠️ SCSS source files are not used in production but kept for development

---

## 🎨 Design Philosophy

The website follows modern B2B design principles:
- **Professional & Clean** - Corporate aesthetic suitable for manufacturing
- **Performance-Focused** - Fast loading, optimized assets
- **Mobile-First** - Responsive design for all devices
- **Conversion-Optimized** - Clear CTAs, contact forms, WhatsApp integration
- **SEO-Driven** - Structured for search engine visibility

---

**Made with ❤️ for Arise Machine Tools Solutions**  
**© 2026 Arise Machine Tools Solutions. All Rights Reserved.**
