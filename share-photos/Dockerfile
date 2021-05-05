FROM php:7.4.1-fpm

COPY install-composer.sh /
RUN apt-get update \
&& apt-get install -y wget git unzip libpq-dev \
&& : 'install node.js' \
&& curl -sL https://deb.nodesource.com/setup_12.x | bash - \
&& apt-get install -y nodejs \
&& : 'install php extensions' \
&& docker-php-ext-install -j$(nproc) pdo_pgsql \
&& : 'install composer' \
&& chmod 755 /install-composer.sh \
&& /install-composer.sh \
&& mv composer.phar /usr/local/bin/composer

WORKDIR /var/www/html/app
