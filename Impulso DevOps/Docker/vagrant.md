# Criar vms automaticamente com IAAC
- Baixar em https://vagrantup.com

- Rodar comando 
```
vagrant init
```

- Editar arquivo vagrantfile
```
config.vm.box = "bento/ubuntu-22.04"
config.vm.network "public_network"
config.vm.provision "shell", path:"instalar-docker.sh"
```

- Criar script para instalação do docker
```
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

- Inicializar vagrant
```
vagrant up
```

- Abrir terminal da VM com vagrant
```
vagrant ssh
```
usuario e senha: <br>
vagrant

- Apagar vm
```
vagrant destroy -f
```