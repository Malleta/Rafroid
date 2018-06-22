<?php

include "conn.php";

$id=$_REQUEST['name'];

$select = "SELECT * FROM apps WHERE `name`='$id'";
$result = $conn->query($select);

$arr = array();

if(mysqli_num_rows($result) != 0) {
	while($row = mysqli_fetch_assoc($result)) {
			$arr[] = $row;
	}
}

// if ($result->num_rows > 0) {

//     while($row = $result->fetch_assoc()) {


//             array_push($arr, $row['id'], $row['name'], $row['short_description'], $row['long_description'], $row['team'], $row['students'] );


//     }
// }
// else
// {
//     echo "Nema aplikacija";
// }

echo $json_info = json_encode($arr);
?>
