#!/bin/bash
now=$(date +"%Y%m%d")
sudo apt-get update && sudo apt-get upgrade --yes && sudo apt-get autoremove --yes
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
sudo npm install noble -g
sudo npm install lodash -g
sudo npm install passwd-linux -g
sudo npm update -g

CONF=/home/pi/.node-red/settings.js
if [ -f $CONF ]; then 
    sudo cp $CONF /usr/local/hiveid-ap/backup/settings.$now.js
fi

cp /opt/hiveid-ap/node.settings.js $CONF

CONF=/home/pi/.node-red/user-authentication.js
if [ -f $CONF ]; then 
    sudo cp $CONF /usr/local/hiveid-ap/backup/user-authentication.$now.js
fi
cp /opt/hiveid-ap/node.user-authentication.js $CONF

sudo chown -R pi:pi /home/pi/.node-red

sudo systemctl enable nodered.service
sudo service nodered start

if [ `curl http://localhost:1880/flows` == "[]" ]; then
	echo "Settings default flows."
    cp /opt/hiveid-ap/node.flows.js /home/pi/.node-red/flows.json
    sudo chown -R pi:pi /home/pi/.node-red
    # Disabling this section because adding authentication blocks the use of flows
    #curl -i -H "Accept: application/json" \
	#	-H "X-HTTP-Method-Override: PUT" \
	#	-X POST -d @/opt/hiveid-ap/node.flows.js \
    #	http://localhost:1880/flows
else
	echo "Default flows exist. Not Updating."
fi

php ./nodered_set_nodes.php