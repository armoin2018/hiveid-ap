#!/bin/bash
cat /etc/hostapd/hostapd.conf |grep channel |sed -e "s/channel\=//g"
