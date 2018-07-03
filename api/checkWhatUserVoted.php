<?php

include "conn.php";

$id=$_REQUEST['userId'];

$arr = array();

  $sql = "SELECT * FROM votes WHERE voter = '$id'";
  $result = $conn->query($sql);

 if($result->num_rows>0){
   while($row = $result->fetch_assoc()){
    $app = $row['app'];
   }
   $sql2 = "SELECT * FROM apps WHERE id='$app'";
   $result2=$conn->query($sql2);
   if($result2->num_rows>0){
   	while($row2=$result2->fetch_assoc()){
   		$arr = $row2['name'];
   	}
   }
 }else{
   echo "Baza nema korisnika";
 }

echo $json_info = json_encode($arr);
 ?>