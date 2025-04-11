import os
import uuid
import json

# Configuration
IMAGE_ROOT = "images"
WEBSITE_NAME = "moj webshop"
OUTPUT_FILE = "data.js"

# Start building the structure
data = {
    "website": WEBSITE_NAME,
    "categories": []
}

# Walk through each subfolder in the images folder
for category_name in os.listdir(IMAGE_ROOT):
    category_path = os.path.join(IMAGE_ROOT, category_name)
    
    if os.path.isdir(category_path):
        products = []
        image_files = [f for f in os.listdir(category_path) if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp'))]

        # If images exist, use the first one as the category image
        category_image = os.path.join(IMAGE_ROOT, category_name, image_files[0]) if image_files else ""

        for img_file in image_files:
            product = {
                "name": os.path.splitext(img_file)[0],
                "image": os.path.join(IMAGE_ROOT, category_name, img_file).replace("\\", "/"),
                "id": str(uuid.uuid4())[:8]  # short UUID
            }
            products.append(product)

        category = {
            "name": category_name.capitalize(),
            "image": category_image.replace("\\", "/"),
            "products": products
        }

        data["categories"].append(category)

# Write to JS file
with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    f.write("const data = ")
    json.dump(data, f, indent=4, ensure_ascii=False)
    f.write(";")

print(f"✅ Done! File saved as {OUTPUT_FILE}")
