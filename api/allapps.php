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

// if ($result->num_rows > 0) {

//     while($row = $result->fetch_assoc()) {
//             array_push($arr, $row['id'], $row['naziv'], $row['kratak_opis'], $row['dug_opis'], $row['tim'], $row['clanovi'] );
//     }
// }
// else
// {
//     echo "Nema aplikacija";
// }

echo $json_info = json_encode($arr);
?>
