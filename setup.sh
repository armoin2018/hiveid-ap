#!/bin/bash
cd /opt/hiveid-ap
./update_system.sh
apt-get install --yes git curl npm firefox-esr iwlist
apt-get install --yes lsof git apache2 php libapache2-mod-php php-mcrypt expect geoip-bin shellinabox needrestart
apt-get install --yes nodered
apt-get install --yes arduino aduino-mk
apt-get install --yes libbluetooth-dev libudev-dev pi-bluetooth

mkdir /usr/local/hiveid-ap /usr/local/hiveid-ap/backup /usr/local/hiveid-ap/ota /var/log/hiveid-ap
chown -R pi:pi /usr/local/hiveid-ap /var/log/hiveid-ap 

setcap cap_net_raw+eip $(eval readlink -f `which node`)
npm install -g noble
systemctl enable nodered.service
pip install esptool
npm install -g node-red-admin
./apache_set_user.sh pi
php ./nodered_set_nodes.php
wget https://github.com/esp8266/Arduino/raw/master/tools/espota.py
sed -i -e "s/SHELLINABOX_ARGS=.*/SHELLINABOX_ARGS=\"--no-beep -t\"/g" /etc/default/shellinabox
cd /opt
git clone https://github.com/mitchellurgero/openrsd
ln -s /opt/openrsd /var/www/html/openrsd

chown -R pi:pi /opt/hiveid-ap /opt/openrsd
echo "192.168.2.1	local.hive-id.com" >>/etc/hosts
mkdir /etc/hiveid-ap
cp /opt/hiveid-ap/config.json /etc/hiveid-ap/. 
chown -R pi:pi /etc/hiveid-ap
