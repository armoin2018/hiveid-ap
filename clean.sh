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
sudo rm -R /var/log/*.1 /var/log/*.gz
for i in $(find /var/log -type f); do sudo cat /dev/null > $i; done

echo "Clearing up other history files"
sudo rm /root/.bash_history
rm -rdf /home/pi/Downloads/* /root/Downloads/*
rm -rdf /home/pi/.local/share/Trash/info/* 

rm -rf  /home/pi/JMRI_UserFiles/roster/consist \
        /home/pi/.jmri/nodeIdentity.xml \
        /home/pi/.jmri/log/messages.log \
        /home/pi/.bash_history

find /home/pi/.jmri -name "*.bak" -type f -delete
find /home/pi/.jmri -name "jmri-*" -type d -print0|xargs -o rm -r --

#echo "Setting Empty space to zeros"
#cat /dev/zero >> zero.file;sync;rm zero.file;
echo "Completed" 