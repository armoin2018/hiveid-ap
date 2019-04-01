<?php

$installedNodes = preg_split('/\s*\n\s*/',`/opt/hiveid-ap/nodered_get_nodes.sh`);

$neededNodes = preg_split("/\s*\n\s*/",file_get_contents('/opt/hiveid-ap/node.list'));
foreach ($neededNodes as $id=>$val) {
	if (!in_array(trim($val),$installedNodes)) {
		echo 'Installing Node-Red Module ' . $val . "\n";
		system('cd /home/pi/.node-red;npm install ' . $val . ' >> /var/log/hiveid-ap/node.install.log');
	}
}
system('service nodered restart');
?>
