#!/bin/bash
##################################################################
#### Author: Blaine McDonnell (blaine@armoin.com)             ####
#### Usage: ./hiveid_get_newbin                               ####
#### Description: Gets the latest and greatest binary file    ####
#### Version: 0.1                                             ####
##################################################################

find /usr/local/hiveid-ap/ota/Auto*.bin | sort -r | head -1