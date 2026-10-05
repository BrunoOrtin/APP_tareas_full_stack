FROM php:8.5-apache

RUN docker-php-ext-install pdo_mysql


COPY frontend /var/www/html
COPY backend /var/www/html/backend