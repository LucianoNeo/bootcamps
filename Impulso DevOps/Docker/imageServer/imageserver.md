# Em um servidor linux exclusivo para imagens
docker run -d -p 5000:5000 --restart=always --name registry registry:2

## Tagear imagem para o servidor de imagens
docker image tag idDoContainer ipdoservidor:5000/my-go-app:1.0

## Configurar segurança do servidor
nano /etc/docker/daemon.json
```
{ "insecure-registries":["ipDoServidor:5000"] }
```
systemctl restart docker

## Subir imagem para o servidor de imagens
docker push ipdoservidor:5000/my-go-app:1.0


## Buscar imagem DO servidor
docker pull ipdoservidor:5000/my-go-app:1.0