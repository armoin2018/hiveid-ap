#!/bin/bash
##################################################################################
#### Author: Blaine McDonnell (blaine@armoin.com)                             ####
#### Usage: ./hiveid_set_binByUSB.sh BinaryFile                               ####
#### Description: Attempts to put the firmware on all attached USB devices    ####
#### Version: 0.2                                                             ####
##################################################################################

FILE=$1
if [ -f $FILE ]; then
	for PORT in $(ls /dev/ttyUSB*) 
	do
		python /usr/local/bin/esptool.py --port $PORT write_flash --flash_mode dio --flash_size detect 0x0 $FILE 2> /var/log/hiveid-ap/firmware.update.log
	done
else
	echo "File $FILE does not exist."
fi
