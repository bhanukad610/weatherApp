
<?php
 define ('DB_HOST', 'localhost');
 define ('DB_USER', 'id8371640_seeker');
 define ('DB_PASSWORD' , 'anchor000@96');
 define ('DB_NAME' , 'id8371640_weatherappdb');
 $connection = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
 if(mysqli_connect_errno()){
 die('Database connection failed' . mysqli_connect_errno());
 }
 else{
     echo "Connection successful";
 }
?>