#!/bin/bash
cd /opt/hiveid-ap
./system_update.sh
apt-get install --yes git curl firefox-esr iw
apt-get install --yes lsof git apache2 php libapache2-mod-php php-mcrypt expect geoip-bin shellinabox needrestart
apt-get install --yes jython arduino arduino-mk
apt-get install --yes libbluetooth-dev libudev-dev pi-bluetooth

mkdir /usr/local/hiveid-ap /usr/local/hiveid-ap/backup /usr/local/hiveid-ap/ota /var/log/hiveid-ap /etc/hiveid-ap
chown -R pi:pi /usr/local/hiveid-ap /var/log/hiveid-ap 

setcap cap_net_raw+eip $(eval readlink -f `which node`)

pip install esptool
./apache_set_user.sh pi

./setup_node.sh

sed -i -e "s/SHELLINABOX_ARGS=.*/SHELLINABOX_ARGS=\"--no-beep -t\"/g" /etc/default/shellinabox
cd /opt
OPENRSD_BASE=/opt/openrsd
if [ -f $OPENRSD_BASE ]; then
    echo "OpenRSD is already installed"
else 
    git clone https://github.com/mitchellurgero/openrsd
fi

OPENRSD=/var/www/html/openrsd
if [ -f $OPENRSD ]; then 
    rm -rdf /var/www/html/openrsd
fi
ln -s /opt/openrsd /var/www/html/openrsd

cd /usr/local/hiveid-ap
wget https://github.com/esp8266/Arduino/raw/master/tools/espota.py

if grep -Fxq "local.hive-id.com" /etc/hosts; then
    echo "Local host reference found in hosts file"
else
    echo "192.168.2.1	local.hive-id.com" >>/etc/hosts
fi

CONF=/etc/hiveid-ap/conf.hiveid.json
if [ -f $CONF ]; then 
    echo "Existing hiveid configuration file found, skipping"
else 
    cp /opt/hiveid-ap/conf.hiveid.json /etc/hiveid-ap/.
fi

CONF=/etc/hiveid-ap/conf.traintraxx.json
if [ -f $CONF ]; then 
    echo "Existing TrainTraxx configuration file found, skipping"
else 
    cp /opt/hiveid-ap/conf.traintraxx.json /etc/hiveid-ap/.
fi

CONF=/etc/hiveid-ap/conf.jmri.json
if [ -f $CONF ]; then 
    echo "Existing JMRI configuration file found, skipping"
else 
    cp /opt/hiveid-ap/conf.jmri.json /etc/hiveid-ap/.
fi

cp /opt/hiveid-ap/index.php /var/www/html/.
rm /var/www/html/index.html
chown -R pi:pi /opt/hiveid-ap /opt/openrsd /usr/local/hiveid-ap /etc/hiveid-ap /var/www/html
