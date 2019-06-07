#!/bin/bash
##################################################################
#### Author: Blaine McDonnell (blaine@armoin.com)             ####
#### Usage: ./apache_set_user.sh [USER]                       ####
#### Description: Sets the user that will run apache          ####
#### Version: 0.2                                             ####
##################################################################
USER=$1

if [ "$USER" == "" ]; then 
    USER="pi"
fi
sudo sed -i "s/^export APACHE_RUN_USER.*$/export APACHE_RUN_USER=$USER/g" /etc/apache2/envvars
sudo sed -i "s/^export APACHE_RUN_GROUP.*$/export APACHE_RUN_GROUP=$USER/g" /etc/apache2/envvars
sudo service apache2 restart
