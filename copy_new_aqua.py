import shutil
import os

src = "/Users/mohamedabshir/ALNACIIM/all images/Aqua Safi Industries.png"
dest = "/Users/mohamedabshir/ALNACIIM/public/images/aqua_safi_industries_new.png"

shutil.copy(src, dest)
print(f"Copied {src} to {dest}")
