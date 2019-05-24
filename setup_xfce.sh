#!/bin/bash
sudo apt-get install xfce4 xfce4-goodies
#sudo update-alternatives --config x-session-manager
sudo update-alternatives --set x-session-manager /usr/bin/startxfce4
#sudo update-alternatives --set x-session-manager /usr/bin/startlxde-pi