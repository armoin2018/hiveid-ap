#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./setup_node.sh                           ####
#### Description: Sets up node-red                    ####
#### Version: 0.20190607                              ####
##########################################################

now=$(date +"%Y%m%d")
sudo ./system_update.sh
sudo apt-get install npm nodejs nodered --yes
sudo apt-get install libzmq5 libzmq3-dev --yes

mkdir /home/pi/.nodered 2>/dev/null

sudo service nodered stop

sudo npm cache clean -f
sudo chown -R root:root /root/.npm /root/.node-gyp /root /usr/lib/node_modules
sudo npm install npm -g  
sudo npm install node-gyp --unsafe-perm --no-audit -g
sudo npm install zmq --unsafe-perm --no-audit -g
sudo chown -R root:root /root/.npm /root/.node-gyp /root /usr/lib/node_modules
sudo npm install usb  --unsafe-perm --no-audit -g
sudo npm install bluetooth-hci-socket --unsafe-perm --no-audit  -g
sudo npm install bcrypt --unsafe-perm --no-audit -g
sudo chown -R root:root /root/.npm /root/.node-gyp /root /usr/lib/node_modules
sudo npm install node-red-admin --unsafe-perm --no-audit -g
sudo npm install noble --unsafe-perm --no-audit -g
sudo npm install lodash --unsafe-perm --no-audit -g
sudo npm install passwd-linux --unsafe-perm --no-audit -g
sudo npm install ini --unsafe-perm --no-audit -g
sudo npm install fs --unsafe-perm --no-audit -g
sudo npm update -g

sudo chown -R pi:pi /home/pi/.node-red

sudo systemctl enable nodered.service
sudo service nodered start

DATE=`date '+%Y%m%d%H%M%S'`
sudo mkdir /usr/local/hiveid-ap /usr/local/hiveid-ap/backups/ /usr/local/hiveid-ap/backups/$DATE 2>/dev/null
sudo chown -R pi:pi /usr/local/hiveid-ap /usr/local/hiveid-ap/backups/ /usr/local/hiveid-ap/backups/$DATE
CONF=/home/pi/.node-red/flows_$HOSTNAME.json
if [ -f $CONF ]; then 
    sudo cp $CONF /usr/local/hiveid-ap/backups/$DATE/.
fi 
cp /opt/hiveid-ap/node.flows.js $CONF

CONF=/home/pi/.node-red/settings.js
if [ -f $CONF ]; then 
    sudo cp $CONF /usr/local/hiveid-ap/backups/$DATE/.
fi 
cp /opt/hiveid-ap/node.settings.unsecure.js ~/.node-red/settings.js 

sudo chown -R pi:pi /home/pi/.node-red
sudo chmod -R 666 /var/log/hiveid-ap
php ./nodered_set_nodes.php

sudo service nodered restart