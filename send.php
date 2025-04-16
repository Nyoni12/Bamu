<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $date = htmlspecialchars($_POST['date']);
    $time = htmlspecialchars($_POST['time']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "admin@tsungalawinc.africa"; // Change to your email
    $subject = "New Booking Request";
    $body = "Date: $date\nTime: $time\nEmail: $email\nMessage: $message";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Thank you! Your booking request was sent.'); window.location.href = 'index.html';</script>";
    } else {
        echo "<script>alert('Sorry, something went wrong. Try again.'); window.location.href = 'index.html';</script>";
    }
}
?>
