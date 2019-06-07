#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: wpaclient_set_psk.sh [passphrase]         ####
#### Description: Updates Passphrase                  ####
#### Version: 0.1                                     ####
##########################################################
PSK=$1
if [ "$PSK" == "" ]; then
    PSK="password"
fi

sudo sed -i "s/psk=\".*\"$/psk=\"$PSK\"/g" /etc/wpa_supplicant/wpa_supplicant.conf
