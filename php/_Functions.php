<?php

$dotenv = parse_ini_file(__DIR__ . '/../.env');

$mysqli = new mysqli(
    $dotenv['DB_HOST'],
    $dotenv['DB_USER'],
    $dotenv['DB_PASSWORD'],
    $dotenv['DB_NAME']
);

if(mysqli_connect_errno()){
echo "Fallo de conexion: " .mysqli_connect_error();
die();
}






?>
