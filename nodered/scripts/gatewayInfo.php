<?php
$myResults = array();

$myResults['hostname'] = trim(`cat /etc/hostname`);

$myResults['lastPull'] = strftime('%Y-%m-%d %H:%M:%S');

$server = (empty($_SERVER['SERVER_ADDR']) || $_SERVER['SERVER_ADDR'] == '::1')
    ? 'localhost'
    : $_SERVER['SERVER_ADDR'];

$hostapd_file = '/etc/hostapd/hostapd.conf';
if (file_exists($hostapd_file)) {
    $hostapd = parse_ini_file($hostapd_file);
    if (strcmp($server,'localhost') ) {
        $hostapd['wpa_passphrase'] = '*******';
    }
    $myResults['hostapd'] = $hostapd;
}
$netinfo = `ip -o address`;
$netinfoList = preg_split('/\n/', $netinfo);
if (!empty($netinfoList)) {
    foreach ($netinfoList as $line) {
        if (preg_match('/^\d+\:\s(\w+).+inet\s([\d\.]+)\//',$line,$matches)) {
            $myResults['interfaces'][$matches[1]] = $matches[2]; 
        }
    }
}

# Get the dnsmasq contents
$dnsmasq_file = '/etc/dnsmasq.conf';
$myResults['dnsmasq'] = parseFile($dnsmasq_file);
# clean off comments - 20190709
foreach ($myResults['dnsmasq'] as $key=>$val) {
    $myResults['dnsmasq'][$key] = preg_replace('/\#.*$/',$val);
}

$ifaceID=0;
if ($_SERVER['REMOTE_ADDR'] == '127.0.0.1') {
    $myResults['activeSSID'] = `sudo iwgetid`;
    $wpa_supplicant = `sudo cat /etc/wpa_supplicant/wpa_supplicant.conf`;
    preg_match_all('/(^(\w+)\s*\=\s*(\w+)$|^(network)\s*\=\s*\{([^\}]+)\})$/m',$wpa_supplicant,$matches);
    if (!empty($matches[1])) {
        foreach ($matches[1] as $items) {
            $temp = preg_split('/\=/',$items);
            if (!strcmp(trim($temp[0]),'network')) {
                if (preg_match('/\{[^\}]+\}/m',$items,$group)) {
                    $wpaNetLines = preg_split('/\n/',$group[0]);
                    foreach ($wpaNetLines as $id=>$netLine) {
                        $netLine = strtr($netLine,array('{'=>'',"\t"=>'','}'=>'','"'=>''));
                        $net_vals=  preg_split('/\=/',$netLine);
                        if (!empty($net_vals[1])) {
                            $net_vals[1] = strtr($net_vals[1],"\"","");
                            $myResults['wpa_net']['network'][$ifaceID][trim($net_vals[0])] = trim($net_vals[1]);
                        }
                    }
                    $ifaceID++;
                }
            } elseif (!empty($temp[1])) {
                $myResults['wpa_net'][trim($temp[0])] = trim($temp[1]);
            }
        }
    }
}

$nmcli_wifi = `sudo nmcli -c no dev wifi`;
if (!empty($nmcli_wifi)) {
    $nmcliLines = preg_split('/\n/',$nmcli_wifi);
    $header = [];
    foreach($nmcliLines as $line) {
        $nmcliLine = preg_split('/[\t\s]+/',trim($line));
        if (empty($header)) {
            $header = $nmcliLine;
        } elseif (!empty($nmcliLine) && !empty($nmcliLine[0])) {
            $myResults['nmcli_wifi'][]= array_combine($header,$nmcliLine);
        }
        
    }
}

$nmcli = `sudo nmcli -c no dev`;
if (!empty($nmcli)) {
    $nmcliLines = preg_split('/\n/',$nmcli);
    $header = [];
    foreach($nmcliLines as $line) {
        $nmcliLine = preg_split('/[\t\s]+/',trim($line));
        if (empty($header)) {
            $header = $nmcliLine;
        } elseif (!empty($nmcliLine) && !empty($nmcliLine[0])) {
            $myResults['nmcli'][]= array_combine($header,$nmcliLine);
        }
    }
}

