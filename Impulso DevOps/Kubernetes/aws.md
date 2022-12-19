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

# Criar node groups
- compute
- add node group
- nomear = cluster-node-group-1
## criar role
    - ec2
    - selecionar regras: 
        - eks cni
        - eks worker
        - ec2 registry container read only
    - role name = eks-node-role
    - create

- next
- selecionar instance type
- selecionar qtde de nós

# Checar nodes
kubectl get nodes --watch