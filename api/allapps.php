<?php
include "conn.php";

$select = "SELECT * FROM apps";
$result = $conn->query($select);

$arr = array();

if(mysqli_num_rows($result) != 0) {
	while($row = mysqli_fetch_assoc($result)) {
			$arr[] = $row;
	}
}

echo $json_info = json_encode($arr);
?>