$dhcpcd_file = '/etc/dhcpcd.conf';
if (file_exists($dhcpcd_file)) {
    $dhcpcd = file_get_contents($dhcpcd_file);
    $dhcpcdLines = preg_split('/\n/',$dhcpcd);
    $flag = 0;
    $activeInterface = '';
    foreach ($dhcpcdLines as $line) {
        if (!empty($line) && !preg_match('/^\#/',$line)) {
            if (preg_match('/^[^\s\t]/',$line)) {
                $flag=0;
            }
            if (preg_match('/^interface\s(\w+)$/', $line,$matches)) {
                $activeInterface = $matches[1];
                $flag = 1;
            } elseif ($flag == 1 && preg_match('/^[\s\t](.+)$/',$line,$matches)) {
                $myResults['dhcpcd'][$activeInterface] =  $matches[1];
            } else {
                $lineParts = preg_split('/\s/',$line);
                $setVal = (empty($lineParts[1])) ? true : $lineParts[1];
                $myResults['dhcpcd'][$lineParts[0]][] = $setVal;
            }
        }
    }
}
$routes = preg_split('/\n/',trim(`route -v`));
$myResults['routes_RAW'] = $routes;
array_shift($routes);
if (!empty($routes)) {
    $headerLine = array_shift($routes);
    $headers = preg_split('/[\s\t]/',$headerLine);
    $myResults['routes'] = array();
    foreach ($routes as $line=>$routeLine) {
        if (!empty($routeLine)) {
            $myResults['routes'][] = array_combine($headers,preg_split('/[\s\t]/',$routeLine));
        }
    }
}


$iptables_file =  '/etc/iptables.ipv4.nat';
if (file_exists($iptables_file)) {
    $myResults['iptables'] = file_get_contents($iptables_file);
    foreach ($$myResults['iptables'] as $line) {
        if (preg_match('/POSTROUTING\s\-o\s(\w+)\s/', $line,$matches)) {
            $myResults['gateway']['wan']['iface'] = $matches[1];
            $myResults['gateway']['wan']['type'] = ($matches[1] == 'wlan') 
                ? 'wifi'
                : 'eth';
        }
    }
} elseif (!empty($myResults['routes'])) { 
    $targetInterface = $myResults['routes'][0]['Iface'];
    $myResults['gateway']['wan']['iface'] = $targetInterface;
    $myResults['gateway']['wan']['type'] = ($targetInterface == 'wlan') 
        ? 'wifi'
        : 'eth';   
}

if (preg_match('/(wlan|eth)(\d+)/',$myResults['dnsmasq']['interface'],$matches)) {
    $myResults['gateway']['lan']['iface'] = $matches[1] . $matches[2];
    $myResults['gateway']['lan']['type'] = ($matches[1] == 'wlan') 
        ? 'wifi'
        : 'eth';
}

$myResults['gateway']['mode'] = 'client';
if (!empty($myResults['gateway'])) {
    if (!empty($myResults['gateway']['lan']) && !empty($myResults['gateway']['wan'])) {
        $myResults['gateway']['mode'] = $myResults['gateway']['lan']['type'] . '2' . $myResults['gateway']['wan']['type'];
    }
}

$services = `systemctl -l --no-pager --no-legend | grep -v "^-" |sort`;
$serviceList = preg_split('/\n/',$services);
foreach ($serviceList as $line) {
    if (preg_match('/^([^\s\t]+)[\s\t]+(\w+)\s(\w+)\s(\w+)[\s\t]+(.+)$/',$line,$matches)) {
        $myResults['services'][] = array(
            'serviceName' => $matches[1],
            'description' => trim($matches[5]),
            'LOAD' => $matches[2],
            'ACTIVE' => $matches[3],
            'SUB'=> $matches[4]
        );
    }
}
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