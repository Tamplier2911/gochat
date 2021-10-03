# create base image derriving from node v16
FROM --platform=linux/amd64 node:16.3.0 AS base

# create stage dev stage derriving from base image
FROM base AS dev

# create working dir
RUN mkdir /gochat

# set working dir
WORKDIR /gochat

# copy everything from current dir to working dir
COPY . .

# install dependencies
RUN npm install

# start dev server
CMD ["npm", "run", "start"]