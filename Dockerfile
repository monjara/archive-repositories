FROM ruby:2.6.8

RUN apt-get update -qq && \
  apt-get install -y build-essential nodejs libmariadb-dev

RUN mkdir /app
ENV APP_ROOT /app
WORKDIR ${APP_ROOT}

ADD ./Gemfile $APP_ROOT/Gemfile
ADD ./Gemfile.lock $APP_ROOT/Gemfile.lock

RUN gem install mysql2 -v '0.5.2' --source 'https://rubygems.org/' -- --with-cppflags=-I/usr/local/opt/openssl/include --with-ldflags=-L/usr/local/opt/openssl/lib
RUN bundle install
ADD . $APP_ROOT