<?php
//Sluzi za update sifre!
//Za parametre uzima password i code
include "conn.php";
ob_start();
require 'vendor/autoload.php';

  if(isset($_POST['update'])){
    $code = $_POST['code'];
    $pass = $_POST['password'];
    $pass = md5($pass);

    $sql = "SELECT * FROM users WHERE code='$code'";
    $result = $conn->query($sql);
    if($result->num_rows>0){
      while($row = $result->fetch_assoc()){
        $email = $row["mail"];
      }
      $sql = "UPDATE users SET password='$pass' WHERE email='$email'";
      $result = $conn->query($sql);
      // Sifra je promenjena
      echo "true";
    }else{
      // Korisnik sa tim kodom ne postoji!
      echo "false";
    }
  }
 ?>
