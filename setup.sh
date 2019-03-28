#!/bin/bash
cd /opt/hiveid-ap
mkdir backup log nodered nodered/backups ota
./update_system.sh
apt-get install --yes git curl npm firefox-esr iwlist
apt-get install --yes lsof git apache2 php libapache2-mod-php php-mcrypt expect geoip-bin shellinabox needrestart
apt-get install --yes nodered
apt-get install --yes arduino aduino-mk
systemctl enable nodered.service
pip install esptool
npm install -g node-red-admin
./apache_set_user.sh pi
./nodered_set_nodes.php
wget https://github.com/esp8266/Arduino/raw/master/tools/espota.py
sed -i -e "s/SHELLINABOX_ARGS=.*/SHELLINABOX_ARGS=\"--no-beep -t\"/g" /etc/default/shellinabox
git clone https://github.com/mitchellurgero/openrsd
ln -s /opt/hiveid-ap/openrsd /var/www/html/openrsd
chown -R pi:pi /opt/hiveid-ap
echo "192.168.2.1	local.hive-id.com" >>/etc/hosts
