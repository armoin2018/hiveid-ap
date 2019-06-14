#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./hiveid_update_lite.sh                   ####
#### Description: Updates HiveID's scripts w/o Node   ####
#### Version: 0.1                                     ####
##########################################################

cd /opt/hiveid-ap/
git reset --hard
git pull --rebase
sudo chown -R pi:pi /opt/hiveid-ap
sudo chmod +x /opt/hiveid-ap/*.sh
