#!/bin/bash
# Usage: hiveid_setup_wifi2eth.sh PASSWORD
PWD = $1


apt-get update && apt-get upgrade --yes && apt-get autoremove --yes
apt-get install --yes curl git hostapd dnsmasq iptables bridge-utils iw nmon ethtool lshw openssh-server

systemctl enable multi-user.target --force
systemctl set-default multi-user.target

echo "allow-hotplug wlan0
iface wlan0 inet static
    address 192.168.2.1
    netmask 255.255.255.0
    network 192.168.2.0
broadcast 192.168.2.255" > /etc/network/interfaces.d/wlan0
sed -i "s/^hostname.*$/hostname $HOSTNAME/g" /etc/dhcpcd.conf


if [ -f /etc/dhcpcd.conf.orig ]; then 
    mv /etc/dhcpcd.conf.orig /etc/dhcpcd.conf
else 
    cp /etc/dhcpcd.conf /etc/dhcpcd.conf.orig
fi

echo "interface wlan0
    static ip_address=192.168.2.1/24" >> /etc/dhcpcd.conf

service dhcpcd restart
if [ -f /etc/dnsmasq.conf.orig ]; then 
    mv /etc/dnsmasq.conf.orig /etc/dnsmasq.conf
else 
    cp /etc/dnsmasq.conf /etc/dnsmasq.conf.orig
fi
echo "interface=wlan0
dhcp-range=192.168.2.2,192.168.2.254,255.255.255.0,24h" >> /etc/dnsmasq.conf


echo "interface=wlan0
driver=nl80211
ssid=$HOSTNAME
hw_mode=g
channel=11
wmm_enabled=0
macaddr_acl=0
auth_algs=1
ignore_broadcast_ssid=0
wpa=2
wpa_passphrase=$PWD
wpa_key_mgmt=WPA-PSK
wpa_pairwise=TKIP
rsn_pairwise=CCMP" > /etc/hostapd/hostapd.conf
echo "DAEMON_CONF=\"/etc/hostapd/hostapd.conf\"" >> /etc/default/hostapd
systemctl enable hostapd
systemctl start hostapd
systemctl start dnsmasq

if [ -f /etc/sysctl.conf.orig ]; then 
    mv /etc/sysctl.conf.orig /etc/sysctl.conf
else 
    cp /etc/sysctl.conf /etc/sysctl.conf.orig
fi
echo "net.ipv4.ip_forward=1" >> /etc/sysctl.conf

iptables -t nat -F
iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
sh -c "iptables-save > /etc/iptables.ipv4.nat"


if grep -Fxq "iptables\.ipv4\.nat" /etc/rc.local
then
    echo "rc.local is already configured for iptables"
else
    sed -i "s/^exit 0$//g" /etc/rc.local
    echo "iptables-restore < /etc/iptables.ipv4.nat
exit 0" >> /etc/rc.local
fi


echo "#!/bin/sh
service dhcpcd stop
service dnsmasq stop
service hostapd stop
Sleep 5
service dhcpcd start
service dnsmasq start
service hostapd start
exit 1" > /etc/network/if-post-up.d/zzz_hostapd
chmod +x /etc/network/if-post-up.d/zzz_hostapd

echo "Reboot Now"
