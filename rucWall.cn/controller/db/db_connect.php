<?php
header('Content-Type:text/html;charset=utf8');

$servername = "localhost";
$username = "hacker";
$password = "123456";
$database = "newWall";
$conn = new mysqli($servername, $username, $password, $database);