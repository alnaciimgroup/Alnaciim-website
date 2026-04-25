import os
from PIL import Image, ImageChops

images_dir = "/Users/mohamedabshir/ALNACIIM/public/images"

def trim(im):
    # This function removes the solid background color from the edges
    bg = Image.new(im.mode, im.size, im.getpixel((5, 5))) # Check a pixel near the corner
    diff = ImageChops.difference(im, bg)
    diff = ImageChops.add(diff, diff, 2.0, -100)
    bbox = diff.getbbox()
    if bbox:
        return im.crop(bbox)
    return im

for filename in os.listdir(images_dir):
    if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
        filepath = os.path.join(images_dir, filename)
        try:
            with Image.open(filepath) as img:
                # Convert to RGB if needed to avoid issues with getpixel/ImageChops
                if img.mode in ('RGBA', 'P'):
                    img = img.convert('RGB')
                
                trimmed_img = trim(img)
                trimmed_img.save(filepath)
                print(f"Trimmed: {filename}")
        except Exception as e:
            print(f"Error trimming {filename}: {e}")
