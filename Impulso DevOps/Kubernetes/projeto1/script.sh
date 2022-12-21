#!/bin/bash

echo "Criando imagens..."

docker build -t neoscancwb/projeto-backend:1.0 backend/.
docker build -t neoscancwb/projeto-database:1.0 database/.

echo "Enviando imagens para o Docker Hub..."
docker push neoscancwb/projeto-backend:1.0
docker push neoscancwb/projeto-database:1.0

echo "Criando servicos no cluster..."

kubectl apply -f ./services.yml

echo "Realizando deployments..."

kubectl apply -f ./deployments.yml