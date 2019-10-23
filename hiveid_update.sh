#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./hiveid_update.sh BRANCH                 ####
#### Description: Updates HiveID's scripts            ####
#### Version:   20191023.001                          ####
####            20191023.001 Added Branch Selection   ####
##########################################################

if [ -z "$1" ]; then 
    BRANCH="master"
else 
    BRANCH=$1
fi

cd /opt/hiveid-ap/
git reset --hard
git pull --rebase https://github.com/armoin2018/hiveid-ap $BRANCH

sudo chown -R pi:pi /opt/hiveid-ap
sudo chmod +x /opt/hiveid-ap/*.sh
./setup_links.sh
./nodered_update.sh