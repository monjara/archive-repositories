# ansible-lamp
## 概要
* vagrantを起動するだけでLAMP環境を構築する。 
* ansible-lamp/appを共有フォルダとする。 
* centos7 php7.2 mysql5.7
* 192.168.33.10にてphpinfoを表示する。
## 利用方法
* [システム要件](https://github.com/monjara/ansible-lamp#%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6)
* [利用手順](https://github.com/monjara/ansible-lamp#%E5%88%A9%E7%94%A8%E6%89%8B%E9%A0%86)
### システム要件
* Vagrant
* vagrant-vbguest
* VirtualBox
インストール手順は[こちら](https://github.com/monjara/ansible-lamp#%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E8%A6%81%E4%BB%B6%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E6%89%8B%E9%A0%86macos-homebrew)(MacOS Homebrew）
### 利用手順
リポジトリをクローン
```
git clone git@github.com:monjara/ansible-lamp.git
```
Vagrant 起動
```
vagrant up
```
[192.168.33.10](http://192.168.33.10)にアクセス
### システム要件インストール手順(MacOS Homebrew)
* Vagrant
```
brew install cask vagrant
```
* vagrant-vbguest
```
varant plugin install vagrant-vbguest
```
* VirtualBox
```
brew install cask virtualbox
```

