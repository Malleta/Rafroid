<?php
 
include "conn.php";

$arr1 = array();
$arr2 = array();
$arr3 = array();
$arr4 = array();
$arr5 = array();
 
  $korisnik = $_REQUEST['id'];
  $i=0;
  $sql = "SELECT * FROM users INNER JOIN votes ON users.id=votes.voter WHERE users.id='$korisnik'";
  $result = $conn->query($sql);
  if($result->num_rows>0){
    while($row = $result->fetch_assoc()){
        array_push($arr1, $row['email'], $row['app']);
        
      //echo "Email: ".$row['email']."<br>Glasao za //aplikaciju:".$row['aplikacija']."<br>Svi komentari:<br> ";
    }
      echo $json_info = json_encode($arr1);
      
    $i=1;
    $sql2 = "SELECT * FROM comments WHERE comments.user_id='$korisnik'";
    $result2 = $conn->query($sql2);
    if($result2->num_rows>0){
      while($row = $result2->fetch_assoc()){
          array_push($arr2, $row['appid'], $row['text']);
          
        //echo "Aplikacija sa ID: ".$row['appid']."<br>Komentar:".$row['tekst']."<br><br>";
      }
        
        echo $json_info = json_encode($arr2);
        
    }else{
      echo "Nema komentara";
    }
  }else{
    $sql3 = $sql = "SELECT * FROM users INNER JOIN comments ON users.id=comments.user_id WHERE users.id='$korisnik'";
    $result3 = $conn->query($sql3);
    if($result3->num_rows>0){
      $i=1;
      $brojac = 0;
      while($row = $result3->fetch_assoc()){
        if($brojac==0){
            array_push($arr3, $row['email']);
            echo $json_info = json_encode($arr3);
          //echo "Email: ".$row['email']."<br>Nije glasao<br>Svi komentari:<br> ";
          $brojac=1;
        }
      }
      $sql4 = "SELECT * FROM comments WHERE comments.user_id='$korisnik'";
      $result4 = $conn->query($sql4);
      if($result4->num_rows>0){
        while($row = $result4->fetch_assoc()){
            array_push($arr4, $row['appid'], $row['text']);
            
          //echo "Aplikacija sa ID: ".$row['appid']."<br>Komentar:".$row['tekst']."<br><br>";
        }
          echo $json_info = json_encode($arr4);
      }else{
        echo "Nema komentara";
      }
    }
  }
  if($i==0){
    $sql = "SELECT * FROM users WHERE users.id='$korisnik'";
    $result = $conn->query($sql);
    if($result->num_rows>0){
      while($row = $result->fetch_assoc()){
          array_push($arr5, $row['email']);
          echo $json_info = json_encode($arr5);
        //echo "Email: ".$row['email']."<br>Korisnik nije glasao i nema komentare";
      }
    }
}
 
 ?>