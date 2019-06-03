#!/bin/bash
# Usage: hostapd_set_cnl.sh Channel
CNL=$1
sudo sed -i "s/channel=.*$/channel=$CNL/g" /etc/hostapd/hostapd.conf
sudo service hostapd restart
