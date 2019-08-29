#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
####         M Steve Todd (From JMRI Image)           ####
#### Usage: ./clean.sh                                ####
#### Description: Clean up file system                ####
#### Version: 0.20190829                              ####
####          0.20190829 Added Removal of images & qr ####
####          0.20190812                              ####
##########################################################

echo "Clearing up apt files"
sudo apt-get autoremove --purge
sudo apt-get clean

echo "Clearing log files"
sudo rm /var/log/*.1 /var/log/*.gz /var/ 2>/dev/null
for i in $(sudo find /var/log -type f); do sudo cat /dev/null > $i; done
for i in $(sudo find /var/log -type d); do sudo rm $i/*.1 $i/*.gz 2>/dev/null; done

echo "Clearing up other history files"
sudo rm -rf /root/.bash_history 2>/dev/null
rm -rdf /home/pi/Downloads/* /root/Downloads/* \
        /home/pi/.local/share/Trash/info/* \
        /home/pi/.node-red/context/ \
        /usr/local/hiveid-ap/backup/* \
        /usr/local/hiveid-ap/backups/* \
        /usr/local/hiveid-ap/staging/* \
        /usr/local/hiveid-ap/staging_backup/* \
        /var/www/html/imageCache/* \
        /var/www/html/qr/* \
        /usr/local/hiveid-ap/cache/* 2>/dev/null

rm -rf  /home/pi/JMRI_UserFiles/roster/consist \
        /home/pi/.jmri/nodeIdentity.xml \
        /home/pi/.jmri/log/messages.log \
        /home/pi/.bash_history 2>/dev/null

cp /opt/hiveid-ap/*.json /etc/hiveid-ap/.
find /home/pi/.jmri -name "*.bak" -type f -delete
for i in $(find /home/pi/.jmri -name "jmri-*" -type d); do rm -r $i 2>/dev/null; done

#echo "Setting Empty space to zeros"
#cat /dev/zero >> zero.file;sync;rm zero.file;
echo "Completed" 