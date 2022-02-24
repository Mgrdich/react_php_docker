# React Php Project Setup With Docker

* Project include a React Project with its own container
* PHP project with its container
* MySql and RabbitMq containers
* All containers are linked through docker-compose


### To Start the Server code
* Run `docker-compose up` in order to run docker compose and link mysql RabbitMq and php-apache containers


### To Start the Client Code
* Go to client folder `cd client`
* Run `docker build -t react-client .`
* Run `docker run -P react-client`
