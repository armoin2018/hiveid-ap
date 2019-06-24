#!/bin/bash
##################################################################################
#### Author: Blaine McDonnell (blaine@armoin.com)                             ####
#### Usage: ./hiveid_set_binByUSB.sh BinaryFile                               ####
#### Description: Attempts to put the firmware on all attached USB devices    ####
#### Version: 0.20190624                                                      ####
#### 	0.20190624	Moved esptool.py                                          ####
##################################################################################

FILE=$1
if [ -f $FILE ]; then
	for PORT in $(ls /dev/ttyUSB*) 
	do	
		echo "Trying to update $PORT with $FILE"
		python /home/pi/.local/bin/esptool.py --port $PORT write_flash --flash_mode dio --flash_size detect 0x0 $FILE 2> /var/log/hiveid-ap/firmware.update.log
	done
else
	echo "File $FILE does not exist."
fi
