# Verificar consumo do container
docker stats php

# LImitar memoria e cpu
docker update php -m 128M --cpus 0.2