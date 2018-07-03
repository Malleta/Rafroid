<?php
include "conn.php";

$id=$_REQUEST['userId'];

$arr = array();

  $sql = "SELECT apps.name FROM votes
			INNER join apps on apps.id = votes.app
			WHERE `voter` = '$id'";
  $result = $conn->query($sql);

 if($result->num_rows>0){
   while($row = $result->fetch_assoc()){
    $arr[] = $row;      
   }
 
 }else{
   echo "false";
 }

echo $json_info = json_encode($arr);
 ?>