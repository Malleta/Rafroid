<?php

include "conn.php";

$user_id= $_REQUEST['userId'];
$text= $_REQUEST['comment'];
$appid = $_REQUEST['appId'];

$sql = "INSERT INTO comments (`user_id`, `text`, `appid`) VALUES ('$user_id', '$text', '$appid')";

if($conn->query($sql)){
	echo 'true';
}else{
	echo mysqli_error($con);
}
?>
