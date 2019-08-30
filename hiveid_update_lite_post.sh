#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./hiveid_update_lite_post.sh              ####
#### Description: Updates HiveID's scripts w/o Node   ####
#### Version:   20190830.001                          ####
####            20190830.001 Added setcap change      ####
####            20190829.002                          ####
##########################################################

sudo setcap cap_net_raw,cap_net_admin+eip $(eval readlink -f `which node`)
sudo apt-get install -y qrencode 2>/dev/null
mkdir /var/www/html/qr/ /usr/local/hiveid-ap/cache 2>/dev/null
sudo chown -R pi:pi /var/www/html/qr /usr/local/hiveid-ap/cache
/opt/hiveid-ap/setup_links.sh
/opt/hiveid-ap/free_memory.sh