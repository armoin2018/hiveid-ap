#!/bin/bash
###############################################################################
#### Source: https://www.raspberrypi.org/forums/viewtopic.php?t=174434     ####
#### Usage: ./setup_resize.sh                                              ####
#### Description: Sets up resize on first boot for clones                  ####
#### Version: 0.1                                                          ####
###############################################################################

sudo sed -i -e "s/$/ quiet init=\/usr\/lib\/raspi-config\/init_resize.sh/" /boot/cmdline.txt 