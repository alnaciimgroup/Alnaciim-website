import os
from PIL import Image

src_dir = "/Users/mohamedabshir/ALNACIIM/all images"
dest_dir = "/Users/mohamedabshir/ALNACIIM/public/images"

os.makedirs(dest_dir, exist_ok=True)

def normalize_name(filename):
    return filename.lower().replace(" ", "_").replace("(", "").replace(")", "").replace("&", "and").replace("+", "plus").replace(".", "_", filename.count(".") - 1)

for filename in os.listdir(src_dir):
    if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
        filepath = os.path.join(src_dir, filename)
        new_filename = normalize_name(filename)
        dest_path = os.path.join(dest_dir, new_filename)
        
        try:
            with Image.open(filepath) as img:
                width, height = img.size
                
                # Deeper crop (22%) to ensure the title text is completely gone
                crop_top = int(height * 0.22)
                
                cropped_img = img.crop((0, crop_top, width, height))
                cropped_img.save(dest_path)
                print(f"Reprocessed: {filename} -> {new_filename} with 22% crop")
        except Exception as e:
            print(f"Error processing {filename}: {e}")
