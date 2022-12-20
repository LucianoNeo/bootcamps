# Função
Acessar um pod específico utilizando uma porta dedicada (especificada no arquivo YML)

## Criar pod
kubectl apply -f pod.yml

## Liberar porta no firewall (GCP cli)
gcloud compute firewall-rules create my-app-php --allow tcp:32081
