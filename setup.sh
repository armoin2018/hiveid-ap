#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./setup.sh                                ####
#### Description: Installs all packages               ####
#### Version: 0.20190705                              ####
####          0.20190705  Removed apt-get --force-yes ####
##########################################################
cd /opt/hiveid-ap

/opt/hiveid-ap/system_update.sh

export DEBIAN_FRONTEND=noninteractive
sudo apt-get install --yes git curl firefox-esr iw at network-manager
sudo apt-get install --yes lsof apache2 php libapache2-mod-php php-mcrypt expect geoip-bin shellinabox needrestart
sudo apt-get install --yes jython arduino arduino-mk
sudo apt-get install --yes libbluetooth-dev libudev-dev pi-bluetooth
sudo apt-get install --yes bleachbit
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

CNT=`grep "net.ifnames" /boot/cmdline.txt | wc -l`
if [[ "$CNT" -eq "0" ]]; then
    sudo sed -i -e "s/$/ net.ifnames=0 ipv6.disable=1/" /boot/cmdline.txt
fi

/opt/hiveid-ap/set_desktop.sh wallpaper "/opt/hiveid-ap/nodered/images/hiveid.png" 
/opt/hiveid-ap/set_desktop.sh wallpaper_mode fit
/opt/hiveid-ap/set_desktop.sh desktop_bg "#FF9900"
/opt/hiveid-ap/set_desktop.sh desktop_shadow "#FF9900"

/opt/hiveid-ap/setup_links.sh
/opt/hiveid-ap/setup_node.sh

echo "Please Reboot"