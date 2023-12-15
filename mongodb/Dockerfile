FROM ubuntu:22.04

RUN apt update -y
RUN apt install curl
RUN curl -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
RUN apt-key list
RUN echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
RUN apt update
RUN apt installl mongodb-org -y
RUN systemctl start mongod.service
CMD ["/bin/bash"]
