#!/bin/bash
# Usage: wpaclient_set_ssid.sh SSID
SSID=$1

sudo sed -i "s/ssid=\".*\"$/ssid=\"$SSID\"/g" /etc/wpa_supplicant/wpa_supplicant.conf
