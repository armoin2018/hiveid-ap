#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: sudo ./dnsmasq_find_leases.sh             ####
#### Description: Find the active dnsmasq lease file  ####
#### Version: 0.1                                     ####
##########################################################

find /. -name *.leases 2>/dev/null | head -1