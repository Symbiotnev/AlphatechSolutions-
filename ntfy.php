<?php

// Check if POST request contains form data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Retrieve form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $number = htmlspecialchars($_POST['number']);
    $message = htmlspecialchars($_POST['message']);
    
    // Construct message content
    $messageContent = "New message from Alphatech Solutions:\n\n";
    $messageContent .= "Name: $name\nEmail: $email\nPhone Number: $number\nMessage: $message\n";
    
    // Define the URL of the ntfy.sh topic
    $url = 'https://ntfy.sh/alphatech';
    
    // Configure the POST request to ntfy.sh
    $options = array(
        'http' => array(
            'method' => 'POST',
            'header' => 'Content-Type: text/plain',
            'content' => $messageContent
        )
    );
    
    // Create a stream context for the POST request
    $context = stream_context_create($options);
    
    // Send the POST request to ntfy.sh
    $result = file_get_contents($url, false, $context);
    
    // Check if the request was successful
    if ($result !== false) {
        // Return a success response
        $response = array('status' => 'success', 'message' => 'Message sent successfully.');
        echo json_encode($response);
    } else {
        // Return an error response
        $response = array('status' => 'error', 'message' => 'Failed to send message.');
        echo json_encode($response);
    }
    
} else {
    // Return an error response if not a POST request
    $response = array('status' => 'error', 'message' => 'Invalid request method.');
    echo json_encode($response);
}

?>

