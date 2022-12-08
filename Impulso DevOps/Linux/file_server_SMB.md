# Instalação de servidor de arquivos
apt install samba -y

## Criar pasta a ser compartilhada
mkdir publica
chmod 777 publica

## Configurar o samba
Adicionar ao arquivo
nano /etc/samba/smb.conf
```
[publica]

path = /disco/publica
writable = yes
guest ok = yes
guest only = yes
```

## Reiniciar o samba
service smbd restart<br>
ou<br>
systemctl restart smbd

## Configurar inicialização automatica
systemctl enable smbd