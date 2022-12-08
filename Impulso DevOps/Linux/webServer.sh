#!/bin/bash

echo '### Atualizando Servidor ###'
apt update -y
apt upgrade -y

echo '### Instalando Servidor Apache ###'
apt install apache2 -y

echo '### Instalando Unzip ###'
apt install unzip -y

echo '### Baixando projeto ###'
cd /tmp
rm *.*
wget 'https://github.com/denilsonbonatti/linux-site-dio/archive/refs/heads/main.zip'
unzip main.zip
cd linux-site-dio-main 
cp -R * /var/www/html

echo '### FIM ###'