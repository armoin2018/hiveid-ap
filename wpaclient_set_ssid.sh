#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: wpaclient_set_ssid.sh [SSID]              ####
#### Description: Updates SSID                        ####
#### Version: 0.1                                     ####
##########################################################
SSID=$1

if [ "$SSID" == "" ]; then 
    SSID=$HOSTNAME
fi
sudo sed -i "s/ssid=\".*\"$/ssid=\"$SSID\"/g" /etc/wpa_supplicant/wpa_supplicant.conf
