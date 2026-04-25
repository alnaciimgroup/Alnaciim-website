import os
from PIL import Image, ImageChops

src_dir = "/Users/mohamedabshir/ALNACIIM/all images"
dest_dir = "/Users/mohamedabshir/ALNACIIM/public/images"

def aggressive_trim(im, tolerance=30):
    # Convert to RGB to handle colors
    img = im.convert("RGB")
    width, height = img.size
    
    # Check rows from top
    top = 0
    for y in range(height):
        row = [img.getpixel((x, y)) for x in range(0, width, 10)] # Check every 10th pixel
        is_bg = all(all(abs(c - 240) < tolerance or all(abs(c - val) < tolerance for val in row[0]) for c in p) for p in row)
        # Actually, let's just check if the row is mostly uniform
        avg_p = row[0]
        is_uniform = all(all(abs(p[i] - avg_p[i]) < tolerance for i in range(3)) for p in row)
        if not is_uniform:
            top = y
            break
            
    # Check rows from bottom
    bottom = height
    for y in range(height - 1, top, -1):
        row = [img.getpixel((x, y)) for x in range(0, width, 10)]
        avg_p = row[0]
        is_uniform = all(all(abs(p[i] - avg_p[i]) < tolerance for i in range(3)) for p in row)
        if not is_uniform:
            bottom = y
            break

    # Check cols from left
    left = 0
    for x in range(width):
        col = [img.getpixel((x, y)) for y in range(0, height, 10)]
        avg_p = col[0]
        is_uniform = all(all(abs(p[i] - avg_p[i]) < tolerance for i in range(3)) for p in col)
        if not is_uniform:
            left = x
            break

    # Check cols from right
    right = width
    for x in range(width - 1, left, -1):
        col = [img.getpixel((x, y)) for y in range(0, height, 10)]
        avg_p = col[0]
        is_uniform = all(all(abs(p[i] - avg_p[i]) < tolerance for i in range(3)) for p in col)
        if not is_uniform:
            right = x
            break

    if right > left and bottom > top:
        return im.crop((left, top, right, bottom))
    return im

def normalize_name(filename):
    return filename.lower().replace(" ", "_").replace("(", "").replace(")", "").replace("&", "and").replace("+", "plus").replace(".", "_", filename.count(".") - 1)

for filename in os.listdir(src_dir):
    if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
        filepath = os.path.join(src_dir, filename)
        new_filename = normalize_name(filename)
        dest_path = os.path.join(dest_dir, new_filename)
        
        try:
            with Image.open(filepath) as img:
                # 1. Aggressive trim
                img = aggressive_trim(img)
                
                # 2. Deeper Crop (30%) to absolutely hide any title/text at the top
                width, height = img.size
                crop_top = int(height * 0.30)
                cropped_img = img.crop((0, crop_top, width, height))
                
                # 3. Save
                cropped_img.save(dest_path)
                print(f"Aggressively Processed: {filename}")
        except Exception as e:
            print(f"Error: {filename} -> {e}")
