#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./hiveid_update_lite.sh BRANCH            ####
#### Description: Updates HiveID's scripts w/o Node   ####
#### Version:   20191023.001                          ####
####            20191023.001 Added Branch Selection   ####
####            20190829.001 Added qrencode & post    ####
####            20190821.001 Added File Syncs as well ####
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
cp /opt/hiveid-ap/nodered/change_log.html /var/www/html/. 2>/dev/null
cp /opt/hiveid-ap/nodered/index.php /var/www/html/. 2>/dev/null
cp /opt/hiveid-ap/nodered/notavailable.html /var/www/html/. 2>/dev/null
cp /opt/hiveid-ap/nodered/processing.php /var/www/html/. 2>/dev/null

sudo chown -R pi:pi /var/www/html/*
sudo chown -R pi:pi /home/pi/.node-red/*
/opt/hiveid-ap/hiveid_update_lite_post.sh