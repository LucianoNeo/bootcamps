# Listar discos
fdisk -l
lsblk

# Criar partições
fdisk /dev/sdb

# Formatar
mkfs.ext4

# Montar disco
mount sdb /mnt/pastacriada

# Montar discos automaticamente
nano /etc/fstab

## Adicionar
```
/dev/sdb /pasta ext4 defaults 0 0
```