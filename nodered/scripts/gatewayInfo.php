<?php
$myResults = array();

$myResults['hostname'] = `cat /etc/hostname`;

$hostapd_file = '/etc/hostapd/hostapd.conf';
if (file_exists($hostapd_file)) {
    $hostapd = parse_ini_file($hostapd_file);
    $hostapd['wpa_passphrase'] = '*******';
    $myResults['hostapd'] = $hostapd;
}

$netinfo = `ip -o address`;
if (!empty($netinfo)) {
    foreach (preg_split('/\n/', $netinfo) as $line) {
        if (preg_match_all('/\d+\:\s(\w+)\sinet\s([\d\.]+)\//',$line,$matches)) {
            $myResults['interfaces'][] = array($matches[1],$matches[2]);
        }
    }
}

$dnsmasq_file = '/etc/dnsmasq.conf';
if (file_exists($dnsmasq_file)) {
    $dnsmasq = parse_ini_file($dnsmasq_file);
    $myResults['dnsmasq'] = $dnsmasq;
}

$dhcpcd_file = '/etc/dhcpcd.conf';
if (file_exists($dhcpcd_file)) {
    $dhcpcd = file_get_contents($dhcpcd_file);
    $dhcpcdLines = preg_split('/\n',$dhcpcd);
    $flag = 0;
    $activeInterface = '';
    foreach ($dhcpcdLines as $line) {
        if (preg_match('/^[^\t]/',$line)) {
            $flag=0;
        }
        if (preg_match('/^interface\s(\w+)$/', $line,$matches)) {
            $activeInterface = $matches[1];
            $flag = 1;
        } 
        if ($flag == 1 && preg_match('/^\t(.+)$/',$line,$matches)) {
            $myResults['dhcpcd'][$activeInterface] =  $matches[1];
        }
    }
}

$myResults['iptables'] = `cat /etc/iptables.ipv4.nat`;
$myResults['routes'] = `route -v`;


header("Content-type: application/json; charset=utf-8");
echo json_encode($myResults, JSON_PRETTY_PRINT);
?>