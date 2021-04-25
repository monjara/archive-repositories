FROM golang:latest

ENV $APP_PATH = /app

WORKDIR $APP_PATH

RUN go get github.com/gin-gonic/gin
