
import os
from bs4 import BeautifulSoup
import json

files = [
    "index.html", "about.html", "products.html", "contact.html", 
    "blog.html", "arise-extended-sections.html", "enquiry.html",
    "gallery.html", "industries.html", "infrastructure.html",
    "feature.html", "testimonial.html", "404.html"
]

audit_results = []

for filename in files:
    if not os.path.exists(filename):
        continue
        
    with open(filename, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
        
    # Find Buttons & CTAs & Links
    # 1. <button> tags
    # 2. <a> tags with 'btn' or 'cta' in class
    # 3. <input> type='submit' or 'button'
    
    elements = []
    
    # Buttons
    for btn in soup.find_all('button'):
        elements.append(btn)
        
    # Inputs
    for inp in soup.find_all('input', {'type': ['submit', 'button']}):
        elements.append(inp)
        
    # Links acting as buttons (heuristic: class contains btn, cta, or looks like navigation link?)
    # The user said "every button (CTA, navigation...)"
    # Navigation links usually are just <a>, so we should check <a> tags generally but filter for interesting ones?
    # Or just grab all <a>? "list every button... (CTA, navigation...)" implies all interactive navigations.
    # Let's grab all <a> for completeness but maybe flag them.
    for a in soup.find_all('a'):
        elements.append(a)

    for el in elements:
        tag_name = el.name
        
        # Determine Label
        label = ""
        if tag_name == 'input':
            label = el.get('value', 'Submit')
        else:
            # Get text, strip whitespace
            label = el.get_text(separator=" ", strip=True)
            if not label:
                # Try aria-label or title
                label = el.get('aria-label') or el.get('title') or "[No Label]"
        
        # Link specific
        href = el.get('href') if tag_name == 'a' else None
        
        # Accessibility check
        aria_label = el.get('aria-label')
        role = el.get('role')
        
        # Class check for button styling
        classes = el.get('class', [])
        is_styled_button = any(('btn' in c or 'cta' in c) for c in classes)
        
        entry = {
            "page": filename,
            "tag": tag_name,
            "label": label[:50], # Truncate long labels
            "href": href,
            "classes": classes,
            "accessibility": {
                "aria_label": aria_label,
                "role": role,
                "has_text": bool(label and label != "[No Label]")
            },
            "location_context": "Unknown" # Hard to determine exact section without more logic, but page is key
        }
        
        audit_results.append(entry)

print(json.dumps(audit_results, indent=2))
