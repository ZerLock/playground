FROM golang:1.18-alpine

WORKDIR .

COPY go.mod .
COPY go.sum .

ENV GOPATH=""

RUN go mod download

COPY . .

RUN go build backend

EXPOSE 3000

ENV PORT 3000

CMD ["./backend"]
