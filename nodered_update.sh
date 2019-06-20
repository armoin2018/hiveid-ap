#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./nodered_update.sh                       ####
#### Description: Updates Node Red                    ####
#### Version: 0.20190614                              ####
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
php ./nodered_set_nodes.php

echo "Setting the flows"
CONF=/home/pi/.node-red/flows_$HOSTNAME.json
LINE_DIFF=`diff /opt/hiveid-ap/node.flows.js $CONF | wc -l`

if [ "$LINE_DIFF" -eq "0" ]; then 
    echo "Skipping flow updates"
else
    if [ -f $CONF ]; then 
        sudo cp $CONF /usr/local/hiveid-ap/backups/$DATE/.
    fi
    
    cp /opt/hiveid-ap/node.flows.js $CONF
fi

echo "Restoring configuration and restarting Node Red"
sudo service nodered stop
cp ~/.node-red/settings.js.temp ~/.node-red/settings.js
sudo chown -R pi:pi ~/.node-red
sudo service nodered start