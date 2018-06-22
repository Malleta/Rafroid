<?php
include "conn.php";
ob_start();
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';

// return tru if $str ends with $sub
function endsWith( $str, $sub ) {
  return ( substr( $str, strlen( $str ) - strlen( $sub ) ) == $sub );
}

$email = $_REQUEST['email'];
$pass = $_REQUEST['password'];
$pass = md5($pass);
$code=substr(md5(mt_rand()),0,15);


$sql = "INSERT INTO users (`email`, `password`, `code`)
VALUES ('$email', '$pass', '$code')";

if($conn->query($sql)){
  $sql = "SELECT id FROM users WHERE email='$email'";
  $result = $conn->query($sql);
  if($result->num_rows>0){
    while($row = $result->fetch_assoc()){
      $id = $row["id"];
    }
  }else{
    echo "Error: ". $sql . "<br>" . $conn->error;
  }
  if(endsWith($email, "@raf.rs")){
        //Saljem mail sa $id i $code
    $mail = new PHPMailer(true);
    try {
          $mail->SMTPDebug = 0;                                 // Enable verbose debug output
          $mail->isSMTP();                                      // Set mailer to use SMTP
          $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
          $mail->SMTPAuth = true;                               // Enable SMTP authentication
          $mail->Username = 'rafoidinfo@gmail.com';                 // SMTP username
          $mail->Password = 'rafrules';                           // SMTP password
          $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
          $mail->Port = 587;                                    // TCP port to connect to



          //Recipients
          $mail->setFrom('rafoidinfo@gmail.com');
          $mail->addAddress($email);

          //Content
          $mail->isHTML(true);                                  // Set email format to HTML
          $mail->Subject = 'Validacioni link';
          $mail->Body    = 'Kliknite na ovaj <a href="https://rafoid.000webhostapp.com/verification.php?id='.$id.'&code='.$code.'">link</a> da bi ste aktivirali svoj nalog.';

          $mail->send();
          //Email je poslat
          echo "true";
        } catch (\Exception $e) {
          echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
        }
      }else{
        //Nije se registrovao sa RAF mail-om
        echo "false";
      }


    }else{
      echo "Error: ". $sql . "<br>" . $conn->error;
    }

    ?>
