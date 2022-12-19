# Iniciar cluster
- Kubernetes engine (GKE)
- Criar
- Standard - configurar
    - nome = meu-cluster
    - zona
    - escolher nós

- criar

## Instalar CLI GCloud
```
Install-Module GoogleCloud
Set-ExecutionPolicy RemoteSigned
gcloud components install gke-gloud-auth-plugin
```

## Logar
```
gcloud login
```

## Conectar ao cluster
```
gcloud container clusters get-credentials meu-cluster --zone us-central1-c --project nomeDoProjeto
```

kubectl get nodes