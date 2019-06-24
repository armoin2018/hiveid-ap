#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./nodered_set_flows.sh                    ####
#### Description: Updates flows                       ####
#### Version: 0.20190624                              ####
####   0.20190624  Added free_memory.sh               ####
##########################################################

sudo service nodered stop
sudo /opt/hiveid-ap/free_memory.sh

CONF=/home/pi/.node-red/flows_$HOSTNAME.json

LINE_DIFF=`diff /opt/hiveid-ap/node.flows.js $CONF | wc -l`

if [ "$LINE_DIFF" -eq "0" ]; then 
    echo "Skipping flow updates"
    exit 0
fi

if [ -f $CONF ]; then 
    sudo cp $CONF /usr/local/hiveid-ap/backups/$DATE/.
fi 
cp /opt/hiveid-ap/node.flows.js $CONF

sudo chown -R pi:pi /home/pi/.node-red

sudo service nodered start
exit 0