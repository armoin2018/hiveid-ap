#!/bin/bash
##################################################################################
#### Author: Blaine McDonnell (blaine@armoin.com)                             ####
#### Usage: ./hiveid_set_binByUSB.sh BinaryFile                               ####
#### Description: Attempts to put the firmware on all attached USB devices    ####
#### Version: 0.20190624                                                      ####
#### 	0.20190624	Moved esptool.py                                          ####
#### 	0.20190625	Changed Perms on log folder                               ####
#### 				Forced Exit 0/1 - failures expected                       ####
##################################################################################

FILE=$1
sudo chown -R pi:pi /var/log/hiveid-ap

if [ -f $FILE ]; then
	for PORT in $(ls /dev/ttyUSB*) 
	do	
		echo "Trying to update $PORT with $FILE"
		python /home/pi/.local/bin/esptool.py --port $PORT write_flash --flash_mode dio --flash_size detect 0x0 $FILE 2> /var/log/hiveid-ap/firmware.update.log
	done
	exit 0
else
	echo "File $FILE does not exist."
	exit 1
fi
