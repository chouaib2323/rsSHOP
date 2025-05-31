<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers');

// Check if the request method is POST
$request = $_SERVER['REQUEST_METHOD'];

switch ($request) {
    case 'GET':
        getmethod();
        break;
    case 'PUT':
        $data = json_decode(file_get_contents('php://input'), true);
        putmethod($data);
        break;
    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        postmethod($data);
        break;
    case 'DELETE':
        $data = json_decode(file_get_contents('php://input'), true);
        deletemethod($data);
        break;
    default:
        echo '{"result": "data not found"}';
        break;
}

function postmethod($data) {
    // Check if all required fields are provided
    if (isset($data['username']) && isset($data['email']) && isset($data['password'])) {
        
        // Extracting data from the $data array
        $username = $data['username'];
        $email = $data['email'];
        $password = $data['password'];
        
        // Hash the password for security
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);
        
        // Database connection (replace with your database credentials)
        include "connection.php";
        
        // Check if the user already exists
        $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();
        
        if ($result->num_rows > 0) {
            // User already exists
            $response = array("status" => "error", "message" => "User already exists");
            echo json_encode($response);
        } else {
            // Prepare and bind the SQL statement
            $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
            $stmt->bind_param("sss", $username, $email, $hashed_password);
            
            // Execute the statement
            if ($stmt->execute()) {
                // Registration successful
                $response = array("status" => "success", "message" => "User registered successfully");
                json_encode($response);
            } else {
                // Registration failed
                $response = array("status" => "error", "message" => "Registration failed");
                json_encode($response);
            }
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
