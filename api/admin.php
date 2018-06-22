<?php

include "conn.php";

$arr = array();

  $sql = "SELECT * FROM users";
  $result = $conn->query($sql);

 if($result->num_rows>0){
   while($row = $result->fetch_assoc()){
    $arr[] = $row;      
   }
 
 }else{
   echo "Baza nema korisnika";
 }

echo $json_info = json_encode($arr);


 ?>