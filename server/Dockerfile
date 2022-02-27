FROM php:7.1-apache

COPY --from=composer:2.2.6 /usr/bin/composer /usr/local/bin/composer

RUN apt update \
        && apt install -y \
            g++ \
            libicu-dev \
            libpq-dev \
            libzip-dev \
            zip \
            zlib1g-dev \
        && docker-php-ext-install \
            sockets \
            intl \
            opcache \
            pdo \
            pdo_mysql

WORKDIR /var/www/html
