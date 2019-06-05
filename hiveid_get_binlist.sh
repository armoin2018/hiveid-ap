#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: sudo ./hiveid_get_binlist.sh              ####
#### Description: Gets currently downloaded firmware  ####
#### Version: 0.1                                     ####
#### TODO:  Add flexibility for different versions    ####
####        watch directory instead of using this     ####
##########################################################
cd /usr/local/hiveid-ap/ota
ls -1ra *.bin | grep "AutoConnect" | sed -e "s/AutoConnect\.//p" | sed -e "s/\.bin//p" | head -1
