<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    $to = "your-email@example.com";  // Replace with your email address
    $subject = "Nouveau message de $name";
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "Content-type:text/html;charset=UTF-8";

    $email_content = "
    <html>
    <head>
        <title>$subject</title>
    </head>
    <body>
        <h2>$subject</h2>
        <p><strong>Nom:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Téléphone:</strong> $phone</p>
        <p><strong>Message:</strong><br>$message</p>
    </body>
    </html>
    ";

    if (mail($to, $subject, $email_content, $headers)) {
        echo "Message envoyé avec succès!";
    } else {
        echo "Échec de l'envoi du message.";
    }
}
?>
