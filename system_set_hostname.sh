#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./system_set_hostname.sh Hostname         ####
#### Description: Updates hostname                    ####
#### Version: 0.1                                     ####
##########################################################

DATE=`date '+%Y%m%d%H%M%S'`
NEW_HOST=$1
if [ "$NEW_HOST" == "" ]; then
    echo "A hostname is required to complete this action"
    echo "Usage: ./system_set_hostname.sh Hostname"
    exit 1
fi

sudo mkdir /usr/local/hiveid-ap/ /usr/local/hiveid-ap/backups /usr/local/hiveid-ap/backups/$DATE 2>/dev/null
sudo chown -R pi:pi /usr/local/hiveid-ap/ /usr/local/hiveid-ap/backups /usr/local/hiveid-ap/backups/$DATE
sudo cp /etc/hostname /etc/dhcpcd.conf /etc/hostapd/hostapd.conf /etc/hosts /usr/local/hiveid-ap/backups/$DATE/.

sudo echo $NEW_HOST > /etc/hostname

sudo sed -i "s/^hostname.*$/hostname $NEW_HOST/g" /etc/dhcpcd.conf
sudo sed -i "s/^ssid=.*$/ssid=$NEW_HOST/g" /etc/hostapd/hostapd.conf
sudo sed -i "s/^127\.0\.1\.1.*$/127.0.1.1\t$NEW_HOST/g" /etc/hosts

echo "Reboot for changes to take effect"