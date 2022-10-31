# CRIAR ERD
npm i prisma-erd-generator @mermaid-js/mermaid-cli -D

## Criar ERD no schema
```
generator erd {
  provider = "prisma-erd-generator"
}
```

## gERAR ERD
npx prisma generate
