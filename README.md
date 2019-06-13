# Hive-ID Access Point (hiveid-ap) Setup Scripts

This is the setup and dependencies for the hive-id.com access point for the Raspberry Pi. 

Scripts being actively changed!!!

## How To:
1. Setup Raspberry Pi Raspbian NOOBS (Based on v3.0.1 - https://www.raspberrypi.org/downloads/noobs/)
2. Launch Terminal Window
```
sudo mkdir /opt 
cd /opt

sudo git clone https://github.com/armoin2018/hiveid-ap
sudo chown -R pi:pi /opt/hiveid-ap;chmod +x /opt/hiveid-ap/*.sh;cd /opt/hiveid-ap
./setup.sh

```
If you want a WiFi to  WiFi Access Point (Still being Tested)
```
./hiveid_setup_wifi2wifi.sh <NEW_GATEWAY_PWD> <REMOTE_SSID> <REMOTE_SSID_PWD>
```

If you want to use WiFi to Ethernet Access Point
```
./hiveid_setup_wifi2eth.sh <PASSWORD>
```

If you want to use JMRI
```
./setup_jmri.sh
```

Node-Red 
Will be available on http://[IP]:1880 and the dashbaord is on http://[IP]:1880/ui
  
OpenRSD
Will be available on http://[IP]/openrsd
  
  
