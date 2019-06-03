#!/bin/bash
sudo service nodered stop
sudo mkdir /usr/local/hiveid-ap /usr/local/hiveid-ap/backup
CONF=/home/pi/.node-red/settings.js
if [ -f $CONF ]; then 
    sudo cp $CONF /usr/local/hiveid-ap/backup/settings.$now.js
fi
cp /opt/hiveid-ap/node.settings.js $CONF

# TODO: Create User Authentication
#CONF=/home/pi/.node-red/user-authentication.js
#if [ -f $CONF ]; then 
#    sudo cp $CONF /usr/local/hiveid-ap/backup/user-authentication.$now.js
#fi
#cp /opt/hiveid-ap/node.user-authentication.js $CONF

sudo chown -R pi:pi /home/pi/.node-red
sudo service nodered start