#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./set_desktop.sh [key] [value]            ####
#### Description: Sets up desktop values              ####
#### Version: 0.20190705                              ####
##########################################################
if [ -z "$2" ]; then 
    echo "No argument supplied"
    echo "Usage: ./set_desktop [key] [value]"
    exit;
else 
    KEY=$1
    VAL=`echo $2 | sed -e "s@\/@\\\\\/@g"`
fi

sed -i -e "s/$KEY\=.*$/$KEY=$VAL/" ~/.config/pcmanfm/LXDE-pi/desktop-items-0.conf