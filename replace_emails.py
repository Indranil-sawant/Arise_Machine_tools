import os

TARGET_EMAIL = "helpdeskarisemachinetools@gmail.com"
EMAILS_TO_REPLACE = [
    "info@arisecnc.com",
    "info@example.com",
    "info@arisemachinetools.com"
]

EXCLUDE_DIRS = {".history", ".git", "lib", "node_modules", ".gemini"}
EXTENSIONS = {".html", ".js", ".css", ".py", ".txt"} # Scanning widely just in case

def replace_emails(directory):
    for root, dirs, files in os.walk(directory):
        # Modify dirs in-place to exclude unwanted directories
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
        
        for file in files:
            if not any(file.endswith(ext) for ext in EXTENSIONS):
                continue
            
            filepath = os.path.join(root, file)
            if file == "replace_emails.py":
                continue

            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_content = content
                changed = False
                for email in EMAILS_TO_REPLACE:
                    if email in new_content:
                        new_content = new_content.replace(email, TARGET_EMAIL)
                        changed = True
                        print(f"Replaced {email} in {filepath}")
                
                if changed:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
            except Exception as e:
                print(f"Error processing {filepath}: {e}")

if __name__ == "__main__":
    replace_emails(".")
