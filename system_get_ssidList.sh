#!/bin/bash
iwlist wlan0 scan | grep ESSID | sed -En "s/\s*\t*ESSID\:\"(.*)\"/\1/p" | grep -v "\\x00" | grep -v -e "^$"  | uniq
