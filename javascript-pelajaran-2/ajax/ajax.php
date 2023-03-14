<?php 

$host = "localhost:8111";
$user = "root";
$password = "";
$db = "dbbuah";

$koneksi = mysqli_connect($host, $user, $password, $db);

$sql = "SELECT * FROM tblbuah";

$result = mysqli_query($koneksi, $sql);

// $hasil = mysqli_query($koneksi, $sql);

// $result = mysqli_fetch_assoc($hasil);

if (mysqli_num_rows($result) > 0) {
    $data = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
}

echo json_encode($data);

// echo json_encode($json, JSON_PRETTY_PRINT);

// print_r($result);

?>