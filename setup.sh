#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./setup.sh                                ####
#### Description: Installs all packages               ####
#### Version: 0.20190617                              ####
##########################################################
cd /opt/hiveid-ap

/opt/hiveid-ap/system_update.sh

export DEBIAN_FRONTEND=noninteractive
sudo apt-get install --qq --force-yes git curl firefox-esr iw at
sudo apt-get install --qq --force-yes lsof apache2 php libapache2-mod-php php-mcrypt expect geoip-bin shellinabox needrestart
sudo apt-get install --qq --force-yes jython arduino arduino-mk
sudo apt-get install --qq --force-yes libbluetooth-dev libudev-dev pi-bluetooth
suod apt-get install --qq --force-yes bleachbit
export DEBIAN_FRONTEND=dialog


sudo mkdir /usr/local/hiveid-ap /usr/local/hiveid-ap/backup /usr/local/hiveid-ap/ota /var/log/hiveid-ap /etc/hiveid-ap
sudo chown -R pi:pi /usr/local/hiveid-ap /var/log/hiveid-ap 
sudo chmod -R 666 /var/log/hiveid-ap
sudo setcap cap_net_raw+eip $(eval readlink -f `which node`)

pip install esptool
./apache_set_user.sh pi



sudo sed -i -e "s/SHELLINABOX_ARGS=.*/SHELLINABOX_ARGS=\"--no-beep -t\"/g" /etc/default/shellinabox
cd /opt
OPENRSD_BASE=/opt/openrsd
if [ -f $OPENRSD_BASE ]; then
    echo "OpenRSD is already installed"
else 
    sudo git clone https://github.com/mitchellurgero/openrsd
fi

OPENRSD=/var/www/html/openrsd
if [ -f $OPENRSD ]; then 
    sudo rm -rdf /var/www/html/openrsd
fi
sudo ln -s /opt/openrsd /var/www/html/openrsd

cd /usr/local/hiveid-ap
wget https://github.com/esp8266/Arduino/raw/master/tools/espota.py

CNT=`grep "local.hive-id.com" /etc/hosts`
if [[ "$CNT" -eq "0" ]]; then
    sudo echo "192.168.2.1	local.hive-id.com" >>/etc/hosts
else 
    echo "Local host reference found in hosts file"
fi

CONF=/etc/hiveid-ap/conf.hiveid.json
if [ -f $CONF ]; then 
    echo "Existing hiveid configuration file found, skipping"
else 
    sudo cp /opt/hiveid-ap/conf.hiveid.json /etc/hiveid-ap/.
fi

CONF=/etc/hiveid-ap/conf.traintraxx.json
if [ -f $CONF ]; then 
    echo "Existing TrainTraxx configuration file found, skipping"
else 
    sudo cp /opt/hiveid-ap/conf.traintraxx.json /etc/hiveid-ap/.
fi

CONF=/etc/hiveid-ap/conf.jmri.json
if [ -f $CONF ]; then 
    echo "Existing JMRI configuration file found, skipping"
else 
    sudo cp /opt/hiveid-ap/conf.jmri.json /etc/hiveid-ap/.
fi

CNT=`grep "net.ifnames" /boot/cmdline.txt`
if [[ "$CNT" -eq "0" ]]; then
    sudo sed -i -e "s/$/ net.ifnames=0/" /boot/cmdline.txt
fi

pcmanfm --set-wallpaper=/opt/hiveid-ap/nodered/images/hiveid.png --wallpaper-mode=screen

cd /opt/hiveid-ap
./setup_links.sh
./setup_node.sh
./hiveid_set_wifi2eth.sh

echo "Please Reboot"