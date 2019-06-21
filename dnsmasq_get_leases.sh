#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: sudo ./dnsmasq_get_leases.sh [LEASE_FILE] ####
#### Description: Gets the DHCP Lists in a CSV        ####
#### Version: 0.2                                     ####
#### TODO:  Search for current file                   ####
##########################################################

if [ -z "$1" ]; then 
    LEASE_FILE=`/opt/hiveid-ap/dnsmasq_find_leases.sh`
else 
    LEASE_FILE=$1
fi

cat $LEASE_FILE | sed -e "s/\s/,/g"
