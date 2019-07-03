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
sudo apt-get install --yes --force-yes npm nodejs nodered
sudo apt-get install --yes --force-yes libzmq5 libzmq3-dev
export DEBIAN_FRONTEND=dialog

mkdir /home/pi/.nodered 2>/dev/null
sudo service nodered stop
sudo chown -R pi:pi /home/pi/.node-red
sudo systemctl enable nodered.service
sudo service nodered start

DATE=`date '+%Y%m%d%H%M%S'`
sudo mkdir /home/pi/.node-red /usr/local/hiveid-ap /usr/local/hiveid-ap/backups/ /usr/local/hiveid-ap/backups/$DATE 2>/dev/null
sudo chown -R pi:pi /home/pi/.node-red /usr/local/hiveid-ap /usr/local/hiveid-ap/backups/ /usr/local/hiveid-ap/backups/$DATE

/opt/hiveid-ap/nodered_set_flows.sh

CONF=/home/pi/.node-red/settings.js
if [ -f $CONF ]; then 
    sudo cp $CONF /usr/local/hiveid-ap/backups/$DATE/.
fi 
cp /opt/hiveid-ap/node.settings.unsecure.js ~/.node-red/settings.js 

sudo chown -R pi:pi /home/pi/.node-red
sudo chmod -R 666 /var/log/hiveid-ap

/opt/hiveid-ap/nodered_udpate.sh