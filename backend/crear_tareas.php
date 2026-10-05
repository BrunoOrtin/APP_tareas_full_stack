<?php

require "conexion.php";
$datos = json_decode(file_get_contents("php://input"), true);
$titulo = $datos["titulo"];

$sql = "INSERT INTO tareas (titulo) VALUES (?)";
$consulta = $pdo->prepare($sql);
$consulta->execute([$titulo]);
