# Define variables
$RESOURCE_GROUP_NAME="AetherForge"
$VM_NAME="AetherForge"
$LOCATION="centralus"
$ADMIN_USERNAME="aetherforge"
$ADMIN_PASSWORD="Pineapple@123"
$VM_SIZE="Standard_D2as_v4"

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