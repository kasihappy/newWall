<?php
header('Content-Type:text/html;charset=utf8');
$servername = "localhost";
$username = "hacker";
$password = "123456";
$database = "newWall";
$conn = new mysqli('localhost', 'hacker', '123456', 'rucwall');
if ($conn->connect_error){
    die('connection error:'.$conn->connect_error);
}