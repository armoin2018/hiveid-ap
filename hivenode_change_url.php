<?php
switch (@strtoupper($argv[1])) {
    case 'LOCAL':
    case 'NEW':
        $target = urlencode('http://local.hive-id.com:1880/tracker');
        break;
    default:
        $target = urlencode('http://www.traintraxx.com/tracker.php');
}

$leases = file_get_contents('/var/lib/misc/dnsmasq.leases');
$leaseLines = preg_split('/\n/',$leases);
$ipList = array();
foreach ($leaseLines as $lineID=>$leaseLine) {
    $leaseSplit = preg_split('/\s/',$leaseLine);
    if (!empty($leaseSplit[2])) {
        $curIP = $leaseSplit[2];
    
        echo "Calling " . $curIP . "\n";
        $url = 'http://' .$curIP . ':8080/service_url?service_url=' . $target;
        file_get_contents($url);
        $ipList[] = $curIP;
    }
}

foreach ($ipList as $curIP) {
    $url = 'http://' .$curIP . ':8080/info';
    $tempJSON = file_get_contents($url);
    if (!empty($tempJSON)) {
        $tempArray=json_decode($tempJSON,true);
        echo $curIP . ',' . $tempArray['VERSION'] . ',' . $tempArray['URL'] . "\n";
    } else {
        echo "$curIP,Failed,Failed\n";
    }
}
?>
