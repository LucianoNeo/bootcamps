# Instalar e configurar AWS CLI
baixar e instalar a cli

## IAM
- My security credentials
- criar credencial
- baixar csv

```
aws configure
```
- colar credenciais

# Criando cluster
- create 
- name kub-lab

criar service role
- IAM
- roles
- create role
- aws service
- eks
- eks cluster
- dar nome
- create

- selecionar role
- selecionar VPC (default)
- configurar logs
- create


# Checar status cluster
```
aws eks --region sa-east-1 describe-cluster --name kub-lab --query cluster.status
```

