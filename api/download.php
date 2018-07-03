<?php
include "conn.php";
//Prosledjujes ID aplikacije
$appName = $_REQUEST['appName'];

  $file_path='app/' . $appName . '.apk';
  echo $file_path;

  //$file_name="Rafpored_v1.0.2.apk";
  header('Content-Type: application/vnd.android.package-archive');
  // header("Content-length: " . filesize($file_path));
  header('Content-Disposition: attachment; filename="' . $appName . '"');
  ob_end_flush();
  readfile($file_path);
  return true;
?>
