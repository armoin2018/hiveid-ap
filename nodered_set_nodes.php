<?php

$installedNodes = preg_split('/\s*\n\s*/',`/opt/hiveid-ap/installed_nodes.sh`);

$neededNodes = preg_split("/\s*\n\s*/",file_get_contents('/opt/hiveid-ap/node.list'));
foreach ($neededNodes as $id=>$val) {
	if (!in_array(trim($val),$installedNodes)) {
		echo 'Installing Node-Red Module ' . $val . "\n";
		system('cd ~/.node-red;node-red-admin --install ' . $val . ' >> /opt/hiveid-ap/logs/node.install.log');
	}
}
?>
