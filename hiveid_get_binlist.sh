#!/bin/bash
cd /usr/local/hiveid-ap/ota
ls -1ra *.bin | grep "AutoConnect" | sed -e "s/AutoConnect\.//p" | sed -e "s/\.bin//p" | head -1
