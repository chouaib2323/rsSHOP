<?php
require 'connection.php';

$user = $_GET['user'];
$response = [];

if ($user) {
    $stmt = $conn->prepare("SELECT * FROM commandes WHERE nomcl = ?");
    $stmt->bind_param("s", $user);
    $stmt->execute();
    $result = $stmt->get_result();
    
    while ($row = $result->fetch_assoc()) {
        $response[] = $row;
    }
    
    $stmt->close();
}

header('Content-Type: application/json');
echo json_encode($response);
?>
