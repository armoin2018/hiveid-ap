#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./nodered_unsecure.sh                     ####
#### Description: Sets Node-Red to a default unsecure ####
####              Configuration during upgrade script ####
#### Version: 0.20190618                              ####
##########################################################

CONF=/home/pi/.node-red/settings.js
UNSECURE_SOURCE=/opt/hiveid-ap/node.settings.unsecure.js

SECURE_TEMP=/home/pi/.node-red/secure.settings.js

CMP=`cmp $CONF $UNSECURE_SOURCE | wc -l | sed "s/ *//g"`
if [[ "$CMP" -eq "0" ]]; then
    echo "Node-Red is already set to unsecure"
    cp $CONF $SECURE_TEMP
else
    echo "Stoping Node-Red Service"
    sudo service nodered stop

    if [ -e $SECURE_TEMP ]; then 
        CMP=`cmp $CONF $SECURE_TEMP | wc -l | sed "s/ *//g"`
        if [[ $CMP -gt 0 ]]; then
            echo "Secure Node-Red setting backup being replaced"
            cp $CONF $SECURE_TEMP
        else
            echo "Secure Node-Red settings are the same as the backup"
        fi
    else
        echo "Secure file being created"
        cp $CONF $SECURE_TEMP
    fi
    echo "Putting unsecure configuration in place"
    cp $UNSECURE_SOURCE $CONF

    sudo chown -R pi:pi /home/pi/.node-red
    echo "Restart Node-Red"
fi