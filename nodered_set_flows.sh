#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./nodered_set_flows.sh                    ####
#### Description: Updates flows                       ####
#### Version: 0.20190703                              ####
####   0.20190624  Added free_memory.sh               ####
####   0.20190703  Changed conditions to handle init  ####
##########################################################

sudo service nodered stop
sudo /opt/hiveid-ap/free_memory.sh

echo "Setting the flows"
CONF=/home/pi/.node-red/flows_$HOSTNAME.json
LINE_DIFF=`diff /opt/hiveid-ap/node.flows.js $CONF | wc -l`
if [ ! -f $CONF ]; then 
    echo "Installing initial HiveID Flows"
    cp /opt/hiveid-ap/node.flows.js $CONF
else
    if [ "$LINE_DIFF" -eq "0" ]; then 
        echo "Skipping flow updates"
    else
        echo "Backing up existing flows and installing new flows"
        sudo cp $CONF /usr/local/hiveid-ap/backups/$DATE/.
        cp /opt/hiveid-ap/node.flows.js $CONF
    fi
fi

sudo chown -R pi:pi /home/pi/.node-red

npm cache clean --force
npm cache verify

sudo service nodered start
exit 0