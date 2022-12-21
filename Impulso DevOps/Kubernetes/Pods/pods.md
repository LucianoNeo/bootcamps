# Verificar pods ativos
```
kubectl get pods
```

# Subir pod
```
kubectl apply -f simple-pod.yml
```

# Excluir pod
```
kubectl delete pod app-html
```

## Pegar infos dos pods
```
kubectl get pod -o wide
```

## Caracteristicas do node
```
kubectl describe node minikube
```

# Criar réplicas
```
kubectl apply -f simple-deployment.yml
```

## Aumentar qtde de replicas
```
kubectl scale deployment app-html-deployment --replicas=10
```

# Expor deployment (load balancer)
```
kubectl expose deployment app-html-deployment --type=LoadBalancer --name=app=html --port=80
```
# Executar bash dentro do POD
kubectl exec --stdin --tty myapp-php -- /bin/bash

# Copiar arquivos para um POD
kubectl cp index.html id-do-pod:/usr/local/apache2/htdocs/