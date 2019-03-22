#!/bin/bash
cd /opt/hiveid-ap/ota
ls -1ra *.bin | grep "AutoConnect" | sed -e "s/AutoConnect\.//p" | sed -e "s/\.bin//p" | head -1
