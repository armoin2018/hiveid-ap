#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./hostapd_get_cnl.sh                      ####
#### Description: Gets the WiFi Channell for hostapd  ####
#### Version: 0.1 (Depricated)                        ####
##########################################################
cat /etc/hostapd/hostapd.conf |grep channel |sed -e "s/channel\=//g"
