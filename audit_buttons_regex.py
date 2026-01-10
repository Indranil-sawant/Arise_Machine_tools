
import os
import re
import json

files = [
    "index.html", "about.html", "products.html", "contact.html", 
    "blog.html", "arise-extended-sections.html", "enquiry.html",
    "gallery.html", "industries.html", "infrastructure.html",
    "feature.html", "testimonial.html", "404.html"
]

audit_results = []

# Regex patterns
# Tag start: <(button|a|input) ... >
# We need to capture attributes.
tag_pattern = re.compile(r'<(button|a|input)([^>]*)>(.*?)(?:</\1>)?', re.DOTALL | re.IGNORECASE)
attr_pattern = re.compile(r'(\w+)=["\']([^"\']*)["\']')

for filename in files:
    if not os.path.exists(filename):
        continue
        
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Find all matches
    # This is a simple regex parser, it might miss edge cases but good enough for static audit
    # Note: Regex parsing HTML is fragile, but for a known formatted codebase it usually works okay for auditing
    
    # We iterate through the file to find tags
    for match in tag_pattern.finditer(content):
        tag_name = match.group(1).lower()
        attrs_str = match.group(2)
        inner_content = match.group(3) if match.group(3) else ""
        
        # Parse attributes
        attributes = dict(attr_pattern.findall(attrs_str))
        
        # Filter: We only want inputs if they are type submit/button
        if tag_name == 'input':
            type_attr = attributes.get('type', '').lower()
            if type_attr not in ['submit', 'button', 'reset']:
                continue
                
        # Get Label
        label = ""
        if tag_name == 'input':
            label = attributes.get('value', 'Submit')
        else:
            # Strip HTML tags from inner content to get text
            label = re.sub(r'<[^>]+>', '', inner_content).strip()
            if not label:
                 label = attributes.get('aria-label') or attributes.get('title') or "[No Label]"
        
        classes = attributes.get('class', '').split()
        href = attributes.get('href')
        
        entry = {
            "page": filename,
            "tag": tag_name,
            "label": label[:50].replace('\n', ' '), 
            "href": href,
            "classes": classes,
             "accessibility": {
                "aria_label": attributes.get('aria-label'),
                "role": attributes.get('role'),
                "has_text": bool(label and label != "[No Label]")
            }
        }
        audit_results.append(entry)

print(json.dumps(audit_results, indent=2))
