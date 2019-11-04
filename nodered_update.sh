#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./nodered_update.sh                       ####
#### Description: Updates Node Red                    ####
#### Version: 0.20191104                              ####
####          0.20191104 Added more chown folders     ####
####          0.20190614 Initial Version              ####
##########################################################

echo "Installing Global NPM Modules"
php /opt/hiveid-ap/npm_install_globals.php 


echo "Unsecuring Node Red Temporarily"
sudo service nodered stop
cp ~/.node-red/settings.js ~/.node-red/settings.js.temp
cp /opt/hiveid-ap/node.settings.upgrade.js ~/.node-red/settings.js
sudo service nodered start
echo "Node-Red is starting up "
sleep 120

echo "Extracting Node List"
sudo node-red-admin list > ~/.node-red/installed.node.list

cd /opt/hiveid-ap

echo "Installing Missing Nodes"
php /opt/hiveid-ap/nodered_set_nodes.php

/opt/hiveid-ap/nodered_set_flows.sh

echo "Restoring configuration and restarting Node Red"
sudo service nodered stop
cp ~/.node-red/settings.js.temp ~/.node-red/settings.js
sudo chown -R pi:pi home/pi/.npm /home/pi/.node-red /home/pi/.node-gyp
sudo service nodered start