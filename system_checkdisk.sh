#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./system_checkdisk.sh [TRUE|FALSE]        ####
#### Description: Runs checkdisk on the boot drive    ####
#### Version: 0.20190620                              ####
##########################################################
IS_ENABLED=$1
if [ "$IS_ENABLED" == "" ]; then
    IS_ENABLED="TRUE"
fi

if [ "$IS_ENABLED" == "TRUE" ]; then
    sudo sed -i -e "s/$/ fsck.mode=force fsck.repair=yes/" /boot/cmdline.txt 
else
    sudo sed -i -e "s/\sfsck\.mode\=force\sfsck\.repair\=yes//" /boot/cmdline.txt 
fi