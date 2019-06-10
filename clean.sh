#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
####         M Steve Todd (From JMRI Image)           ####
#### Usage: ./clean.sh                                ####
#### Description: Clean up file system                ####
#### Version: 0.1                                     ####
##########################################################

echo "Clearing up apt files"
sudo apt-get autoremove --purge
sudo apt-get clean

echo "Clearing log files"
sudo rm /var/log/*.1 /var/log/*.gz /var/ 2>/dev/null
for i in $(find /var/log -type f); do sudo cat /dev/null > $i; done
for i in $(sudo find /var/log -type d); do sudo rm $i/*.1 $i/*.gz 2>/dev/null; done

echo "Clearing up other history files"
sudo rm /root/.bash_history 2>/dev/null
rm -rdf /home/pi/Downloads/* /root/Downloads/* 2>/dev/null
rm -rdf /home/pi/.local/share/Trash/info/* 2>/dev/null

rm -rf  /home/pi/JMRI_UserFiles/roster/consist \
        /home/pi/.jmri/nodeIdentity.xml \
        /home/pi/.jmri/log/messages.log \
        /home/pi/.bash_history 2>/dev/null

find /home/pi/.jmri -name "*.bak" -type f -delete
find /home/pi/.jmri -name "jmri-*" -type d -print0|xargs -0 rm -r --

#echo "Setting Empty space to zeros"
#cat /dev/zero >> zero.file;sync;rm zero.file;
echo "Completed" 