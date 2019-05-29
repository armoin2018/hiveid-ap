<?php
$server = ($_SERVER['SERVER_ADDR'] == '::1')
    ? 'localhost'
    : $_SERVER['SERVER_ADDR'];
header('Location: http://' . $server . ':1880/ui');
?>