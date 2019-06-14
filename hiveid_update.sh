#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./hiveid_update.sh                        ####
#### Description: Updates HiveID's scripts            ####
#### Version: 0.3                                     ####
##########################################################

cd /opt/hiveid-ap/
git reset --hard
git pull --rebase
sudo chown -R pi:pi /opt/hiveid-ap
sudo chmod +x /opt/hiveid-ap/*.sh

./nodered_update.sh