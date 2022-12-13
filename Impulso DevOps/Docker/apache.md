# Mapear pasta para apache2(HTTPD)
docker run --name apache -d -p 80:80 --volume=c:/data/apache:/usr/local/apache2/htdocs httpd