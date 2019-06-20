#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./setup_node.sh                           ####
#### Description: Sets up node-red                    ####
#### Version: 0.20190614                              ####
##########################################################

now=$(date +"%Y%m%d")

/opt/hiveid-ap/system_update.sh
export DEBIAN_FRONTEND=noninteractive
sudo apt-get install --qq --force-yes npm nodejs nodered
sudo apt-get install --qq --force-yes libzmq5 libzmq3-dev
export DEBIAN_FRONTEND=dialog

mkdir /home/pi/.nodered 2>/dev/null
sudo service nodered stop
php /opt/hiveid-ap/npm_install_globals.php 
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

./nodered_udpate.sh