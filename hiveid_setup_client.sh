#!/bin/bash
########################################################################################################
#### Author: Blaine McDonnell (blaine@armoin.com)                                                   ####
#### Usage: sudo ./hiveid_setup_client.sh                                                           ####
#### Description: Sets up Raspberry Pi as a WiFi Client                                             ####
#### Version: 0.20190708                                                                            ####
####          0.20190708    Initial Version                                                         ####
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