# Deleting files with extension mov

import os
files = os.listdir("C:/Users/allof/Downloads/ARTBOX/image")
remove = []
for file in files:
    if "MP4" in file:
        os.remove("C:/Users/allof/Downloads/ARTBOX/image/"+file)
