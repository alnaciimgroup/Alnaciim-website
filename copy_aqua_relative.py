import shutil
import os

src = "all images/Aqua Safi Industries.png"
dest = "public/images/aqua_safi_industries_final.png"

if os.path.exists(src):
    shutil.copy(src, dest)
    print(f"Successfully copied {src} to {dest}")
else:
    print(f"Source file {src} does not exist")
