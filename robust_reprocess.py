import os
from PIL import Image, ImageOps

src_dir = "/Users/mohamedabshir/ALNACIIM/all images"
dest_dir = "/Users/mohamedabshir/ALNACIIM/public/images"

def robust_trim(im):
    # Ensure it's RGB
    img = im.convert("RGB")
    # Invert to find content against light background
    # We assume the background is light (white/gray)
    # We use a threshold to ignore light background
    gray = img.convert("L")
    # Pixels > 230 are background
    bw = gray.point(lambda p: 0 if p > 230 else 255)
    bbox = bw.getbbox()
    
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
                # 1. Robust trim of light borders
                img = robust_trim(img)
                
                # 2. Crop top 30% to hide headers
                width, height = img.size
                crop_top = int(height * 0.30)
                cropped_img = img.crop((0, crop_top, width, height))
                
                # 3. Save
                cropped_img.save(dest_path)
                print(f"Robustly Processed: {filename}")
        except Exception as e:
            print(f"Error: {filename} -> {e}")
