# Azure VM Initial Setup and Connection Guide

## This document covers the essential steps from logging into your Azure account via the Azure CLI, creating a Virtual Machine (VM), and then connecting to that VM using SSH to verify your login.


### 1. Log in to Azure CLI
Before you can create or manage any Azure resources, you need to authenticate your Azure CLI session with your Azure account.

Open your PowerShell terminal (or Command Prompt, Git Bash, WSL terminal on Linux/macOS).

Run the Azure login command:

``` az login ```

This command will open your default web browser and prompt you to log in to your Azure account.

Follow the instructions in the browser to complete the authentication.

<img src="https://github.com/Siyal2/AetherForge/blob/1a0069d8d19072ab738aab9ece1c7ec3d9a63e10/Resources/resource-screenshots/3.png" width="600" alt="image alt">

Once successful, your terminal will display a JSON output with details about your Azure subscriptions.

<img src="https://github.com/Siyal2/AetherForge/blob/1a0069d8d19072ab738aab9ece1c7ec3d9a63e10/Resources/resource-screenshots/azlogin.png" width="600" alt="image alt">

### 2. Create the Azure Virtual Machine (VM)
We will use a PowerShell script to automate the VM creation process with your specified parameters.

2.1. Prepare the PowerShell Script File
Create a new file named Virtual-Machine-AZ-Script.ps1 (or any .ps1 name you prefer) using a text editor (e.g., Notepad, VS Code).

Paste the following content into this file:

```
# Define variables
$RESOURCE_GROUP_NAME="AetherForge"
$VM_NAME="AetherForge"
$LOCATION="centralus"
$ADMIN_USERNAME="aetherforge"
$ADMIN_PASSWORD="***************"
$VM_SIZE="Standard_D2as_v4"
```

```
# Create the resource group if it doesn't exist
az group create --name $RESOURCE_GROUP_NAME --location $LOCATION

# Create the Virtual Machine
az vm create `
  --resource-group $RESOURCE_GROUP_NAME `
  --name $VM_NAME `
  --image Ubuntu2204 `
  --admin-username $ADMIN_USERNAME `
  --admin-password $ADMIN_PASSWORD `
  --size $VM_SIZE `
  --location $LOCATION `
  --public-ip-sku Standard `
  --output json

```

  2.2. Run the PowerShell Script
Set PowerShell Execution Policy (One-Time Setup): If you haven't done this before, open PowerShell as Administrator and run:

 ``` Set-ExecutionPolicy RemoteSigned -Scope CurrentUser ```

Type Y and press Enter to confirm. You only need to do this once per user account.

Execute the script: Open a regular PowerShell terminal (you don't need administrator privileges for this step).

Navigate to the directory where you saved Virtual-Machine-AZ-Script.ps1.

Execute the script using the dot-sourcing operator:

 ``` .\Virtual-Machine-AZ-Script.ps1 ```

<img src="https://github.com/Siyal2/AetherForge/blob/1a0069d8d19072ab738aab9ece1c7ec3d9a63e10/Resources/resource-screenshots/scritp-exec.png" width="600" alt="image alt">
 

The script will display progress messages and, upon successful completion, will output the Public IP Address of your new VM. Make a note of this IP.

### 3. Connect to the Virtual Machine (VM) via SSH
Once the VM is created and you have its Public IP Address, you can connect to it securely using SSH.

Open your terminal (PowerShell, Command Prompt, Git Bash, or Linux/macOS terminal).

Execute the SSH command:

 ```
ssh aetherforge@<YOUR_VM_PUBLIC_IP> ```

In my case the public IP was " 172.212.191.16 "

Replace <YOUR_VM_PUBLIC_IP> with the actual IP address you noted from the script's output.

Example: If your public IP was 172.212.191.16 , the command would be: ssh aetherforge@172.212.191.16

First-time connection prompt: If it's your first time connecting to this VM, you might see a message like:

```

```
The authenticity of host '<YOUR_VM_PUBLIC_IP>' can't be established.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```
Type yes and press Enter to continue.

Enter the password: When prompted for the password, enter: ************

You are now successfully logged into your Ubuntu VM!

### 4. Verify Your User on the VM
Once connected via SSH, you can verify which user you are logged in as using the whoami command.

``` whoami ```

This command should output:

aetherforge

This confirms that you have successfully connected to the VM as the aetherforge user.


<img src="https://github.com/Siyal2/AetherForge/blob/1a0069d8d19072ab738aab9ece1c7ec3d9a63e10/Resources/resource-screenshots/whoami.png" width="600" alt="image alt">

