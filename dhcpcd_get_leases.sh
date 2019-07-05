#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: sudo ./dhcpcd_get_leases.sh [LEASE_FILE]  ####
#### Description: Gets the DHCP Lists in a CSV        ####
####              This is to support Legacy flows     ####
#### Version: 0.20190705                              ####
##########################################################
if [ -z "$1" ]; then 
    LEASE_FILE=`/opt/hiveid-ap/dnsmasq_find_leases.sh`
else 
    LEASE_FILE=$1
fi

/opt/hiveid-ap/dnsmasq_get_leases.sh $LEASE_FILE