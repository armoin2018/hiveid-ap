#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./system_get_ip.sh                        ####
#### Description: Gets IP address (depricated)        ####
#### Version: 0.20190705                              ####
####          0.20190705 Added wildcard for network   ####
##########################################################
/bin/hostname -I | sed -e "s/\s192\.168\.\d*\.1//g"
