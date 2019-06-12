#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./system_update.sh                        ####
#### Description: Updates OS                          ####
#### Version: 0.1                                     ####
##########################################################
sudo apt-get clean
sudo rpi-update
sudo apt-get update && sudo apt-get upgrade --yes && sudo apt-get autoremove --yes
echo "Reboot"