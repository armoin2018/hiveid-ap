#!/bin/bash
killall PanelPro
mkdir /home/pi/.config/autostart
cp PanelPro.desktop /home/pi/.config/autostart/.
#mkdir /home/pi/.config/lxsession /home/pi/.config/lxsession/LXDE-pi
#cp autostart /home/pi/.config/lxsession/LXDE-pi/.
sudo mkdir /opt/jmri
cd /opt/jmri
sudo wget https://github.com/JMRI/JMRI/releases/download/v4.14/JMRI.4.14+Rd060e0b.tgz
sudo tar -xvf *.tgz
sudo rm -rdf *
sudo mv JMRI/* .
sudo rm -rdf JMRI
sudo chown -R pi:pi /opt/jmri /home/pi
