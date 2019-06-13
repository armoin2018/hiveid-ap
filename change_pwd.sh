#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./change_pwd.sh <password>                ####
#### Description: Clean up file system                ####
#### Version: 0.1                                     ####
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

sudo ./nodered_secure.sh $PWD
