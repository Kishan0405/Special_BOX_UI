<?php
session_start();

// Database credentials
$servername = "sql12.freesqldatabase.com"; // Change this to your server name
$username = "sql12711242"; // Replace with your actual database username
$password = "AXqgISjPQY"; // Replace with your actual database password
$db = "sql12711242"; // Replace with your actual database name

// Create connection
$conn = new mysqli($servername, $username, $password, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: ". $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // SQL query to check if the user exists
    $sql = "SELECT password FROM registration WHERE username =? AND password =?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $username, $password); // Use prepared statements to prevent SQL injection
    $stmt->execute();
    $stmt->store_result();
    
    // Check if user exists
    if ($stmt->num_rows > 0) {
        $stmt->bind_result($hashedPasswordFromDatabase);
        $stmt->fetch();

        // Verify password
        if (password_verify($password, $hashedPasswordFromDatabase)) {
            // Password is correct
            $_SESSION["loggedIn"] = true;
            $_SESSION["username"] = $username;

            // Redirect to a protected page or dashboard
            header("Location: indexlogin.html");
            exit();
        } else {
            // Invalid password
            echo "<script>alert('Successffully logged in'); window.location.href='indexlogin.html';</script>";
        }
    } else {
        // User does not exist
        echo "<script>alert('Invalid Username or Password'); window.location.href='indexlogin.html';</script>";
    }
    $stmt->close();
}
$conn->close();
?>