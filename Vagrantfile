# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.define "panda-server" do |c|
    c.box = "centos/7"
    c.vbguest.installer_options = { allow_kernel_upgrade: true }
    c.network "private_network", ip: "192.168.33.10"
    c.synced_folder ".", "/vagrant", mount_options: ["dmode=777,fmode=777"], type: "virtualbox"
    c.provision "ansible_local" do |ansible|
      ansible.playbook = "ansible/playbook.yml"
    end
  end
end
