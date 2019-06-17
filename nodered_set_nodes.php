<?php
$nodeFile = '/home/pi/.node-red/installed.node.list';
if (file_exists($nodeFile)) {
        $nodeList = file_get_contents($nodeFile);
} else {
        exit('Node file not found');
}

$nodeArray = preg_split("/\n/",$nodeList);
$installedNodes = array();
foreach ($nodeArray as $row=>$data) {
        $data = preg_replace('#\\x1b[[][^A-Za-z]*[A-Za-z]#', '',$data);
        $lineArray = preg_split('/[\s\t\/]+/',$data);
        if (!empty($lineArray[0]) && !preg_match('/(^\d|^node-red$|^Nodes)/',$lineArray[0])) {
                $installedNodes[$lineArray[0]]=1;
        }
}
$installedNodes=array_keys($installedNodes);
$neededNodes = preg_split("/\s*\n\s*/",file_get_contents('/opt/hiveid-ap/node.list'));
foreach ($neededNodes as $id=>$val) {
        if (!in_array(trim($val),$installedNodes)) {
                echo 'Installing Node-Red Module ' . $val . "\n";
                #system('cd ~/.node-red;npm install ' . $val . '  --unsafe-perm --no-audit --loglevel=error');
                system('sudo node-red-admin install ' . $val);
        }
}
?>
