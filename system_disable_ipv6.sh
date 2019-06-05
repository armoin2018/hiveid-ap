#!/bin/bash
if grep -Fxq "net.ipv6.conf.all.disable_ipv6=1" /etc/hosts; then
    echo "IPv6 already disabled"
else
    echo "net.ipv6.conf.all.disable_ipv6=1
    net.ipv6.conf.default.disable_ipv6=1
    net.ipv6.conf.lo.disable_ipv6=1" >> /etc/sysctl.conf

    sudo sed -i -e "s/\#AddressFamily any/AddressFamily inet/g" /etc/ssh/sshd_config


fi


