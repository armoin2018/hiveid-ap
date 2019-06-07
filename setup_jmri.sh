#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./setup_jmri.sh                           ####
#### Description: Sets up basic JRMI                  ####
#### Version: 0.20190607                              ####
##########################################################
killall PanelPro
mkdir /home/pi/.config/autostart
cp PanelPro.desktop /home/pi/.config/autostart/.

sudo mkdir /opt/jmri /opt/jmri_backups 2>/dev/null
cd /opt
now=$(date +"%Y%m%d")
sudo rm /opt/jmri_backups/jmri_$now.tar.gz 2>/dev/null
sudo tar -zcvf jmri_$now.tar.gz jmri
sudo mv jmri_$now.tar.gz /opt/jmri_backups/.
cd /opt/jmri
sudo rm -rdf *
sudo wget https://github.com/JMRI/JMRI/releases/download/v4.14/JMRI.4.14+Rd060e0b.tgz
sudo tar -xvf *.tgz
sudo mv JMRI/* .
sudo rm -rdf JMRI
sudo rm /opt/jmri/*.tgz
sudo chown -R pi:pi /opt/jmri /home/pi
