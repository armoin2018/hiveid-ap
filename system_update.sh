#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./system_update.sh                        ####
#### Description: Updates OS                          ####
#### Version: 0.20190705                              ####
####          0.20190705 Removed apt-get --force-yes  ####
##########################################################


sudo apt-get clean
sudo rpi-update
export DEBIAN_FRONTEND=noninteractive
sudo apt-get update --allow-releaseinfo-change
sudo apt-get upgrade --yes 
sudo apt-get autoremove --yes
export DEBIAN_FRONTEND=dialog
echo "Please Reboot"