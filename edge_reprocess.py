import os
from PIL import Image, ImageChops, ImageFilter

src_dir = "/Users/mohamedabshir/ALNACIIM/all images"
dest_dir = "/Users/mohamedabshir/ALNACIIM/public/images"

def edge_trim(im):
    # Convert to grayscale for edge detection
    gray = im.convert("L")
    # Find edges - the photo will have many, the gradient background will have almost none
    edges = gray.filter(ImageFilter.FIND_EDGES)
    # Enhance edges to make them easier to detect
    edges = edges.point(lambda p: p * 10)
    # Find the bounding box of the edges
    bbox = edges.getbbox()
    
    if bbox:
        # Add a small padding (e.g. 5px) to ensure we don't cut into the photo
        padding = 5
        left = max(0, bbox[0] - padding)
        top = max(0, bbox[1] - padding)
        right = min(im.size[0], bbox[2] + padding)
        bottom = min(im.size[1], bbox[3] + padding)
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
                # 1. Edge-based trim to remove gradient borders
                img = edge_trim(img)
                
                # 2. Crop top 25% (to hide title)
                width, height = img.size
                crop_top = int(height * 0.25)
                cropped_img = img.crop((0, crop_top, width, height))
                
                # 3. Save
                cropped_img.save(dest_path)
                print(f"Edge-Processed: {filename}")
        except Exception as e:
            print(f"Error: {filename} -> {e}")
