
# Instalação
```
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.s
```

# Comandos

## Baixar imagem
docker pull nomeDaImagem

## Listar imagens
docker images

## Executar imagem
docker run nomeDaImagem

## Mostrar containers em execucao ou executados recentemente
docker ps -a

## Rodando terminal dentro do container ao subir container
docker run -it ubuntu

## Rodar container em modo background
docker run -dti ubuntu

## Abrir terminal em container rodando
docker exec -it IDDOCONTAINER /bin/bash


## Remover container
docker rm ID

## Remover imagem
docker rmi nomeDaImagem

## Nomear container
docker run -dti --name NOMEDOUBUNTU ubuntu

# Criar pastas dentro do container
docker exec ubuntu mkdir /destino

## Copiar arquivos para o container
docker cp NomeDoArquivo ubuntu:/destino

## Copiar arquivos DO container
docker cp ubuntu:/destino/arquivo arquivo

# TAGS
docker -dti ubuntu:20