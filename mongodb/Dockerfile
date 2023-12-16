FROM ubuntu:20.04

RUN apt update -y
RUN apt install curl gnupg2 -y
RUN curl -fsSL https://www.mongodb.org/static/pgp/server-4.2.asc | apt-key add -
RUN apt-key list
RUN echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-4.2.list
RUN apt-get update
RUN apt-get install mongodb-org -y
#RUN systemctl start mongod.service
#CMD ["echo 'started'"]
# Create a data directory
#RUN mkdir -p /data/db

# Expose the MongoDB port
EXPOSE 27017 28017
COPY run.sh .
RUN chmod +x ./run.sh
ENTRYPOINT ["./run.sh"]
CMD ["mongod", "--bind_ip", "0.0.0.0"]

# Start MongoDB in the foreground
#CMD ["mongod", "--bind_ip", "0.0.0.0"]
#CMD ["bash"]
