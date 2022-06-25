# Facilita a geração das queries e definição de tipagem com o graphcms

npm i @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo -D

npm i @graphql-codegen/cli -D

# CRIAR ARQUIVO DE CONFIG

codegen.yml
```
schema: https://api-sa-east-1.graphcms.com/v2/cl4ng6j1e03h601z007e6di37/master

documents: './src/**/*.graphql'

generates:
    ./src/generated.ts:
        plugins:
            - typescript
            - typescript-operations
            - typescript-react-apollo
        config:
            reactAppoloVersion: 3
            withHooks: true
            withHOC: false
            withComponent: false
            
```

# Criar pastas 
src
----graphql
-------mutation
- cria arquivos com as mutations aqui dentro
-------queries
- cria arquivos com as queries aqui dentro


# CRIAR SCRIPT NO package.json
"codegen": "graphql-codegen"
