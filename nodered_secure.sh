#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: sudo ./nodered_secure.sh password         ####
#### Description: Sets up security for node-red       ####
#### Version: 0.1                                     ####
##########################################################

IN_PWD=$1
if [ "$IN_PWD" == "" ]; then
    IN_PWD="password"
fi

sudo service nodered stop

DATE=`date '+%Y%m%d%H%M%S'`
sudo mkdir /usr/local/hiveid-ap /usr/local/hiveid-ap/backups/ /usr/local/hiveid-ap/backups/$DATE
sudo chown -R pi:pi /usr/local/hiveid-ap /usr/local/hiveid-ap/backups/ /usr/local/hiveid-ap/backups/$DATE

sudo mkdir /usr/local/hiveid-ap /usr/local/hiveid-ap/backup
CONF=/home/pi/.node-red/settings.js
if [ -f $CONF ]; then 
    sudo cp $CONF /usr/local/hiveid-ap/backup/settings.$now.js
fi
cp /opt/hiveid-ap/node.settings.secure.js $CONF

sudo chown -R pi:pi /home/pi/.node-red

PWD_HASH=`echo -e "$IN_PWD\n" | node-red-admin hash-pw | sed -e "s/.*\s//g"`
sed -i -e "s/\[PASSWORD\]/$PWD_HASH/" /home/pi/.node-red/settings.js
sudo service nodered start