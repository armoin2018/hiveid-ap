#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./change_pwd.sh <password>                ####
#### Description: Clean up file system                ####
#### Version: 0.20190614                              ####
##########################################################

if [ -z "$1" ]; then 
    echo "You must provide a password"
    echo "Usage: sudo ./change_pwd.sh PASSWORD"
    exit;
else 
    PWD=$1
fi

echo -e "$PWD\n$PWD\n" | passwd pi
echo -e "$PWD\n$PWD\n" | vncpasswd -service 

/opt/hiveid-ap/nodered_secure.sh $PWD
