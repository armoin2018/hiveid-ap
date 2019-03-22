#!/bin/bash
# Usage: hiveid_set_binByUSB.sh BinaryFile
FILE=$1
if [ -f $FILE ]; then
	for PORT in $(ls /dev/ttyUSB*) 
	do
		python /usr/local/bin/esptool.py --port $PORT write_flash --flash_mode dio --flash_size detect 0x0 $FILE 2> /opt/hiveid-ap/log/firmware.update.log
	done
else
	echo "File $FILE does not exist."
fi
