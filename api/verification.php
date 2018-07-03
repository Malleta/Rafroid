<?php

  include "conn.php";

if(isset($_GET['id']) && isset($_GET['code'])){
	$id=$_GET['id'];
	$code=$_GET['code'];

  $sql = "SELECT * FROM users WHERE code='$code' and id='$id'";
  $result = $conn->query($sql);
  if($result->num_rows>0){
    while($row = $result->fetch_assoc()){
      $email = $row["email"];
      $pass = $row["password"];
    }
    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($sql);
    if($result->num_rows>0){
      $sql = "UPDATE users SET valid=1 WHERE email='$email' and password='$pass'";
      $result = $conn->query($sql);
      $sql = "SELECT * FROM users WHERE email='$email'";
      $result = $conn->query($sql);
      if($result->num_rows>0){
        while($row = $result->fetch_assoc()){
          $id = $row["id"];
        }
      }
      echo http_response_code(200);
    }else{
      //Nalog sa tim email-om ne postoji
      echo http_response_code(400);
    }
  }else{
    //Nalog sa prosledjenim id-om i kodom ne postoji
    echo http_response_code(400);
  }
}


 ?>
