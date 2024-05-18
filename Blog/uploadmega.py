import os
from mega import Mega

# Login to Mega
email = "kishanbantakal@gmail.com"
password = "d2Fek256A"
mega = Mega()
m = mega.login(email, password)

# Upload a file
filename = "data.csv"
m.upload(filename)

# Get user details
details = m.get_user()
print(details)

# Get quota information
quota = m.get_quota()
print("Total Space:", quota)

# Find a file
file = m.find('myfile.doc')

# Download file using file object
m.download(file)

# Download file using Mega file URL
mega_url = "https://mega.nz/fm/R5pg1YrD"
m.download_url(mega_url)

# Specify download location
download_path = os.path.join(os.getcwd(), "data.csv")
m.download(file, download_path)

# Find a file by name
filename = "data.csv"
file = m.find(filename)
print(file)

# Rename a file
oldFilename = "data.csv"
newFilename = "renamed_data.csv"
file = m.find(oldFilename)
m.rename(file, newFilename)

# Get the link for a file
file = m.find("data.csv")
link = m.get_link(file)
print(link)
```Please replace `your_email@example.com` and `your_password` with your actual Mega account email and password. Also, replace `{file_id}` and `{file_key}` with the actual file ID and key from the Mega file URL.Keep in mind that this code is just an example and may not work as expected without proper configuration and error handling.