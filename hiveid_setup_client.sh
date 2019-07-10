#!/bin/bash
########################################################################################################
#### Author: Blaine McDonnell (blaine@armoin.com)                                                   ####
#### Usage: sudo ./hiveid_setup_client.sh                                                           ####
#### Description: Sets up Raspberry Pi as a WiFi Client                                             ####
#### Version: 0.20190710                                                                            ####
####          0.20190708    Initial Version                                                         ####
####          0.20190710    Added Rule Removal                                                      ####
########################################################################################################

# Stopping existing Services
service stop hostapd
service stop dhcpcd
service stop dnsmasq

# Disabling any AP related services
systemctl disable hostapd
systemctl disable dhcpcd
systemctl disable dnsmasq

rm /etc/iptables.ipv4.nat
rm /etc/network/if-up.d/zzz_hostapd

# Remove Forwarding Rule and Firewall Rule loader
sed -i -e "s/^net\.ipv4\.ip\_forward\=1$//g" /etc/sysctl.conf
echo 0 > /proc/sys/net/ipv4/ip_forward
sed -i -e "s/iptables\-restore \< \/etc\/iptables\.ipv4\.nat//g" /etc/rc.local