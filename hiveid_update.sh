#!/bin/bash
cd /opt/hiveid-ap/
git reset --hard
git pull --rebase
chown -R pi:pi /opt/hiveid-ap
chmod +x /opt/hiveid-ap/*.sh