# Usuarios

### Criar
```
user add usuario
```
-m cria pasta do usuario<br>
-c adiciona um comentario, ex: "Nome Completo"<br>
-p $(open ssl passwd -crypt Senha) adiciona senha<br>
-s escolhe o shell<br>
-e xx/xx/xx adiciona expiração ao usuario

### Adicionar senha apos criado
```
sudo passwd usuario
```

### chsh
```
chsh -s /bin/bash usuario
```
Adiciona o shell no usuario ja criado

## Excluir usuário
```
userdel -r -f usuario
```

## Alterar usuário
```
usermod usuario -s /bin bash (altera o bash)
```

### Expiração de senha
```
passwd usuario -e xx/xx/xx
```

### Listar usuarios do sistema
```
cat /etc/passwd
```

# Grupos

## Listar grupos
```
cat /etc/group
```

## Adicionar a um grupo(s)
```
usermod -G adm,sudo usuario
```
## Remover usuario de um grupo
```
gpasswd -d usuario grupo
```

## Criar um grupo
```
groupadd NOMEDOGRUPO
```

## Excluir grupo
```
groupdel NOMEDOGRUPO
```
