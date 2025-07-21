### AetherForge: Cloud & DevOps Immersion Lab
AetherForge is a dedicated repository designed to serve as a practical, hands-on laboratory for implementing industry-standard cloud architectures and DevOps methodologies. This project aims to replicate real-world corporate tasks, providing a comprehensive environment for learning, experimenting, and documenting best practices in cloud engineering and continuous delivery.

## 🚀 Project Overview
This repository is a central hub for:

Research & Documentation: In-depth exploration and detailed documentation of various cloud services, DevOps tools, and architectural patterns.

Practical Guides: Step-by-step guides and tutorials for setting up, configuring, and managing cloud infrastructure and applications.

Industry-Standard Practices: Implementation of agile methodologies, infrastructure as code (IaC), CI/CD pipelines, monitoring, and security best practices.

Skill Development: A platform for honing skills in cloud platforms (e.g., Azure), Linux administration, networking, web server management (e.g., NGINX), and scripting.

Whether you're a student, a professional looking to upskill, or simply curious about cloud and DevOps, AetherForge offers a structured approach to gaining practical experience.

## 🎯 Goals
To build and manage cloud infrastructure mirroring corporate environments.

To implement robust CI/CD pipelines for automated deployments.

To explore and integrate various DevOps tools and practices.

To document every step, decision, and solution comprehensively.

To create reusable scripts and templates for common cloud and DevOps tasks.

## 📁 Repository Structure
To maintain organization and clarity, this repository follows a clear and logical structure:

.
├── README.md                           # This file, providing an overview of the project.
├── Nginx-Setup-for-web-page/           # Contains documentation and scripts for NGINX setup and deployment.
│   ├── Nginx-Installation.md           # Guide for installing and updating NGINX on Ubuntu.
│   └── Nginx-deployment-output.md      # Details on NGINX deployment and expected outputs.
├── Resources/                          # Houses all documentation, screenshots, and relevant files for Azure resources.
│   ├── Resource-Group.md               # Documentation for the initial Azure Resource Group setup.
│   ├── Virtual-Machine/                # Files related to Virtual Machine setup and management.
│   │   ├── Virtual-Machine.md          # Documentation for Azure Virtual Machine configuration.
│   │   └── Virtual-Machine-AZ-Script.ps1 # PowerShell script for Azure VM automation.
│   └── resource-screenshots/           # Screenshots for visual reference of configurations and deployments.
│       ├── 1.jpg                       # Screenshot related to Resource Group setup.
│       ├── 2.jpg                       # Another screenshot for Resource Group setup/justification.
│       ├── 3.png                       # Generic screenshot example.
│       ├── azlogin.png                 # Screenshot of Azure login.
│       ├── nginx-installed.png         # Screenshot confirming NGINX installation.
│       ├── nginx-running.png           # Screenshot confirming NGINX service is running.
│       ├── script-exec.png             # Screenshot of script execution.
│       ├── vm-created.png              # Screenshot of VM creation confirmation.
│       └── whoami.png                  # Screenshot of 'whoami' command output.
└── Web-page/                           # Contains the sample web page files for deployment.
    ├── index.html                      # The main HTML file for the web page.
    ├── script.js                       # JavaScript file for the web page functionality.
    └── style.css                       # CSS file for styling the web page.

## ☁️ Initial Setup & Core Configuration (Azure)
Our journey begins with laying the foundational infrastructure within Azure. This section details the initial resource group configuration.

Resource Group: AetherForge
All resources for this project will be logically organized within a dedicated Azure Resource Group named AetherForge.

Name: AetherForge

Subscription: Visual Studio Enterprise Subscription

Region: (US) Central US

Region Justification: The choice of (US) Central US as the primary region for the AetherForge resource group is deliberate. While the project is maintained from India, certain advanced Azure services and features, which are planned for future research and implementation within this project, are currently more comprehensively available or exclusively offered in the Central US region. This strategic decision ensures access to the full spectrum of services required to explore cutting-edge cloud architectures and maintain flexibility for future expansions.

For detailed steps and screenshots, refer to the Resource-Group.md file.

## 🌐 Web Server Setup (NGINX)
This section covers the installation, configuration, and deployment of a web page using NGINX on an Ubuntu server.

Updating NGINX on Ubuntu
This document outlines the steps to update your NGINX installation on Ubuntu using the official NGINX repository. This method ensures you receive the latest stable or mainline NGINX packages directly from NGINX.org, often offering more up-to-date features and security patches compared to the default Ubuntu repositories.

For detailed instructions, refer to the Nginx-Installation.md file.

## 🤝 Contributing
This project is a personal learning and documentation endeavor. While direct contributions in the form of pull requests are not actively sought for new features, suggestions and feedback are always welcome! If you find any issues or have ideas for improvement, please open an issue.

## 📄 License
This project is open-sourced under the MIT License.

Forging excellence in the digital sky.
