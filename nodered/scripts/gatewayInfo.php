<?php
$myResults = array();

$myResults['hostname'] = trim(`cat /etc/hostname`);

$server = (empty($_SERVER['SERVER_ADDR']) || $_SERVER['SERVER_ADDR'] == '::1')
    ? 'localhost'
    : $_SERVER['SERVER_ADDR'];

$hostapd_file = '/etc/hostapd/hostapd.conf';
if (file_exists($hostapd_file)) {
    $hostapd = parse_ini_file($hostapd_file);
    if ($server == 'localhost' ) {
        $hostapd['wpa_passphrase'] = '*******';
    }
    $myResults['hostapd'] = $hostapd;
}
print __LINE__ ."\n";
$netinfo = `ip -o address`;
$netinfoList = preg_split('/\n/', $netinfo);
if (!empty($netinfoList)) {
    foreach ($netinfoList as $line) {
        if (preg_match_all('/^\d+\:\s(\w+).+inet\s([\d\.]+)\//',$line,$matches)) {
            @$myResults['interfaces'][$matches[1]] = $matches[2]; 
        }
    }
}
print __LINE__ ."\n";
$dnsmasq_file = '/etc/dnsmasq.conf';
$myResults['dnsmasq'] = parseFile($dnsmasq_file);

if ($server == 'localhost') {
    $myResults['iwgetid'] = `sudo iwgetid`;
    $wpa_supplicant = `sudo cat /etc/wpa_supplicant/wpa_supplicant.conf`;
    preg_match_all('/(^(\w+)\s*\=\s*(\w+)$|^(network)\s*\=\s*\{([^\}]+)\})$/m',$wpa_supplicant,$matches);
    print_r($matches);    
}
print __LINE__ ."\n";
$nmcli_wifi = `sudo nmcli -c no dev wifi`;
if (!empty($nmcli_wifi)) {
    $nmcliLines = preg_split('/\n/',$nmcli_wifi);
    $header = [];
    foreach($nmcliLines as $line) {
        $nmcliLine = preg_split('/[\t\s]+/',trim($line));
        if (empty($header)) {
            $header = $nmcliLine;
        } elseif (!empty($nmcliLine) && !empty($nmcliLine)) {
            $myResults['nmcli_wifi'][]= array_combine($header,$nmcliLine);
            print_r($header);print_r($nmcliLine);
        }
        
    }
}
print __LINE__ ."\n";
$nmcli = `sudo nmcli -c no dev`;
if (!empty($nmcli)) {
    $nmcliLines = preg_split('/\n/',$nmcli);
    $header = [];
    foreach($nmcliLines as $line) {
        $nmcliLine = preg_split('/[\t\s]+/',trim($line));
        if (empty($header)) {
            $header = $nmcliLine;
        } elseif (!empty($nmcliLine) && !empty($nmcliLine)) {
            $myResults['nmcli'][]= array_combine($header,$nmcliLine);
            print_r($header);print_r($nmcliLine);
        }
    }
}
print __LINE__ ."\n";
$dhcpcd_file = '/etc/dhcpcd.conf';
if (file_exists($dhcpcd_file)) {
    $dhcpcd = file_get_contents($dhcpcd_file);
    $dhcpcdLines = preg_split('/\n/',$dhcpcd);
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

$myResults['iptables'] = preg_split('/\n/',trim(`cat /etc/iptables.ipv4.nat`));
foreach ($myResults['iptables'] as $line) {
    if (preg_match('/POSTROUTING\s\-o\s(\w+)\s/', $line,$matches)) {
        $myResults['gateway']['wan']['iface'] = $matches[1];
        $myResults['gateway']['wan']['type'] = ($matches[1] == 'wlan') 
            ? 'WiFi'
            : 'Ethernet';
    }
}

$myResults['routes'] = preg_split('/\n/',trim(`route -v`));

if (preg_match('/(wlan|eth)(\d+)/',$myResults['dnsmasq']['interface'],$matches)) {
    $myResults['gateway']['lan']['iface'] = $matches[1] . $matches[2];
    $myResults['gateway']['lan']['type'] = ($matches[1] == 'wlan') 
        ? 'WiFi'
        : 'Ethernet';
}

$myResults['gateway']['mode'] = 'none';
if (!empty($myResults['gateway'])) {
    if (!empty($myResults['gateway']['lan']) && !empty($myResults['gateway']['wan'])) {
        $myResults['gateway']['mode'] = $myResults['gateway']['lan']['type'] . ' to ' . $myResults['gateway']['wan']['type'];
    }
}
/*
$services = `systemctl -l --no-pager --no-legend | grep -v "^-" |sort`;
$serviceList = preg_split('/\n/',$services);
foreach ($serviceList as $line) {
    if (preg_match('/^([^\s\t]+)[\s\t]+(\w+)\s(\w+)\s(\w+)[\s\t]+(.+)$/',$line,$matches)) {
        $myResults['services'][$matches[1]] = array(
            'description' => trim($matches[5]),
            'LOAD' => $matches[2],
            'ACTIVE' => $matches[3],
            'SUB'=> $matches[4]
        );
    }
}
*/
header("Content-type: application/json; charset=utf-8");
echo json_encode($myResults, JSON_PRETTY_PRINT);

function parseFile($inFile) {
    $myResults = array();
    if (file_exists($inFile)) {
        $file = file_get_contents($inFile);
        $a_file = preg_split('/\n/',$file);
        foreach ($a_file as $line) {
            if (!preg_match('/(^\#|^$)/',$line)) {
                if (preg_match('/([^\=]*)\=(.+)$/',$line,$matches)) {
                    $myResults[$matches[1]] = $matches[2];
                }
            }
        }
    }
    return $myResults;
}
?>