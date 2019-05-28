#!/bin/bash
sudo apt-get update && sudo apt-get upgrade --yes && sudo apt-get autoremove --yes
sudo apt-get install npm nodejs nodered --yes

sudo npm cache clean -f
sudo chown -R root:root /root/.* /root /usr/lib/node_modules
sudo npm install npm -g  
sudo npm install bcrypt -g
sudo npm install node-red-admin -g
sudo npm install noble -g
sudo npm install lodash -g
sudo npm update -g

sudo systemctl enable nodered.service
php ./nodered_set_nodes.php