### Verifying NGINX Installation on Ubuntu

After successfully installing NGINX, it's crucial to verify that the service is running correctly, its configuration is valid, and it's serving web content as intended. This document outlines the key steps to confirm your NGINX setup.

## 1. Check NGINX Service Status

First, let's confirm that the NGINX service is active and running on your server.

```
sudo systemctl status nginx
```

Understanding the Status:
After installation, NGINX might sometimes be in an inactive (dead) state, as shown in the first image below. This means the service is installed but not currently running.

<img src="https://github.com/Siyal2/AetherForge/blob/3263cac7622789440c99ebfb6c5a2d026add645b/Resources/resource-screenshots/nginx-installed.png" width="600" alt="image alt">

Starting NGINX:
If NGINX is inactive, you need to start it. Use the following command:

```
sudo systemctl start nginx
```

After starting the service, you can run ``` sudo systemctl status nginx ``` again to verify it's now ``` active (running) ``` .

Expected Output ``` (Active Status) ```:
If NGINX is running correctly, you should see output similar to this, with Active: ``` active (running) ``` . The second image demonstrates this successful state after the start command.

``` 
● nginx.service - A high performance web server and a reverse proxy server
     Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
     Active: active (running) since Mon 2025-07-21 07:03:11 UTC; 2s ago
       Docs: man:nginx(8)
    Process: 2037 ExecStartPre=/usr/sbin/nginx -c ${CONF_FILE} (code=exited, status=0/SUCCESS)
   Main PID: 2038 (nginx)
      Tasks: 3 (limit: 9463)
     Memory: 3.3M
        CPU: 8ms
     CGroup: /system.slice/nginx.service
             ├─2038 "/usr/sbin/nginx -c /etc/nginx/nginx.conf"
             ├─2039 "nginx: worker process"
             └─2040 "nginx: worker process"

Jul 21 07:03:11 AetherForge systemd[1]: Starting nginx - high performance web server...
Jul 21 07:03:11 AetherForge systemd[1]: Started nginx - high performance web server.
```
<img src="https://github.com/Siyal2/AetherForge/blob/3263cac7622789440c99ebfb6c5a2d026add645b/Resources/resource-screenshots/nginx-running.png" width="600" alt="image alt">




