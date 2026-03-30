import os
import re

def fix_mismatches(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. <button ...> ... </a> -> <button ...> ... </button>
    content = re.sub(r'<button([^>]*?)>(.*?)\s*</a>', r'<button\1>\2</button>', content, flags=re.DOTALL)
    
    # 2. <a ...> ... </button> -> <a ...> ... </a>
    content = re.sub(r'<a([^>]*?)>(.*?)\s*</button>', r'<a\1>\2</a>', content, flags=re.DOTALL)
    
    # 3. <button ...> ... <button ...> -> <button ...> ... </div> (in case of recursive but broken)
    # Actually let's just do a string based fix for common patterns found in the previous migration
    # The migration might have turned <a class="button"> into <button class="button"> but forgot to close it.
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

def walk_and_fix(start_dir):
    for root, dirs, files in os.walk(start_dir):
        for file in files:
            if file == 'page.tsx':
                path = os.path.join(root, file)
                print(f"Fixing tags in {path}...")
                fix_mismatches(path)

if __name__ == "__main__":
    walk_and_fix('app')
