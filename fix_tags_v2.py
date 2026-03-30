import os
import re

def fix_content(content):
    # Regex to find <button ...> contents </button> (actually closed by </a>)
    # This tries to match as little as possible while ensuring the opening tag is <button
    # It avoids cases where another <button exists between the starting button and the next </a>
    
    def replace_button_closed_by_a(match):
        return f"{match.group(1)}{match.group(2)}</button>"
    
    # regex matches:
    # 1. <button -- start of button tag
    # 2. [^>]*? -- everything until >
    # 3. > -- end of start tag
    # 4. (?:(?!<button).)*? -- anything but another <button
    # 5. </a> -- the incorrect closing tag
    
    # We'll run this multiple times until no more matches found
    new_content = content
    while True:
        next_content = re.sub(r'(<button[^>]*?>)((?:(?!<button).)*?)</a>', replace_button_closed_by_a, new_content, flags=re.DOTALL)
        if next_content == new_content:
            break
        new_content = next_content
        
    return new_content

def process_file(filepath):
    print(f"Refixing {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    fixed = fix_content(content)
    
    if fixed != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(fixed)
        return True
    return False

def walk_and_fix(start_dir):
    fixed_count = 0
    for root, dirs, files in os.walk(start_dir):
        for file in files:
            if file == 'page.tsx':
                path = os.path.join(root, file)
                if process_file(path):
                    fixed_count += 1
    print(f"Total files fixed: {fixed_count}")

if __name__ == "__main__":
    walk_and_fix('app')
