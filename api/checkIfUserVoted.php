<?php
include "conn.php";

  $id = $_REQUEST['userId'];
  $sql = "SELECT * FROM votes WHERE voter=$id";
  $result = $conn->query($sql);
  if($result->num_rows>0){
    echo "true";
  }else{
    echo "false";
  }

 ?>
