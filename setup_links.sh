#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./setup_links.sh                          ####
#### Description: Sets up links to web folders        ####
#### Version: 0.20190617                              ####
##########################################################

sudo mkir /var/ww/html 2>/dev/null
sudo rm /var/www/html/index.html 2>/dev/null
sudo chown -R pi:pi /opt/hiveid-ap /opt/openrsd /usr/local/hiveid-ap /etc/hiveid-ap /var/www/html

ln -s /opt/hiveid-ap/nodered/index.php /var/www/html/index.php 2>/dev/null
ln -s /opt/hiveid-ap/nodered/processing.php /var/www/html/processing.php 2>/dev/null
ln -s /opt/hiveid-ap/nodered/images /var/www/html/images 2>/dev/null
ln -s /opt/hiveid-ap/nodered/css /var/www/html/css 2>/dev/null
ln -s /opt/hiveid-ap/nodered/scripts /var/www/html/scripts 2>/dev/null

sudo rm /usr/share/plymouth/themes/pix/splash.png
sudo ln -s /opt/hiveid-ap/nodered/images/hiveid.png /usr/share/plymouth/themes/pix/splash.png 2>/dev/null