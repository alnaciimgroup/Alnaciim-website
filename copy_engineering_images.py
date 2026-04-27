import shutil
import os

source_dir = "all images"
dest_dir = "public/images"

mappings = {
    "Nuwaco RO Plant.png": "solutions_water.png",
    "Solar Power System.png": "solutions_power.png",
    "energy_intelligent_controller.png": "solutions_scada.png",
    "Custom Panel Fabrication & Industrial Electrical Works.png": "solutions_custom.png",
    "Commercial RO Systems & Maintenance.png": "solutions_maintenance.png"
}

for src_name, dest_name in mappings.items():
    src_path = os.path.join(source_dir, src_name)
    dest_path = os.path.join(dest_dir, dest_name)
    try:
        shutil.copy2(src_path, dest_path)
        print(f"Successfully copied {src_name} to {dest_name}")
    except Exception as e:
        print(f"Error copying {src_name}: {e}")
