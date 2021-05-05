# -*- mode: ruby -*-
# # vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "centos/7"
  config.vm.define "ansible_lamp" do |c|
    c.vbguest.installer_hooks[:before_install] = ["yum install -y epel-release", "sleep 1"]
    c.vbguest.installer_options = { allow_kernel_upgrade: true , enablerepo: true }
  end
  config.vm.network "private_network", ip: "192.168.33.10"
  config.vm.synced_folder ".", "/vagrant", mount_options: ["dmode=777,fmode=777"], type: "virtualbox"
  config.vm.provision "ansible_local" do |ansible|
    ansible.playbook = "ansible/playbook.yml"
  end
end
