# Baixar PHP com APACHE
docker pull php:7.4-apache

# Configurar
docker run --name php -d -p 8080:80 --volume=c:/data/php:/var/www/html php:7.4-apache