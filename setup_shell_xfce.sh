#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./setup_shell_xfce.sh                     ####
#### Description: Sets up xfce4                       ####
#### Version: 0.20190614                              ####
##########################################################

/opt/hiveid-ap/system_update.sh

export DEBIAN_FRONTEND=noninteractive
sudo apt-get install --force-yes xfce4 xfce4-goodies
export DEBIAN_FRONTEND=dialog

sudo update-alternatives --set x-session-manager /usr/bin/startxfce4

echo "If you would like to see a list and change to another shell use the following command:"
echo "sudo update-alternatives --config x-session-manager"