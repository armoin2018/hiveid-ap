#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./setup_shell_default.sh                  ####
#### Description: Sets up lxde                        ####
#### Version: 0.20190614                              ####
##########################################################

/opt/hiveid-ap/system_update.sh
sudo update-alternatives --set x-session-manager /usr/bin/startlxde-pi

echo "If you would like to see a list and change to another shell use the following command:"
echo "sudo update-alternatives --config x-session-manager"