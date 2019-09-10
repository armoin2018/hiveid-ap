#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./setup_jmri.sh                           ####
#### Description: Sets up basic JRMI                  ####
#### Version: 0.20190910                              ####
####          0.20190910 Changed to v4.17.3           ####
####          0.20190819 Added kill command           ####
####          0.20190812 Changed to v4.17.3           ####
####          0.20190705 Changed to v4.17.1           ####
##########################################################
killall PanelPro
kill -9 `pidof java`
mkdir /home/pi/.config/autostart 2>/dev/null
cp /opt/hiveid-ap/PanelPro.desktop /home/pi/.config/autostart/.

sudo mkdir /opt/jmri /opt/jmri_backups 2>/dev/null
cd /opt
now=$(date +"%Y%m%d")
sudo rm /opt/jmri_backups/jmri_$now.tar.gz 2>/dev/null
sudo tar -zcvf jmri_$now.tar.gz jmri
sudo mv jmri_$now.tar.gz /opt/jmri_backups/.
cd /opt/jmri
sudo rm -rdf *
#sudo wget https://github.com/JMRI/JMRI/releases/download/v4.17.3/JMRI.4.17.3+R12d2ded.tgz
sudo wget https://github.com/JMRI/JMRI/releases/download/v4.17.4/JMRI.4.17.4+Rbf0d1af.tgz
sudo tar -xvf *.tgz
sudo mv JMRI/* .
sudo rm -rdf JMRI
sudo rm /opt/jmri/*.tgz
sudo chown -R pi:pi /opt/jmri /home/pi
rm -rdf /home/pi/JMRI 2>/dev/null
ln -s /opt/jmri /home/pi/JMRI