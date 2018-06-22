<?php
include "conn.php";
ob_start();
require 'vendor/autoload.php';

  //Glasanje
  //Prosledjuje se ID korisnika i ID apolikacije

    $korisnik = $_REQUEST['korisnik'];
    $appID = $_REQUEST['appID'];

  //provera da li je korisnik vec glasao
  // proveravam da li je id korisnika == glasac u tabeli glasovi
  $sql = "SELECT * FROM votes WHERE voter = '$korisnik'";
  $result = $conn->query($sql);

    if($result->num_rows>0){
      //Vec je glasao za neku aplikaciju i ne moze vise da glasa
      echo "false";
    }else{
      //Ako nema poklapanja u bazi onda moze da glasa
      $sql = "INSERT INTO votes (`voter`, `app`)
      VALUES ('$korisnik', '$appID')";
      if($conn->query($sql) === TRUE){
        //Uspesno je glasao
        echo "true";
      }
    }
 ?>
