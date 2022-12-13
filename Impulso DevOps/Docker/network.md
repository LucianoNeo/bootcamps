# Inspecionar redes do container
docker network inspect

# Criar rede
docker network create nome-da-rede

## Criar container na rede especifica
docker run -dti --name Ubuntu --network nome-da-rede ubuntu