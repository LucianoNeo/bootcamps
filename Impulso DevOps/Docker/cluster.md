# Cluster na AWS

## Criar um VPC (selecionar local)
- Dar nome
- Criar faixa de IP ex: 172.31.0.0/24

## Criar Subrede
- Selecionar a VPC
- Dar nome
- selecionar zona
- definir faixa de ip

## Criar gateway de internet
- dar nome
- copiar ID do gateway
- associar a rede

## Criar tabela de roteamento
- clicar no ID da rede
- editar rotas
- adicionar rota
- selecionar de todos  0.0.0.0/0 para gateway (id copiado)

## Criar instancia EC2
- criar X instancias
- Selecionar rede e subrede criada anteriormente
- Ativar ip publico
- definir nome do grupo de segurança
- Dados avançados
- Dados de usuario e colar o seguinte script para instalação do docker em todas as instancias
```
#!/bin/bash

echo "Instalando o Docker......."

apt-get update -y
apt-get install ca-certificates curl gnupg lsb-release -y
mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null

apt-get update -y
apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin -y

```

## Selecionar nó gerenciador
- pegar ip publico
- conectar via putty utilizando chave PPK
- logar como root
```
sudo su
```
- trocar nome da maquina
```
hostnamectl hostname aws1
```
- inicializar nó gerenciador
```
docker swarm init
```
- copiar comando docker swarm join e abrir outra instancia para configuração


## Liberar porta no grupo de segurança
- adicionar inbound rule
- custom tcp
- porta 2377
- configurar faixa de rede

## Configurando instancia
- trocar nome da maquina
```
hostnamectl hostname aws2
```
- colar comando copiado para adicionar worker

# Listar nós adicionados ao cluster (na maquina gerenciadora)
```
docker node ls
```