## Configurar storage para o banco na maquina local (BIND)

docker run -e MYSQL_ROOT_PASSWORD=Senha123 --name mysql -d -p 3306:3306 --volume=c:/data/mysql:/var/lib/mysql mysql


## Comando para realizar BIND de SO

src = pasta no SO              dst = pasta dentro do docker

docker run -dti --mount type=bind,src=c:/data/debian,dst=/data debian


## Modo somente leitura
docker run -dti --mount type=bind,src=c:/data/debian,dst=/data,ro debian
