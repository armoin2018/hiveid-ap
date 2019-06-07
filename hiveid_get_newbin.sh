#!/bin/bash
##################################################################
#### Author: Blaine McDonnell (blaine@armoin.com)             ####
#### Usage: ./hiveid_get_newbin                               ####
#### Description: Gets the latest and greatest binary file    ####
#### Version: 0.1                                             ####
##################################################################
cd /usr/local/hiveid-ap/ota
ls -1rt Auto*.bin | head -1