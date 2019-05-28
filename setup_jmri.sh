#!/bin/bash
killall PanelPro
mkdir /home/pi/.config/autostart
cp PanelPro.desktop /home/pi/.config/autostart/.
#mkdir /home/pi/.config/lxsession /home/pi/.config/lxsession/LXDE-pi
#cp autostart /home/pi/.config/lxsession/LXDE-pi/.
sudo mkdir /opt/jmri /opt/jmri_backups 2>/dev/null
cd /opt
now=$(date +"%Y%m%d")
sudo rm /opt/jmri_backups/jmri_$now.tar.gz
sudo tar -zcvf /opt/jmri_backups/jmri_$now.tar.gz /opt/jmri
cd /opt/jmri
sudo rm -rdf *
sudo wget https://github.com/JMRI/JMRI/releases/download/v4.14/JMRI.4.14+Rd060e0b.tgz
sudo tar -xvf *.tgz
sudo mv JMRI/* .
sudo rm -rdf JMRI
sudo chown -R pi:pi /opt/jmri /home/pi
