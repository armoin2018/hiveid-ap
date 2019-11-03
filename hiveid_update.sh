#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./hiveid_update.sh BRANCH                 ####
#### Description: Updates HiveID's scripts            ####
#### Version:   20191103.001                          ####
####            20191103.001 Added URL Selection      ####
####            20191023.001 Added Branch Selection   ####
##########################################################

if [ -z "$1" ]; then 
    URL="https://github.com/armoin2018/hiveid-ap"
else 
    URL=$1
fi

if [ -z "$2" ]; then 
    BRANCH="master"
else 
    BRANCH=$2
fi

cd /opt/hiveid-ap/
git reset --hard
git pull --rebase $URL $BRANCH

sudo chown -R pi:pi /opt/hiveid-ap
sudo chmod +x /opt/hiveid-ap/*.sh
./setup_links.sh
./nodered_update.sh