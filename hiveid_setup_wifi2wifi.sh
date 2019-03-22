#!/bin/bash
# Usage: hiveid_setup_wifi2wifi.sh SSID PASSWORD

SSID=$1
PWD=$2
apt-get update && apt-get upgrade --yes && apt-get autoremove --yes
apt-get install --yes curl git hostapd dnsmasq iptables bridge-utils iw nmon ethtool lshw iwlist openssh-server

systemctl enable multi-user.target --force
systemctl set-default multi-user.target
sed -i "s/^hostname.*$/hostname $HOSTNAME/g" /etc/dhcpcd.conf
echo "interface wlan0
    static ip_address=192.168.2.1/24" >> /etc/dhcpcd.conf

service dhcpcd restart
mv /etc/dnsmasq.conf /etc/dnsmasq.conf.orig
echo "interface=wlan0
dhcp-range=192.168.2.2,192.168.2.254,255.255.255.0,24h" > /etc/dnsmasq.conf
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
echo "DAEMON_CONF=\"/etc/hostapd/hostapd.conf\"
DAEMON_OPTS=\"-B -P \$PIDFILE \$DAEMON_OPTS \$DAEMON_CONF\"" >> /etc/default/hostapd
echo "ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
country=US

network={
	ssid=\"$SSID\"
	psk=\"$PWD\"
	key_mgmt=WPA-PSK
}" >/etc/wpa_supplicant/wpa_supplicant.conf

systemctl start hostapd
systemctl start dnsmasq
echo "net.ipv4.ip_forward=1" >> /etc/sysctl.conf
iptables -t nat -A POSTROUTING -o wlan1 -j MASQUERADE
sh -c "iptables-save > /etc/iptables.ipv4.nat"
sed -i "s/^exit 0$//g" /etc/rc.local
echo "iptables-restore < /etc/iptables.ipv4.nat
exit 0" >> /etc/rc.local

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
