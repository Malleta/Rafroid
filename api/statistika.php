<?php
//Povlacis glasove za jednu aplikaciju
//Prosledjujes ID aplikacije
include "conn.php";

$arry = array();
$arri = array();

  $app = $_REQUEST['appId'];
  $i = 0;
  $y = 0;
  $sql = "SELECT * FROM votes WHERE app='$app'";
  $result = $conn->query($sql);
  if($result->num_rows>0){
    while($row = $result->fetch_assoc()){
      $i++;
    }
    $sql2 = "SELECT * FROM votes";
    $result2 = $conn->query($sql2);
    if($result2->num_rows>0){
      while($row = $result2->fetch_assoc()){
        $y++;
      }
    }
    //Broj svih glasova
      array_push($arry, $y);
      echo $json_y = json_encode($arry);

    //Broj glasova za ovu aplikaciju
      array_push($arri, $i);
      echo $json_i = json_encode($arri);
  }else{
    //Nema glasove
    echo "false";
  }

 ?>
