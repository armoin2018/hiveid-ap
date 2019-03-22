#!/bin/bash
# Usage: hostapd_set_cnl.sh Channel
CNL=$1
sed -i "s/channel=.*$/channel=$CNL/g" /etc/hostapd/hostapd.conf
