#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: sudo ./dhcpcd_get_leases.sh [LEASE_FILE]  ####
#### Description: Gets the DHCP Lists in a CSV        ####
####              This is to support Legacy flows     ####
#### Version: 2.0                                     ####
##########################################################
if [ -z "$1" ]; then 
    LEASE_FILE=`/opt/hiveid-ap/dnsmsq_find_leases.sh`
else 
    LEASE_FILE=$1
fi

cd /opt/hiveid-ap
./dnsmasq_get_leases.sh $LEASE_FILE