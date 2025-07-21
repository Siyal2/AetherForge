### Updating NGINX on Ubuntu
## This document outlines the steps to update your NGINX installation on Ubuntu using the official NGINX repository. This method ensures you receive the latest stable or mainline NGINX packages directly from NGINX.org, often offering more up-to-date features and security patches compared to the default Ubuntu repositories.

# 1. Prerequisites
Before you begin, ensure your system has the necessary tools to fetch and verify packages.

``` 
sudo apt install curl gnupg ca-certificates lsb-release ubuntu-keyring

 ```

# 2. Import the NGINX Signing Key

To ensure the authenticity of the NGINX packages you download, you need to import their official GPG signing key. This allows " apt " to verify that the packages haven't been tampered with.

First, fetch the key:

```
curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor \
| sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg >/dev/null

``` 

Next, verify that the downloaded file contains the correct key. The output should include the full fingerprint 573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62.

``` 
gpg --dry-run --quiet --no-keyring --import --import-options import-show /usr/share/keyrings/nginx-archive-keyring.gpg

 ```

You should see output similar to this, confirming the key: 

```
 pub   rsa2048 2011-08-19 [SC] [expires: 2027-05-24]
      573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62
uid                      nginx signing key <signing-key@nginx.com>

```




# 3. Set Up the NGINX APT Repository .

Now, you need to tell " apt " where to find the NGINX packages. You have two options: stable or mainline packages. Choose the one that best fits your needs.

Option A: Stable NGINX Packages (Recommended for Production)
For stable and well-tested NGINX releases, run:

```
echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \
http://nginx.org/packages/ubuntu `lsb_release -cs` nginx" \
    | sudo tee /etc/apt/sources.list.d/nginx.list
```


Option B: Mainline NGINX Packages (Latest Features, Potentially Less Stable)
If you need the very latest features and don't mind potentially less stability, use the mainline repository:

``` echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \
http://nginx.org/packages/mainline/ubuntu `lsb_release -cs` nginx" \
    | sudo tee /etc/apt/sources.list.d/nginx.list
``` 

Here's a proper documentation for updating an NGINX installation on Ubuntu, suitable for a GitHub repository.

Updating NGINX on Ubuntu
This document outlines the steps to update your NGINX installation on Ubuntu using the official NGINX repository. This method ensures you receive the latest stable or mainline NGINX packages directly from NGINX.org, often offering more up-to-date features and security patches compared to the default Ubuntu repositories.

1. Prerequisites
Before you begin, ensure your system has the necessary tools to fetch and verify packages.

Bash

sudo apt install curl gnupg2 ca-certificates lsb-release ubuntu-keyring
2. Import the NGINX Signing Key
To ensure the authenticity of the NGINX packages you download, you need to import their official GPG signing key. This allows apt to verify that the packages haven't been tampered with.

First, fetch the key:

```

curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor \
    | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg >/dev/null
```
Next, verify that the downloaded file contains the correct key. The output should include the full fingerprint 573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62.

```

gpg --dry-run --quiet --no-keyring --import --import-options import-show /usr/share/keyrings/nginx-archive-keyring.gpg
```
You should see output similar to this, confirming the key:
```
pub   rsa2048 2011-08-19 [SC] [expires: 2027-05-24]
      573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62
uid                      nginx signing key <signing-key@nginx.com>
```

3. Set Up the NGINX APT Repository
Now, you need to tell apt where to find the NGINX packages. You have two options: stable or mainline packages. Choose the one that best fits your needs.

Option A: Stable NGINX Packages (Recommended for Production)
For stable and well-tested NGINX releases, run:

```

echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \
http://nginx.org/packages/ubuntu `lsb_release -cs` nginx" \
    | sudo tee /etc/apt/sources.list.d/nginx.list
```
Option B: Mainline NGINX Packages (Latest Features, Potentially Less Stable)
If you need the very latest features and don't mind potentially less stability, use the mainline repository:

```

echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \
http://nginx.org/packages/mainline/ubuntu `lsb_release -cs` nginx" \
    | sudo tee /etc/apt/sources.list.d/nginx.list
```

# 4. Set Up Repository Pinning

Repository pinning ensures that your system prefers NGINX packages from the official nginx.org repository over any NGINX packages that might be available from Ubuntu's default repositories. This prevents conflicts and ensures you get updates from your chosen source.

```
echo -e "Package: *\nPin: origin nginx.org\nPin: release o=nginx\nPin-Priority: 900\n" \
    | sudo tee /etc/apt/preferences.d/99nginx
```

# 5. Update and Install/Upgrade NGINX .

Finally, update your package lists to include the new NGINX repository, and then install or upgrade NGINX.

``` sudo apt update ```


``` sudo apt install nginx ```

If NGINX is already installed from the official repository, sudo apt install nginx will intelligently upgrade it to the latest version available in the configured repository. If it's not installed, it will perform a fresh installation.

