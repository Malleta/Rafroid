<?php

include "conn.php";

$id=$_REQUEST['userId'];

$arr = array();

  $sql = "SELECT * FROM comments WHERE `user_id` = $id";
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