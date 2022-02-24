<?php

echo "RabbitMq connection";


$rabbitmq_host = "rabbit-mq";
$rabbitmq_port = 5671;
$rabbitmq_user = 'rabbitmq_user';
$rabbitmq_pass = 'rabbitmq_pass';

use PhpAmqpLib\Connection\AMQPStreamConnection;
use PhpAmqpLib\Connection\AMQPSSLConnection;
use PhpAmqpLib\Message\AMQPMessage;

$connection = new AMQPSSLConnection($rabbitmq_host ,$rabbitmq_port, $rabbitmq_user, $rabbitmq_pass, $vhost);

$channel = $connection->channel();

var_dump($channel);
