<?php
require 'PHPMailer-master/PHPMailerAutoload.php';

$name = strip_tags(htmlspecialchars($_POST['NAME']));
$email_id = strip_tags(htmlspecialchars($_POST['EMAIL']));
$contact_no = strip_tags(htmlspecialchars($_POST['PHONE']));
$firm_name = strip_tags(htmlspecialchars($_POST['FIRM']));



$mail = new PHPMailer();
$mail->isSMTP();
$mail->SMTPDebug = 0;
$mail->Debugoutput = 'html';
$mail->Host = "smtp.gmail.com";
$mail->Port = 25;
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'tls';
$mail->Username = "connectankityadav@gmail.com";
$mail->Password = "";
$mail->setFrom('connectankityadav@gmail.com', 'Mike Admin');
$mail->addAddress('anshulgupta1386@gmail.com', 'Anshul Gupta');
$mail->addAddress('connectankityadav@gmail.com', 'Ankit Yadav');
$mail->addAddress('tushar@mikelegal.com', 'Tushar Bhargawa');
$mail->isHTML(true);
$mail->Subject = $name . " is trying to contact Team MikeLegal";
$mail->Body = "Hey Team MikeLegal,<br> I like the services you provide and am willing to try you. <br> <b>" . $name . "<br>" . $email_id . "<br>" . $contact_no . "<br>" . $firm_name;



if(!$mail->send())
{
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
}
else
{
    echo 'Thank you for your interest in MikeLegal. Our sales team will contact you shortly.';
    return true;
}
?>
