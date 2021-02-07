<?php

    $destinatario = 'jesusmcc94@gmail.com';
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $asunto = "Mi primer correo";

    $headers =  'MIME-Version: 1.0' . "\r\n"; 
$headers .= 'From: Your name <info@address.com>' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; 

    $mensajeCompleto = $nombre.' '.$apellido;

    mail($destinatario, $asunto, $mensajeCompleto, $headers);

    echo "<script>alert('correo enviado exitosamente')</script>";
    // echo "<script> setTimeout(\"location.href='index.html'\",1000)</script>";
?>