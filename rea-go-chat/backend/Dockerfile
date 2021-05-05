FROM golang:1.16.3-alpine3.13

RUN mkdir /app
ADD . /app
WORKDIR /app

RUN apk add bash ca-certificates git gcc g++ libc-dev
RUN export GO111MODULE=on
RUN go mod download
RUN go build -o main ./main.go

CMD ["/app/main"]
