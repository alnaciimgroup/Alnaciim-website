import shutil
import os

base = "/Users/mohamedabshir"
src_dir = os.path.join(base, ".gemini", "antigravity", "brain", "963aea46-0f7e-4d50-b0b5-78899a88a576")
dest_dir = os.path.join(base, "ALNACIIM", "public", "images")

shutil.copy(os.path.join(src_dir, "media__1777026563412.png"), os.path.join(dest_dir, "energy_inverters.png"))
shutil.copy(os.path.join(src_dir, "media__1777026808562.png"), os.path.join(dest_dir, "energy_bess_storage.png"))
shutil.copy(os.path.join(src_dir, "media__1777026882872.jpg"), os.path.join(dest_dir, "energy_intelligent_controller.jpg"))

shutil.copy("/Users/mohamedabshir/ALNACIIM/all images/Aqua Safi Industries.png", "/Users/mohamedabshir/ALNACIIM/public/images/aqua_safi_industries_final.png")
print("Aqua Safi Industries image copied!")
