<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers');

// Check if the request method is POST
$request = $_SERVER['REQUEST_METHOD'];

if ($request === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    postLogin($data);
} else {
    echo json_encode(array("status" => "error", "message" => "Invalid request method"));
}

function postLogin($data) {
    // Check if all required fields are provided
    if (isset($data['username']) && isset($data['password'])) {
        
        // Extracting data from the $data array
        $username = $data['username'];
        $password = $data['password'];
        
        // Database connection (replace with your database credentials)
        include "connection.php";
        
        // Prepare and bind the SQL statement
        $stmt = $conn->prepare("SELECT id, username, email, password FROM users WHERE username = ? OR email = ?");
        $stmt->bind_param("ss", $username, $username);
        
        // Execute the statement
        if ($stmt->execute()) {
            $result = $stmt->get_result();
            if ($result->num_rows > 0) {
                $user = $result->fetch_assoc();
                
                // Verify the password
                if (password_verify($password, $user['password'])) {
                    // Login successful
                    $response = array("status" => "success", "message" => "Login successful", "user" => array("id" => $user['id'], "username" => $user['username'], "email" => $user['email']));
                    echo json_encode($response);
                } else {
                    // Invalid password
                    $response = array("status" => "error", "message" => "Invalid password");
                    echo json_encode($response);
                }
            } else {
                // User not found
                $response = array("status" => "error", "message" => "User not found");
                echo json_encode($response);
            }
        } else {
            // Query execution failed
            $response = array("status" => "error", "message" => "Login failed");
            echo json_encode($response);
        }
        
        // Close the statement and connection
        $stmt->close();
        $conn->close();
    } else {
        // Required fields not provided
        $response = array("status" => "error", "message" => "Missing required fields");
        echo json_encode($response);
    }
}
?>
