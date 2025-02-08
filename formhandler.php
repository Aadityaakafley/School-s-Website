<?php
$name =$_POST["name"];
$visitor_email=$_POST["email"];
$subject= $_POST["subject"];
$message= $_POST["message"];
   $email_from="info@yourwebsite.com";
   $email_subject="New Form Submission";
   $email_body="User Name: $name.\n".
                "User Email: $visitor_email.\n".
                "subject:$subject.\n".
                "user message:$message.\n";

                $to="aadityakafle98@gmail.com";
                $headers="From:$email_form \r \n";
                $headers.= "Reply-to: $visitor_email \r \n";

                mail($to,$email_subject,$email_body,$headers);
                header("Location: Contact.html");



?>