<?php
include "conn.php";

$select = "SELECT apps.name as name,  COUNT(*) as value FROM votes
INNER JOIN apps on votes.app = apps.id
group by app";
$result = $conn->query($select);

$arr = array();

if(mysqli_num_rows($result) != 0) {
  while($row = mysqli_fetch_assoc($result)) {
      $arr[] = $row;
  }
}

echo $json_info = json_encode($arr);
?>
