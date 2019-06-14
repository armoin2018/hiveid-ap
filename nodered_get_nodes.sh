#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./nodered_get_nodes.sh                    ####
#### Description: Gets the installed nodes            ####
####              Temporarily unsecures so we don't   ####
####              Store passwords                     ####
#### Version: 0.1                                     ####
##########################################################

echo "Unsecuring Node Red Temporarily"

sudo service nodered stop
cp ~/.node-red/settings.js ~/.node-red/settings.js.temp
cp /opt/hiveid-ap/node.settings.unsecure.js ~/.node-red/settings.js
sudo service nodered start

echo "Extracting Node List"
node-red-admin list > ~/.node-red/nodes.list

echo "Restoring configuration and restarting Node Red"
sudo service nodered stop
cp ~/.node-red/settings.js.temp ~/.node-red/settings.js
sudo service nodered start