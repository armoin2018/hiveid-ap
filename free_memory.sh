#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./free_memory.sh                     ####
#### Description: Free memory on Debian systems       ####
#### Version: 0.1                                     ####
##########################################################
sudo sync 
sudo echo 3 > /proc/sys/vm/drop_caches 2>/dev/null
sudo free -m