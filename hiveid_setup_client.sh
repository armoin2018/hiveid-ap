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
sudo service stop hostapd
sudo service stop dhcpcd
sudo service stop dnsmasq

# Disabling any AP related services
sudo systemctl disable hostapd
sudo systemctl disable dhcpcd
sudo systemctl disable dnsmasq

sudo rm /etc/iptables.ipv4.nat
sudo rm /etc/network/if-post-up.d/zzz_hostapd

# Remove Forwarding Rule and Firewall Rule loader
sed -i -e "s/^net\.ipv4\.ip\_forward\=1$//g" /etc/sysctl.conf
sed -i -e "s/iptables\-restore \< \/etc\/iptables\.ipv4\.nat//g" /etc/rc.local