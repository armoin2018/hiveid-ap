#!/bin/bash
rpi-update
apt-get update && apt-get upgrade --yes && apt-get autoremove --yes
