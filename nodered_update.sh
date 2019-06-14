#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./nodered_update.sh                       ####
#### Description: Updates Node Red                    ####
#### Version: 0.1                                     ####
##########################################################

./nodered_get_nodes.sh
php ./nodered_set_nodes.php
./nodred_set_flows.sh
