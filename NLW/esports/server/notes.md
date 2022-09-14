# Instalar Typescript
``` npm i typescript -D```

## Criar config TS
``` npx tsc --init```

## Configurar tsconfig

```
"rootDir": "./src",  // pasta de trabalho padrao
"outDir": "./build", // pasta de export da build
"moduleResolution": "node", 
```

## Instalar types

```npm install @types/express -D```

## Instalar TSNODEDEV

```npm install ts-node-dev -D ``` // Já faz a transpilação e auto refresh do typescript

## Instalar ORM Prisma com SQLITE
``` npx prisma init --datasource-provider sqlite ```

## Gerar o banco
npx prisma migrate dev

## Gerar interface grafica
npx prisma studio

## Instalar o client do PRISMA
npm i @prisma/client

## Instalar CORS
npm i cors
npm i @types/cors -D