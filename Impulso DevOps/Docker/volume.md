# Criar volume
docker volume create data-debian

## Montar volume criado
docker run -dti --name debian --mount type=volume,src=data-debian,dst=/data debian

## Excluir todos os volumes
docker volume prune