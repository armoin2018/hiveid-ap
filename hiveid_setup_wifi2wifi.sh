#!/bin/bash
########################################################################################################
#### Author: Blaine McDonnell (blaine@armoin.com)                                                   ####
#### Usage: sudo ./hiveid_setup_wifi2wifi.sh IP_PREFIX NEW_GATEWAY_PWD REMOTE_SSID REMOTE_SSID_PWD  ####
#### Description: Sets up Raspberry Pi as a WiFi to WiFi Gateway                                    ####
#### Version: 0.20190705                                                                            ####
####          0.20190705  Removed apt-get --force-yes                                               ####
########################################################################################################
if [ -z "$4" ]; then 
    echo "Insufficient argument list"
    echo "Usage: hiveid_setup_wifi2wifi.sh IP_PREFIX NEW_GATEWAY_PWD REMOTE_SSID REMOTE_SSID_PWD"
    echo "       IP_PREFIX example 192.168.2"
    exit;
else 
    IP_PRE=$1
    PWD1=$2
    SSID=$3
    PWD2=$4
fi


/opt/hiveid-ap/system_update.sh
export DEBIAN_FRONTEND=noninteractive
apt-get install --yes curl git hostapd dnsmasq iptables bridge-utils iw nmon ethtool lshw openssh-server
export DEBIAN_FRONTEND=dialog

systemctl enable multi-user.target --force
systemctl set-default multi-user.target
sed -i "s/^hostname.*$/hostname $HOSTNAME/g" /etc/dhcpcd.conf

CNT=`grep "local.hive-id.com" /etc/hosts | wc -l`
if [[ "$CNT" -eq "0" ]]; then
    sudo echo "$IP_PRE.1	local.hive-id.com" >>/etc/hosts
else 
    echo "Local host reference found in hosts file"
fi

if [ -f /etc/dhcpcd.conf.orig ]; then 
    mv /etc/dhcpcd.conf.orig /etc/dhcpcd.conf
else 
    cp /etc/dhcpcd.conf /etc/dhcpcd.conf.orig
fi

echo "static routers=$IP_PRE.1
static domain_name_servers=$IP_PRE.1 8.8.8.8
interface wlan0
    static ip_address=$IP_PRE.1/24" >> /etc/dhcpcd.conf

service dhcpcd restart
if [ -f /etc/dnsmasq.conf.orig ]; then 
    mv /etc/dnsmasq.conf.orig /etc/dnsmasq.conf
else 
    cp /etc/dnsmasq.conf /etc/dnsmasq.conf.orig
fi
echo "interface=wlan0
dhcp-range=$IP_PRE.2,$IP_PRE.254,255.255.255.0,24h" >> /etc/dnsmasq.conf

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
wpa_passphrase=$PWD1
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
	psk=\"$PWD2\"
	key_mgmt=WPA-PSK
}" >/etc/wpa_supplicant/wpa_supplicant.conf
systemctl unmask hostapd
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
iptables -t nat -A POSTROUTING -o wlan1 -j MASQUERADE
sh -c "iptables-save > /etc/iptables.ipv4.nat"

CNT=`grep "iptables.ipv4.nat" /etc/rc.local | wc -l`
if [[ "$CNT" -eq "0" ]]; then
    sed -i "s/^exit 0$//g" /etc/rc.local
    echo "iptables-restore < /etc/iptables.ipv4.nat
exit 0" >> /etc/rc.local
else
    echo "rc.local is already configured for iptables"
fi

mkdir /etc/network/if-post-up.d
echo "#!/bin/sh
service dhcpcd stop
service dnsmasq stop
service hostapd stop
sleep 5
service dhcpcd start
service dnsmasq start
service hostapd start
exit 1" > /etc/network/if-post-up.d/zzz_hostapd
chmod +x /etc/network/if-post-up.d/zzz_hostapd

echo "Reboot Now"