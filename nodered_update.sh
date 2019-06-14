#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./nodered_update.sh                       ####
#### Description: Updates Node Red                    ####
#### Version: 0.1                                     ####
##########################################################

cd /opt/hiveid-ap
./nodered_get_nodes.sh
php ./nodered_set_nodes.php
./nodred_set_flows.sh
