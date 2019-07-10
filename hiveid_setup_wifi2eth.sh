#!/bin/bash
############################################################################
#### Author: Blaine McDonnell (blaine@armoin.com)                       ####
#### Usage: sudo ./hiveid_setup_wifi2eth.sh                             ####
####            --help for a list of available arguments                ####
#### Description: Sets up Raspberry Pi as a WiFi to Ethernet Gateway    ####
#### Version: 0.20190708                                                ####
####          0.20190705  Removed apt-get --force-yes                   ####
####          0.20190708  Moved to template files, help file and args   ####
############################################################################

function help { 
    cat /opt/hiveid-ap/help/hiveid_setup_wifi2eth.txt
    exit 0;
}

for i in "$@"
do
case $i in
    -s=*|--ssid=*)
    SSID="${i#*=}"
    shift 
    ;;
    -i=*|--ip_prefix=*)
    IP_PRE="${i#*=}"
    shift 
    ;;
    -gip=*|--gateway_ip=*)
    GATEWAY_IP="${i#*=}"
    shift
    ;;
    -gif=*|--gateway_iface=*)
    GATEWAY_IFACE="${i#*=}"
    shift
    ;;
    -ips=*|--ip_start=*)
    GATEWAY_IP_START="${i#*=}"
    shift
    ;;
    -ipe=*|--ip_end=*)
    GATEWAY_IP_END="${i#*=}"
    shift
    ;;
    -gwc=*|--gateway_channel=*)
    GATEWAY_CHANNEL="${i#*=}"
    shift
    ;;    
    -p=*|--passphrase=*)
    PASSPHRASE="${i#*=}"
    shift
    ;;    
    -k=*|--key_mgmt=*)
    KEY_MGMT="${i#*=}"
    shift
    ;;  
    -wan=*|--wan_iface=*)
    WAN_IFACE="${i#*=}"
    shift
    ;;
    -h|--help|-?)
    help
    shift
    ;;
    --default)
    DEFAULT=YES
    shift 
    ;;
    *)
          # handle unknown
    ;;
esac
done

# Set up Defaults 
if [ -z "$SSID" ]; then
    SSID=$HOSTNAME
fi
if [ -z "$IP_PRE" ]; then
    IP_PRE="192.168.6"
fi
if [ -z "$GATEWAY_IFACE" ]; then
    GATEWAY_IFACE="wlan0"
fi
if [ -z "$GATEWAY_IP" ]; then
    GATEWAY_IP="$IP_PRE.1"
fi
if [ -z "$GATEWAY_IP_START" ]; then
    GATEWAY_IP_START="$IP_PRE.2"
fi
if [ -z "$GATEWAY_IP_END" ]; then
    GATEWAY_IP_END="$IP_PRE.254"
fi
if [ -z "$GATEWAY_CHANNEL" ]; then
    GATEWAY_CHANNEL=11
fi
if [ -z "$PASSPHRASE" ]; then
    PASSPHRASE="password"
fi
if [ -z "$KEY_MGMT" ]; then
    KEY_MGMT="WPA-PSK"
fi
if [ -z "$WAN_IFACE" ]; then
    WAN_IFACE="eth0"
fi

/opt/hiveid-ap/system_update.sh
export DEBIAN_FRONTEND=noninteractive
apt-get install --yes curl git hostapd dnsmasq iptables bridge-utils iw nmon ethtool lshw openssh-server
export DEBIAN_FRONTEND=dialog

systemctl enable multi-user.target --force
systemctl set-default multi-user.target

