#!/bin/bash
cp PanelPro.desktop /home/pi/.config/autostart/.
#mkdir /home/pi/.config/lxsession /home/pi/.config/lxsession/LXDE-pi
#cp autostart /home/pi/.config/lxsession/LXDE-pi/.
cd /opt/
mkdir jmri
cd /opt/jmri
wget https://github.com/JMRI/JMRI/releases/download/v4.14/JMRI.4.14+Rd060e0b.tgz
tar -xvf *.tgz
rm *.tgz
mv JMRI/* .
rm -rdf JMRI
chown -R pi:pi /opt/jmri
