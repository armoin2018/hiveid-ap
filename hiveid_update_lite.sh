#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./hiveid_update_lite.sh                   ####
#### Description: Updates HiveID's scripts w/o Node   ####
#### Version:   20190821.001                          ####
####            20190821.001 Added File Syncs as well ####
##########################################################

cd /opt/hiveid-ap/
git reset --hard
git pull --rebase
sudo chown -R pi:pi /opt/hiveid-ap
sudo chmod +x /opt/hiveid-ap/*.sh
cp /opt/hiveid-ap/nodered/change_log.html /var/www/html/.
cp /opt/hiveid-ap/nodered/index.php /var/www/html/.
cp /opt/hiveid-ap/nodered/notavailable.html /var/www/html/.
cp /opt/hiveid-ap/nodered/processing.php /var/www/html/.
sudo chown -R pi:pi /var/www/html/*