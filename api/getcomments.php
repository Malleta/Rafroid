<?php

include "conn.php";

$id=$_REQUEST['appid'];


$select = "SELECT * FROM comments WHERE `appid` = '$id' ORDER BY `id` DESC";
$result = $conn->query($select);

$arr = array();
$arr1 = array();

if(mysqli_num_rows($result) != 0) {
	while($row = mysqli_fetch_assoc($result)) {
				//Ako ne rade slucajno komentari, $row[`user_id`] promeni u $row[user_id] i testiraj
        $sql2 = "SELECT * FROM users WHERE id='$row[user_id]' ";
        $result2 = $conn->query($sql2);
		if(mysqli_num_rows($result2) != 0) {
			while($row1 = mysqli_fetch_assoc($result2)) {
				$row['email'] = $row1['email'];
			}
		}
			$arr[] = $row;
	}
}
echo $json_info = json_encode($arr);
?>
