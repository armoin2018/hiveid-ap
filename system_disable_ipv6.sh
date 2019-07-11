#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./system_disable_ipv6.sh                  ####
#### Description: Disables IPv6                       ####
#### Version: 0.20190709                              ####
##########################################################

CNT=`grep "net.ipv6.conf.all.disable_ipv6=1" /etc/sysctl.conf | wc -l`
if [[ "$CNT" -eq "0" ]]; then
    echo "net.ipv6.conf.all.disable_ipv6=1
    net.ipv6.conf.default.disable_ipv6=1
    net.ipv6.conf.lo.disable_ipv6=1
    net.ipv6.conf.eth0.disable_ipv6=1
    net.ipv6.conf.wlan0.disable_ipv6=1" >> /etc/sysctl.conf
fi

sudo sed -i -e "s/use\-ipv6\=yes/use-ipv6=no/g" /etc/avahi/avahi-daemon.conf
sudo sed -i -e "s/\#AddressFamily any/AddressFamily inet/g" /etc/ssh/sshd_config
