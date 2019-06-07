#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./system_get_ip.sh                        ####
#### Description: Gets IP address (depricated)        ####
#### Version: 0.1                                     ####
##########################################################
/bin/hostname -I | sed -e "s/\s192\.168\.2\.1//g"
