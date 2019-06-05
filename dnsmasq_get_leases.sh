#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: sudo ./dnsmasq_get_leases.sh              ####
#### Description: Gets the DHCP Lists in a CSV        ####
#### Version: 0.1                                     ####
#### TODO:  Search for current file                   ####
##########################################################
LEASE_FILE=`find /. -name *.leases 2>/dev/null | head -1` 
cat /var/lib/misc/dnsmasq.leases | sed -e "s/\s/,/g"
