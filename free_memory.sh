#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: sudo ./free_memory.sh                     ####
#### Description: Free memory on Debian systems       ####
#### Version: 0.1                                     ####
##########################################################
sync 
echo 3 > /proc/sys/vm/drop_caches
free -m