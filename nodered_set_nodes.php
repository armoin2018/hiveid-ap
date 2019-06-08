<?php
$nodeList = `node-red-admin list`;

$nodeArray = preg_split("/\n/",$nodeList);
$installedNodes = array();
foreach ($nodeArray as $row=>$data) {
        $data = preg_replace('#\\x1b[[][^A-Za-z]*[A-Za-z]#', '',$data);
        $lineArray = preg_split('/[\s\t\/]+/',$data);
        if (!empty($lineArray[0]) && !preg_match('/(^\d|^node-red$|^Nodes)/',$lineArray[0])) {
                $installedNodes[$lineArray[0]]++;
        }
}
$installedNodes=array_keys($installedNodes);
$neededNodes = preg_split("/\s*\n\s*/",file_get_contents('/opt/hiveid-ap/node.list'));
foreach ($neededNodes as $id=>$val) {
        if (!in_array(trim($val),$installedNodes)) {
                echo 'Installing Node-Red Module ' . $val . "\n";
                system('cd ~/.node-red;npm install ' . $val . '  --unsafe-perm --no-audit');
        }
}
system('sudo service nodered restart');
?>
