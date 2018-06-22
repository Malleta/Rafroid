<?php

include "conn.php";
use \Firebase\JWT\JWT;
ob_start();
require 'vendor/autoload.php';

  $email = $_REQUEST['email'];
  $pass = $_REQUEST['password'];
  $pass = md5($pass);

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
      echo "false";
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
      echo $JSON = json_encode($jwt);
        /*$decoded = JWT::decode($jwt, $key, array('HS256'));

        print_r($decoded);


        $decoded_array = (array) $decoded;
        JWT::$leeway = 60; // $leeway in seconds
        $decoded = JWT::decode($jwt, $key, array('HS256'));*/
      // Uspesno si se ulogovao
      // Napravi sesiju
      // Prebaci na pocetnu stranu
    }
  }else{
    echo "false";
  }

 ?>
