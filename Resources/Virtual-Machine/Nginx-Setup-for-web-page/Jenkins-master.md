### CI/CD Platform: Jenkins

For our Continuous Integration/Continuous Delivery (CI/CD) needs, we are setting up a Jenkins master-slave architecture. This section details the initial configuration of the Jenkins Master virtual machine.

---

#### Jenkins Master VM Configuration

The Jenkins Master VM is provisioned within the existing `AetherForge` resource group to centralize management, billing, and network configurations.

| Property                  | Value                                  |
| :------------------------ | :------------------------------------- |
| **Resource Group** | `AetherForge`                          |                          |
| **Location** | `Central US (Zone 1)`                  ||
| **Operating System** | `Linux (Ubuntu 24.04)`                 |
| **VM Size** | `Standard D2as v4 (2 vcpus, 8 GiB memory)` |
| **Public IP Address** | `172.202.113.109`                      |
| **Virtual Network/Subnet**| `AetherForgeVNET/AetherForgeSubnet`    |
| **Computer Name** | `Jenkins-master`                       |
| **VM Generation** | `V2`                                   |



<img src="https://github.com/Siyal2/AetherForge/blob/803a57597eb593fd80f52144a47e21b83936870f/Resources/resource-screenshots/master-jenkins.png" width="600" alt="image alt">


**Justification for Resource Group Re-use:**
Utilizing the `AetherForge` resource group for the Jenkins VM, along with other project resources, streamlines several aspects:
* **Centralized Management:** All related Azure resources are grouped together, simplifying administration and monitoring.
* **Unified Billing:** Costs associated with the entire project infrastructure are consolidated under one resource group.
* **Network Integration:** Resources can easily reside within the same Virtual Network (`AetherForgeVNET`) and Subnet (`AetherForgeSubnet`), facilitating secure and efficient communication without complex peering.
* **Consistent Policies & Tagging:** Applying Azure policies, access controls (IAM), and tags across the resource group ensures consistency and adherence to governance standards.

**Screenshot: Jenkins Master VM Overview in Azure Portal**

*(You would replace this placeholder with an actual screenshot of the Jenkins Master VM's overview blade in the Azure Portal, similar to how you added the Resource Group creation screenshot.)*
<p align="center">
  <img src="https://github.com/Siyal2/AetherForge/blob/803a57597eb593fd80f52144a47e21b83936870f/Resources/resource-screenshots/connection-sucess.png" width="750" alt="Jenkins Master VM Overview in Azure Portal">
</p>

# Jenkins Master VM Setup Guide

This guide outlines the complete process to set up a Jenkins Master virtual machine, from Java installation to accessing the Jenkins web UI.

---

**Follow these steps sequentially on your virtual machine:**

1.  **Install Java Development Kit (JDK):** Jenkins runs on Java, so the first step is to install a compatible Java Runtime Environment (JRE). We will use OpenJDK 21.
    First, update your package list, then install `fontconfig` and `openjdk-21-jre`:
    ```bash
    sudo apt update
    sudo apt install fontconfig openjdk-21-jre
    ```
    After installation, verify the Java version by running:
    ```bash
    java -version
    ```
    You should see an output similar to:
    ```
    openjdk version "21.0.3" 2024-04-16
    OpenJDK Runtime Environment (build 21.0.3+11-Debian-2)
    OpenJDK 64-Bit Server VM (build 21.0.3+11-Debian-2, mixed mode, sharing)
    ```
    *(Note: Your actual version might be 21.0.8 or later, indicating a more recent patch version installed.)*

2.  **Install Jenkins Server:** To install Jenkins, we will use its official Debian repository to ensure you get the latest stable releases.
    Begin by importing the Jenkins GPG key:
    ```bash
    sudo wget -O /etc/apt/keyrings/jenkins-keyring.asc \
      [https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key](https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key)
    ```
    Next, add the Jenkins repository to your APT sources:
    ```bash
    echo "deb [signed-by=/etc/apt/keyrings/jenkins-keyring.asc]" \
      [https://pkg.jenkins.io/debian-stable](https://pkg.jenkins.io/debian-stable) binary/ | sudo tee \
      /etc/apt/sources.list.d/jenkins.list > /dev/null
    ```
    Then, update your APT package index to include the new repository:
    ```bash
    sudo apt-get update
    ```
    Finally, install Jenkins:
    ```bash
    sudo apt-get install jenkins
    ```

3.  **Verify Jenkins and Java Version (Post-Installation) and Service Status:**
    After installing Jenkins, you can re-verify both Java and Jenkins versions:
    ```bash
    java -version
    jenkins --version
    ```
    Expected output might look like:
    ```
    openjdk version "21.0.8" 2025-07-15
    OpenJDK Runtime Environment (build 21.0.8+9-Ubuntu-0ubuntu124.04.1)
    OpenJDK 64-Bit Server VM (build 21.0.8+9-Ubuntu-0ubuntu124.04.1, mixed mode, sharing)
    2.516.1
    ```
    Confirm that the Jenkins service is active and running:
    ```bash
    systemctl status jenkins
    ```
    You should see `active (running)` in the output.

4.  **Access Jenkins Web UI:** Jenkins runs by default on port 8080. To access the Jenkins web interface from your local machine, you need to ensure network access is allowed and then navigate to the VM's public IP address with the specified port.
    **Configure Azure Network Security Group (NSG) for Port 8080:** Navigate to your Jenkins Master VM's networking settings in the Azure Portal. Add an inbound port rule to allow TCP traffic on port `8080` from your desired source (e.g., "Any" for initial testing, or specific IP addresses for security).
    **Access Jenkins in Browser:** Open your web browser and enter the public IP address of your Jenkins Master VM followed by port `8080`.
    **Example:** `http://172.202.113.109:8080`
    **Unlock Jenkins:** Upon first access, Jenkins will prompt you to unlock it. Retrieve the initial administrator password from the server using:
    ```bash
    sudo cat /var/lib/jenkins/secrets/initialAdminPassword
    ```
    Copy the alphanumeric password displayed in the terminal and paste it into the Jenkins unlock screen. You can often also find this password in the first few lines of the `systemctl status jenkins` output.
    Follow the on-screen instructions to complete the setup (install recommended plugins, create the first admin user).




### Successfully Accessed Jenkins Web UI

Congratulations! You should now be able to access the Jenkins web interface. The first screen you encounter will be the "Unlock Jenkins" page, prompting you for the initial administrator password.

![Screenshot of Jenkins Unlock Page](path/to/your/unlock_jenkins_screenshot.png) 
**(Replace `path/to/your/unlock_jenkins_screenshot.png` with the actual path or filename of your screenshot if you host it in your GitHub repo.)*

Proceed with unlocking Jenkins as described in the previous steps.

<img src="https://github.com/Siyal2/AetherForge/blob/803a57597eb593fd80f52144a47e21b83936870f/Resources/resource-screenshots/finalll.png" width="600" alt="image alt">
