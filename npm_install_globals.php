<?php
system('sudo npm cache clean -f');
system('sudo npm install npm -g --loglevel=error');

$neededNodes = preg_split("/\s*\n\s*/",file_get_contents('/opt/hiveid-ap/npm.list'));
foreach ($neededNodes as $id=>$val) {
    echo 'Installing Node-Red Global Module ' . $val . "\n";
    system('sudo chown -R root:root /root/.npm /root/.node-gyp /root /usr/lib/node_modules');
    system('sudo npm install ' . $val . ' --unsafe-perm --no-audit -g --loglevel=error');
}
system('sudo npm update -g --loglevel=error');
?>