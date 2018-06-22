<?php
$file_path="app/Rafpored_v1.0.2.apk";
$file_name="Rafpored_v1.0.2.apk";
header('Content-Type: application/vnd.android.package-archive');
header("Content-length: " . filesize($file_path));
header('Content-Disposition: attachment; filename="' . $file_name . '"');
ob_end_flush();
readfile($file_path);
return true;

?>