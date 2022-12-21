# Registrar deployment

```
kubectl apply -f deploy1.0.yml --record
```

# Checar histórico

```
kubectl rollout history deployment nomeDoDeploy
```

# Voltar deployment anterior

```
kubectl rollout undo deployment nomeDoDeploy
```

# Voltar deployment específico

```
kubectl rollout undo deployment nomeDoDeploy --to-revision=1
```
