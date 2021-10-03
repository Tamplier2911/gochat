# create base image derriving from go v1.6
FROM --platform=linux/amd64 golang:1.16 AS base

# create stage dev stage derriving from base image
FROM base AS dev

# install air binaries for live reloading
RUN curl -sSfL https://raw.githubusercontent.com/cosmtrek/air/master/install.sh | sh -s -- -b $(go env GOPATH)/bin

# set working directory
WORKDIR /opt/app/api

# run air
CMD ["air"]
