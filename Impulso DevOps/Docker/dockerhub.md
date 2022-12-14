# Gerar imagem para o hub
docker login

docker build . -t neoscancwb/my-go-app:1.0

# Subir imagem
docker push neoscancwb/my-go-app:1.0