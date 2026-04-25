import os
from PIL import Image, ImageChops

# Source directory where original screenshots are
src_dir = "/Users/mohamedabshir/ALNACIIM/all images"
# Destination directory for production
dest_dir = "/Users/mohamedabshir/ALNACIIM/public/images"

def trim(im):
    # Detect background color from a corner
    bg = Image.new(im.mode, im.size, im.getpixel((5, 5)))
    diff = ImageChops.difference(im, bg)
    diff = ImageChops.add(diff, diff, 2.0, -100)
    bbox = diff.getbbox()
    if bbox:
        return im.crop(bbox)
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
                if img.mode in ('RGBA', 'P'):
                    img = img.convert('RGB')
                
                # 1. Trim outer borders
                img = trim(img)
                
                # 2. Crop top 22% (to hide title)
                width, height = img.size
                crop_top = int(height * 0.22)
                cropped_img = img.crop((0, crop_top, width, height))
                
                # 3. Save
                cropped_img.save(dest_path)
                print(f"Processed & Trimmed: {filename}")
        except Exception as e:
            print(f"Error: {filename} -> {e}")
