<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

require_once 'connection.php';

$first_name = $_POST["first_name"];
$last_name = $_POST["last_name"];
$email = $_POST["email"];
$home_city = $_POST["home_city"];

$query = "INSERT INTO `users` (`user_id`, `first_name`, `last_name`, `email`, `home_city`) VALUES (NULL, '$first_name', '$last_name', '$email', '$home_city')";

$result = mysqli_query($connection, $query);
if($result){
echo "record added";
}
else{
echo "error";
}
?>