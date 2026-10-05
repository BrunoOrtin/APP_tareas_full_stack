<?php

require "conexion.php";
$datos = json_decode(file_get_contents("php://input"), true);
$id = $datos["id"];
$completada = $datos["completada"];

$sql = "UPDATE  tareas SET completada = ? WHERE id=?";
$consulta = $pdo->prepare($sql);
$consulta->execute([$completada, $id]);
