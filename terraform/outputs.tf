output "public_ip" {
  value = azurerm_public_ip.pip.ip_address
  description = "The public IP of the VM"
}

output "ssh_command" {
  value = "ssh ${var.admin_username}@${azurerm_public_ip.pip.ip_address}"
  description = "Command to SSH into the VM"
}