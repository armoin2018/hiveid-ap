#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./hiveid_update_lite_post.sh              ####
#### Description: Updates HiveID's scripts w/o Node   ####
#### Version:   20190829.001                          ####
##########################################################

sudo apt-get install -y qrencode 2>/dev/null
/opt/hiveid-ap/setup_links.sh
/opt/hiveid-ap/free_memory.sh