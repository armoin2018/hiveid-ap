#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./system_update.sh                        ####
#### Description: Updates OS                          ####
#### Version: 0.20190614                              ####
##########################################################


sudo apt-get clean
sudo rpi-update
export DEBIAN_FRONTEND=noninteractive
sudo apt-get update 
sudo apt-get upgrade -qq --force-yes 
sudo apt-get autoremove --yes
export DEBIAN_FRONTEND=dialog
echo "Please Reboot"