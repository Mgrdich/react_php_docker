<?php

$servername = "mysql-db";
$username = "mysql-user";
$password = "mysql-password";
$db = "mysql-db";

    try {
       $conn = new PDO("mysql:host=$servername;dbname=$db;port=3306", $username, $password);
       // set the PDO error mode to exception
       $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
       echo "Connected successfully";
       }
    catch(PDOException $e)
       {
       echo "Connection failed: " . $e->getMessage();
       }

?>
