# Criar arquivo dockerfile

```
FROM ubuntu

RUN apt update && apt install -y python3 && apt clean

COPY app.py /opt/app.py

CMD python3 /opt/app.py
```

## Fazer build da imagem
docker build . -t nome-da-imagem

## Criar imagem com dockerfile
docker image build -t nome-da-imagem:1.0 .