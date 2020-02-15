#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./hiveid_update_lite_post.sh              ####
#### Description: Updates HiveID's scripts w/o Node   ####
#### Version:   20200210.001                          ####
####            20200210.001 Fix for Java Rendering   ####
####            20190830.001 Added setcap change      ####
####            20190829.002                          ####
##########################################################

sudo setcap cap_net_raw,cap_net_admin+eip $(eval readlink -f `which node`)
sudo apt-get install -y qrencode libavahi-compat-libdnssd-dev 2>/dev/null
mkdir /var/www/html/qr /usr/local/hiveid-ap/cache &>/dev/null
sudo chown -R pi:pi /var/www/html/qr /usr/local/hiveid-ap/cache
/opt/hiveid-ap/setup_links.sh
/opt/hiveid-ap/free_memory.sh

#Fix Java Rendering on JMRI
sed -i -e "s/^default_options.*$/default_options=\"-Dpi4j.linking=dynamic -Dsun.java2d.xrender=false\"/g" /home/pi/.jmri/jmri.conf