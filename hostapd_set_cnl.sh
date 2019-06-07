#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./hostapd_set_cnl.sh [Channel]            ####
#### Description: Sets the WiFi Channell for hostapd  ####
#### Version: 0.1 (Depricated)                        ####
##########################################################

CNL=$1

if [ "$CNL" == "" ]; then
    CNL=11
fi

sudo sed -i "s/channel=.*$/channel=$CNL/g" /etc/hostapd/hostapd.conf
sudo service hostapd restart
