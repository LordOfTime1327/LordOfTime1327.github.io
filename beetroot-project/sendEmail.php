<?php
$method = $_SERVER['REQUEST_METHOD'];
$emails = array('daniel@beetroot.academy', 'serhii.alpatov@beetroot.academy', 'v.budean@gmail.com'); 

if ( $method === 'POST' ) {
  $userName = trim($_POST["name"]);
  $userEmail  = trim($_POST["email"]);
  $userMessage = trim($_POST["message"]);
  
  $message = "
    <tr>
        <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$userName</b></td>
        <td style='padding: 10px; border: #e9e9e9 1px solid;'>$userEmail</td>
        <td style='padding: 10px; border: #e9e9e9 1px solid;'>$userMessage</td>
    </tr>
  ";

  $message = "<table style='width: 100%;'>$message</table>";

  function adopt($text) {
    return '=?UTF-8?B?'.Base64_encode($text).'?=';
  }

  foreach($emails as $value) { 
    $headers = "MIME-Version: 1.0" . PHP_EOL .
    "Content-Type: text/html; charset=utf-8" . PHP_EOL .
    'From: '.adopt($userEmail).' <'.$value.'>' . PHP_EOL .
    'Reply-To: '.$value.'' . PHP_EOL;
    mail($value, adopt('User message'), $message, $headers );
  }
}
?>