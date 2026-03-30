import os
import re

def clean_jsx(content):
    # Remove DOCTYPE
    content = content.replace('<!DOCTYPE html>', '')
    
    # Remove <html> and <head> tags and their contents
    content = re.sub(r'<html.*?>.*?<head>.*?</head>', '', content, flags=re.DOTALL)
    
    # Extract content inside <body>
    body_match = re.search(r'<body(.*?)>(.*?)</body>', content, flags=re.DOTALL)
    if body_match:
        body_attrs = body_match.group(1)
        body_content = body_match.group(2)
        
        # If there's a body class, wrap in a div
        class_match = re.search(r'className="(.*?)"', body_attrs)
        if class_match:
            body_class = class_match.group(1)
            content = f'<div className="{body_class}">{body_content}</div>'
        else:
            content = f'<>\n{body_content}\n</>'
    else:
        # Fallback
        content = re.sub(r'<html.*?>', '', content)
        content = re.sub(r'</html>', '', content)
        content = re.sub(r'<head>.*?</head>', '', content, flags=re.DOTALL)
        content = re.sub(r'<body.*?>', '', content)
        content = re.sub(r'</body>', '', content)
        content = f'<>\n{content}\n</>'

    # Fix common tag mismatches caused by automated find/replace
    # e.g., <button>...</button> being turned into <button>...</a> or vice versa
    # This is a bit risky but let's try to fix known issues
    content = content.replace('</a>\n      </div>\n      </div>\n      </div>\n      {/*  Live Quiz Banner', '</button>\n      </div>\n      </div>\n      </div>\n      {/*  Live Quiz Banner')
    
    # Specific fix for button/anchor hybrid bugs
    content = re.sub(r'<button([^>]*?)>(.*?)</button>', r'<button\1>\2</button>', content, flags=re.DOTALL)
    # The most common issue is <button>...</button> being replaced wrongly in the previous step
    # Let's fix <a> tags that were intended to be something else or are just broken
    
    return content.strip()

def process_file(filepath):
    print(f"Processing {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Regex to find everything between 'return (' and ');'
    match = re.search(r'return \(\s*(.*?)\s*\);', content, flags=re.DOTALL)
    if match:
        original_jsx = match.group(1)
        cleaned_jsx = clean_jsx(original_jsx)
        
        # Reconstruct the file
        new_content = content.replace(original_jsx, f'(\n      {cleaned_jsx}\n    )')
        # Fix the structure if the replace was too aggressive
        new_content = new_content.replace('return (\n      (', 'return (')
        new_content = new_content.replace(')\n    );', ');')
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)

def walk_and_fix(start_dir):
    for root, dirs, files in os.walk(start_dir):
        for file in files:
            if file == 'page.tsx':
                path = os.path.join(root, file)
                process_file(path)

if __name__ == "__main__":
    walk_and_fix('app')
