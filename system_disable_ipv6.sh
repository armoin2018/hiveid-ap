#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: ./system_disable_ipv6.sh                  ####
#### Description: Disables IPv6                       ####
#### Version: 0.1                                     ####
##########################################################

if grep -Fxq "net.ipv6.conf.all.disable_ipv6=1" /etc/hosts; then
    echo "IPv6 already disabled"
else
    echo "net.ipv6.conf.all.disable_ipv6=1
    net.ipv6.conf.default.disable_ipv6=1
    net.ipv6.conf.lo.disable_ipv6=1
    net.ipv6.conf.eth0.disable_ipv6=1
    net.ipv6.conf.wlan0.disable_ipv6=1" >> /etc/sysctl.conf

    sudo sed -i -e "s/\#AddressFamily any/AddressFamily inet/g" /etc/ssh/sshd_config
fi


