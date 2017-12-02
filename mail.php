<?php

/**
 * Name: mail
 * Description: Takes the ajax request sent from the contact form, sends email if successful and responds with json.
 * @version 2.0
 * @since 2.0
 * @author Aaron Welsh <contact@aaron-welsh.co.uk>
 */


session_start();

$from           = 'noreply@aaron-welsh.co.uk'; // Send email as my web address to avoid being filtered as spam
$successMessage = 'Your message has been successfully submitted. I will get back ASAP!'; // Went well
$errorMessage   = 'Whoops, something went wrong. Please try again!'; //Error


// This is just a quick check to make sure the file isn't being accessed directly.
if(empty($_POST['name'])) {
    echo "Bad! You shouldn't be trying to access this file like this. I'll assume you meant to send me a message? here's the link <a href='https://aaron-welsh.co.uk/#/contact'>https://aaron-welsh.co.uk/#/contact</a> ;)";
} else {
    try {
        // Decode passed token
        $token = urldecode($_POST['token']);

        // Check if token is equal to session token
        if($token == $_SESSION['token']) { 

            $sendTo     = 'contact@aaron-welsh.co.uk'; // Email we will receive the sent email
            $subject    = 'New message from website';
            $fields     = array('name' => 'name', 'email' => 'email', 'number' => 'number', 'message' => 'message'); // array of what we're sending
            $emailText  = "New Message from our contact form\n";

            // Get all the fields past from the form
            foreach ($_POST as $key => $value) { 
                if (isset($fields[$key])) {
                    $emailText .= htmlentities("$fields[$key]: $value\n"); //add to our emails body
                }
            }

            mail($sendTo, $subject, $emailText, "From: " . $from);
            $responseArray = array('type' => 'success', 'message' => $successMessage); // Send success message to client
        }
    }
    catch (\Exception $e) {
        $responseArray = array('type' => 'danger', 'message' => $errorMessage); // Send error back
    }

    // JSON response 
    if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
        $encoded = json_encode($responseArray);

        header('Content-Type: application/json');

        echo $encoded;
    }
    else {
        echo $responseArray['message'];
    }
}