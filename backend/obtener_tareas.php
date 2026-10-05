<?php
require "conexion.php";
header("Content-Type: application/json");

$sql = "SELECT * FROM tareas";
$resultado = $pdo->query($sql);

$tareas = $resultado->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($tareas);
