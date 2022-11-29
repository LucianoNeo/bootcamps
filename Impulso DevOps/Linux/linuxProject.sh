#!/bin/bash

echo '### Criando diretórios ###'
mkdir publico
mkdir adm
mkdir ven
mkdir sec

echo '### Criando grupos ###'
groupadd GRP_ADM
groupadd GRP_VEN
groupadd GRP_SEC


echo '### Criando usuários ###'

useradd carlos -m -s /bin/bash
useradd maria -m -s /bin/bash
useradd joao -m -s /bin/bash
useradd debora -m -s /bin/bash
useradd sebastiana -m -s /bin/bash
useradd roberto -m -s /bin/bash
useradd josefina -m -s /bin/bash
useradd amanda -m -s /bin/bash
useradd rogerio -m -s /bin/bash

echo '### Atribuindo usuários aos grupos ###'

usermod -G GRP_ADM carlos
usermod -G GRP_ADM maria
usermod -G GRP_ADM joao

usermod -G GRP_VEN debora
usermod -G GRP_VEN sebastiana
usermod -G GRP_VEN roberto

usermod -G GRP_SEC josefina
usermod -G GRP_SEC amanda
usermod -G GRP_SEC rogerio

echo '### Definindo permissões ###'
chmod 777 publico
chown root:GRP_ADM adm
chown root:GRP_VEN ven
chown root:GRP_SEC sec

chmod 770 adm
chmod 770 ven
chmod 770 sec 
