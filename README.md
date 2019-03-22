# Hive-ID Access Point (hiveid-ap) Setup Scripts
This is the setup and dependencies for the hive-id.com access point for the Raspberry Pi. 

How to:
1. Setup Raspberry Pi Raspbian NOOBS (Based on v3.0 - https://www.raspberrypi.org/downloads/noobs/)
2. Launch Terminal Window
  sudo bash 
  mkdir /opt 
  cd /opt
  apt-get update && apt-get upgrade --yes && apt-get autoremove --yes 
  apt-get install git
  git clone https://github.com/armoin2018/hiveid-ap
  chown -R pi:pi hiveid-ap
  cd hiveid-ap
  ./setup.sh

If you want a WiFi to  WiFi Access Point (Still being Tested)
  ./hiveid_set_wifi2wifi.sh <SSID> <PASSWORD>
  
If you want to use WiFi to Ethernet Access Point
  ./hiveid_set_wifi2eth.sh <PASSWORD>
  
If you want to use JMRI
  ./setup_jmri.sh


Node-Red 
Will be available on http://<IP>:1880 and the dashbaord is on http://<IP>:1880/ui
  
OpenRSD
Will be available on http://<IP>/openrsd
  
  
