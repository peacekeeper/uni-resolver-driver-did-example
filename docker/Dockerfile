# Dockerfile for exampleorg/uni-resolver-driver-did-example

FROM node:10
MAINTAINER Markus Sabadello <markus@danubetech.com>

# build uni-resolver-driver-did-example

WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .

# variables

ENV uniresolver_driver_did_example_exampleSetting=exampleSetting

# done

EXPOSE 8080

CMD [ "node", "index.js" ]
