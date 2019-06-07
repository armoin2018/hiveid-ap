#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./systemsystem_get_ssidList.sh            ####
#### Description: Gets list of available SSIDs        ####
#### Version: 0.1 (depricated)                        ####
##########################################################
iwlist wlan0 scan | grep ESSID | sed -En "s/\s*\t*ESSID\:\"(.*)\"/\1/p" | grep -v "\\x00" | grep -v -e "^$"  | uniq
