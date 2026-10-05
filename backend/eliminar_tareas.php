<?php
require "conexion.php";
$datos = json_decode(file_get_contents("php://input"), true);

$id = $datos["id"];


$sql = "DELETE FROM tareas WHERE id = ?";

$consulta = $pdo->prepare($sql);
$consulta->execute([$id]);
