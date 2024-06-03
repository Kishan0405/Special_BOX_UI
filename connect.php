<?php
	$username = $_POST['username'];
    $password = $_POST['password'];
	$password_confirm = $_POST['password_confirm'];
	$email = $_POST['email'];

	// Database connection
	$conn = new mysqli('sql12.freesqldatabase.com','sql12711242','AXqgISjPQY','sql12711242');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration(username, password, password_confirm, email) values(?,?,?,?)");
		$stmt->bind_param("ssss", $username, $password, $password_confirm, $email);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?>