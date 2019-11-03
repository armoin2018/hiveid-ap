#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: sudo ./setup_wlan1.sh                     ####
#### Description: Sets up usb network interface       ####
#### Version: 0.20191101                              ####
##########################################################

#Reference: https://raspberrypi.stackexchange.com/questions/64502/install-drivers-for-rtl8812au-wireless-usb-adapter

apt-get update && apt-get upgrade --yes && apt-get install --yes bc raspberrypi-kernel-headers build-essential

mkdir /home/pi/wireless
git clone https://github.com/gnab/rtl8812au.git
cd rtl8812au

sed -i 's/CONFIG_PLATFORM_I386_PC = y/CONFIG_PLATFORM_I386_PC = n/g' Makefile
sed -i 's/CONFIG_PLATFORM_ARM_RPI = n/CONFIG_PLATFORM_ARM_RPI = y/g' Makefile

/home/pi/wireless/rtl8812au/setup.sh
echo "Please Reboot"