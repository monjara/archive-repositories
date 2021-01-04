# ansible-lamp
## 概要
* vagrantを起動するだけでLAMP環境を構築する。 
* ansible-lamp/appを共有フォルダとする。 
* centos7 php7.2 mysql5.7
* 192.168.33.10/appにてphpinfoを表示する。
## 利用方法
* システム要件
* 利用手順
### システム要件
* Vagrant
* vagrant-vbguest
* VirtualBox
インストール手順はこちら(MacOS Homebrew）
### 利用手順
リポジトリをクローン
```
git clone git@github.com:monjara/ansible-lamp.git
```
Vagrant 起動
```
vagrant up
```
[192.168.33.10/app](http://192.168.33.10/app)にアクセス
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

