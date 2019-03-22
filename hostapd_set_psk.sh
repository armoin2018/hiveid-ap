#!/bin/bash
# Usage: hostapd_set_psk.sh Password
PSK=$1
sed -i "s/psk=\".*\"$/psk=\"$PSK\"/g" /etc/wpa_supplicant/wpa_supplicant.conf