mkdir /usr/local/hiveid-ap/staging /usr/local/hiveid-ap/staging_backup 2>/dev/null
rm /usr/local/hiveid-ap/staging/* /usr/local/hiveid-ap/staging_backup/* 2>/dev/null
cp /opt/hiveid-ap/templates/* /usr/local/hiveid-ap/staging/.

cp  /etc/dhcpcd.conf \
    /etc/dnsmasq.conf \
    /etc/hostapd/hostapd.conf \
    /etc/default/hostapd \
    /etc/sysctl.conf \
    /etc/iptables.ipv4.nat \
    /etc/rc.local \
    /usr/local/hiveid-ap/staging_backup/.

# Compress files here 

sed -i -e "s/^d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}[\s\t]*local\.hive\-id\.com$//g" /etc/hosts
sudo echo "$GATEWAY_IP	local.hive-id.com" >>/etc/hosts

sed -i -e "s/\[GATEWAY_IP\]/$GATEWAY_IP/" /usr/local/hiveid-ap/staging/dhcpcd.conf
sed -i -e "s/\[GATEWAY_IFACE\]/$GATEWAY_IFACE/" /usr/local/hiveid-ap/staging/dhcpcd.conf
sed -i -e "s/\[HOSTNAME\]/$HOSTNAME/" /usr/local/hiveid-ap/staging/dhcpcd.conf

cp /usr/local/hiveid-ap/staging/dhcpcd.conf /etc/dhcpcd.conf
sed -i -e "s/\[GATEWAY_IFACE\]/$GATEWAY_IFACE/" /usr/local/hiveid-ap/staging/dnsmasq.conf
sed -i -e "s/\[GATEWAY_IP_START\]/$GATEWAY_IP_START/" /usr/local/hiveid-ap/staging/dnsmasq.conf
sed -i -e "s/\[GATEWAY_IP_END\]/$GATEWAY_IP_END/" /usr/local/hiveid-ap/staging/dnsmasq.conf

cp /usr/local/hiveid-ap/staging/dnsmasq.conf /etc/dnsmasq.conf

sed -i -e "s/\[GATEWAY_IFACE\]/$GATEWAY_IFACE/" /usr/local/hiveid-ap/staging/hostapd.conf
sed -i -e "s/\[HOSTNAME\]/$HOSTNAME/" /usr/local/hiveid-ap/staging/hostapd.conf
sed -i -e "s/\[GATEWAY_CHANNEL\]/$GATEWAY_CHANNEL/" /usr/local/hiveid-ap/staging/hostapd.conf
sed -i -e "s/\[PASSPHRASE\]/$PASSPHRASE/" /usr/local/hiveid-ap/staging/hostapd.conf
sed -i -e "s/\[KEY_MGMT\]/$KEY_MGMT/" /usr/local/hiveid-ap/staging/hostapd.conf

cp /usr/local/hiveid-ap/staging/hostapd.conf /etc/hostapd/hostapd.conf

echo "DAEMON_CONF=\"/etc/hostapd/hostapd.conf\"" > /etc/default/hostapd

systemctl unmask hostapd
systemctl enable hostapd
service dhcpcd restart
systemctl start hostapd
systemctl start dnsmasq

sed -i -e "s/^net\.ipv4\.ip\_forward\=1$//g" /etc/sysctl.conf
echo "net.ipv4.ip_forward=1" >> /etc/sysctl.conf

sed -i -e "s/\[WAN_IFACE\]/$WAN_IFACE/" /usr/local/hiveid-ap/staging/iptables.ipv4.nat
cp /usr/local/hiveid-ap/staging/iptables.ipv4.nat /etc/iptables.ipv4.nat

CNT=`grep "iptables.ipv4.nat" /etc/rc.local | wc -l`
if [[ "$CNT" -eq "0" ]]; then
    sed -i "s/^exit 0$//g" /etc/rc.local
    echo "iptables-restore < /etc/iptables.ipv4.nat
exit 0" >> /etc/rc.local
else
    echo "rc.local is already configured for iptables"
fi

mkdir /etc/network/if-post-up.d 2>/dev/null
cp /usr/local/hiveid-ap/staging/zzz_hostapd /etc/network/if-post-up.d/zzz_hostapd
chmod +x /etc/network/if-post-up.d/zzz_hostapd

echo "Reboot Now"