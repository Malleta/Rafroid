<?php
// Ovde se prosledjuje mail na koji se salje preko maila link za reset pasworda
include "conn.php";
ob_start();
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';

if(isset($_POST['reset'])){

    $email = $_POST['mail'];
    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($sql);
    if($result->num_rows>0){
      $code=substr(md5(mt_rand()),0,15);
      while($row = $result->fetch_assoc()){
        $id = $row["id"];
      }
      //apdejtujem code polje u bazi
      $sql = "UPDATE users SET code='$code' WHERE id='$id'";
      $result = $conn->query($sql);

      //nalog postoji, saljem mail
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
        $mail->Subject = 'Reset sifre';
        $mail->Body    = 'Kliknite na ovaj <a href="https://rafoid.000webhostapp.com/reset.php?code='.$code.'">link</a> kako bi resetovali sifru.';

        $mail->send();
        //Email za reset sifre je poslat
        echo "true";
      } catch (\Exception $e) {
        echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
      }
    }
  }


 ?>
