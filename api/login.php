<?php

include "conn.php";
use \Firebase\JWT\JWT;
ob_start();
require 'vendor/autoload.php';

  $email = $_REQUEST['email'];
  $pass = md5($_REQUEST['password']);

  $sql = "SELECT * FROM users WHERE email='$email' and password='$pass'";
  $result = $conn->query($sql);
  if($result->num_rows>0){
    while($row = $result->fetch_assoc()){
      $id = $row['id'];
      $admin = $row['admin'];
      $valid = $row['valid'];
    }
    if($valid==0){
      //Korisnik nije validan! Nije potvrdio registraciju
      echo http_response_code(401);
    }else{
      //--Token--
      //ID Saljes kao parametar na api kad se trazi
      //Admin proveravas na admin stranici gde se listaju korisnici i na stranici gde pise da li je korisnik komentarisao i da li je glasao, ako admin==0 onda ne moze da pristupi
      $key = "rafrules";
      $token = array(
      "id" => $id,
      "admin" => $admin,
      "exp" => time() + 432000,
      );
      //Enkoduje se, ti preuzimas
      $jwt = JWT::encode($token, $key);
      echo json_encode($jwt);
    }
  }else{
    echo http_response_code(400);
  }

 ?>
