#!/bin/bash
########################################################################################################
#### Author: Blaine McDonnell (blaine@armoin.com)                                                   ####
#### Usage: sudo ./hiveid_setup_client.sh                                                           ####
#### Description: Sets up Raspberry Pi as a WiFi Client                                             ####
#### Version: 0.20190710                                                                            ####
####          0.20190708    Initial Version                                                         ####
####          0.20190710    Added Rule Removal                                                      ####
########################################################################################################

cp  /etc/dhcpcd.conf \
    /etc/dnsmasq.conf \
    /etc/hostapd/hostapd.conf \
    /etc/default/hostapd \
    /etc/sysctl.conf \
    /etc/iptables.ipv4.nat \
    /etc/rc.local \
    /etc/hostapd/wpa_supplicant.conf \
    /etc/network/interfaces.d/* \
    /usr/local/hiveid-ap/staging_backup/.
    
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
iw wlan0 set power_save off

cp /opt/hiveid-ap/templates/wlan0 /etc/network/interfaces.d/wlan0

# Remove Forwarding Rule and Firewall Rule loader
sed -i -e "s/^net\.ipv4\.ip\_forward\=1$//g" /etc/sysctl.conf
echo 0 > /proc/sys/net/ipv4/ip_forward
sed -i -e "s/iptables\-restore \< \/etc\/iptables\.ipv4\.nat//g" /etc/rc.local