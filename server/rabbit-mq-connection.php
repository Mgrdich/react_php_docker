<?php



$rabbitmq_host = "rabbit-mq";
$rabbitmq_port = 5672;
/* $rabbitmq_user = 'rabbitmq_user'; */
/* $rabbitmq_pass = 'rabbitmq_pass'; */
$rabbitmq_user = 'guest';
$rabbitmq_pass = 'guest';
$rabbitmq_vhost = '/';

use PhpAmqpLib\Connection\AMQPStreamConnection;
use PhpAmqpLib\Connection\AMQPSSLConnection;
use PhpAmqpLib\Message\AMQPMessage;
try {
    $connection = new AMQPSSLConnection($rabbitmq_host ,$rabbitmq_port, $rabbitmq_user, $rabbitmq_pass, $rabbitmq_vhost);

    $channel = $connection->channel();

    if(!empty($channel)) {
        echo "RabbitMq Connected Successfully";
    }
} catch (Exception $e) {
    echo $e->getMessage();
}
