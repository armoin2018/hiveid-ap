#!/bin/bash
now=$(date +"%Y%m%d")
sudo ./system_update.sh
sudo apt-get install npm nodejs nodered --yes

sudo service nodered stop

sudo npm cache clean -f
sudo chown -R root:root /root/.npm /root/.node-gyp /root /usr/lib/node_modules
sudo npm install npm -g  
sudo npm install node-gyp --unsafe-perm -g
sudo chown -R root:root /root/.npm /root/.node-gyp /root /usr/lib/node_modules
sudo npm install usb  --unsafe-perm -g
sudo npm install bluetooth-hci-socket --unsafe-perm -g
sudo npm install bcrypt --unsafe-perm -g
sudo chown -R root:root /root/.npm /root/.node-gyp /root /usr/lib/node_modules
sudo npm install node-red-admin --unsafe-perm -g
sudo npm install noble --unsafe-perm -g
sudo npm install lodash --unsafe-perm -g
sudo npm install passwd-linux --unsafe-perm -g
sudo npm install ini --unsafe-perm -g
sudo npm install fs --unsafe-perm -g
sudo npm update -g

sudo chown -R pi:pi /home/pi/.node-red

sudo systemctl enable nodered.service
sudo service nodered start

DATE=`date '+%Y%m%d%H%M%S'`
sudo mkdir /usr/local/hiveid-ap /usr/local/hiveid-ap/backups/ /usr/local/hiveid-ap/backups/$DATE
sudo chown -R pi:pi /usr/local/hiveid-ap /usr/local/hiveid-ap/backups/ /usr/local/hiveid-ap/backups/$DATE
CONF=/home/pi/.node-red/flows_$HOSTNAME.json
if [ -f $CONF ]; then 
    sudo cp $CONF /usr/local/hiveid-ap/backups/$DATE/.
fi 
cp /opt/hiveid-ap/node.flows.js $CONF
sudo chown -R pi:pi /home/pi/.node-red
sudo chmod -R 666 /var/log/hiveid-ap
php ./nodered_set_nodes.php