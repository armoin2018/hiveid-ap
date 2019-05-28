#!/bin/bash
# Usage apache_set_user.sh USER
USER=$1

sudo sed -i "s/^export APACHE_RUN_USER.*$/export APACHE_RUN_USER=$USER/g" /etc/apache2/envvars
sudo sed -i "s/^export APACHE_RUN_GROUP.*$/export APACHE_RUN_GROUP=$USER/g" /etc/apache2/envvars
sudo service apache2 restart
