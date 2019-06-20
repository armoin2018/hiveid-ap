#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./system_fix_locale.sh                    ####
#### Description: Fixes Locale issues with system     ####
#### Version: 0.20190620                              ####
##########################################################
sudo echo "LC_ALL=en_US.UTF-8" >> /etc/environment
sudo echo "en_US.UTF-8 UTF-8" >> /etc/locale.gen
sudo echo "LANG=en_US.UTF-8" > /etc/locale.conf
sudo locale-gen en_US.UTF-8