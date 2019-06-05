#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: sudo ./setup_docker_apt.sh                ####
#### Description: Sets up Docker                      ####
#### Version: 0.1                                     ####
##########################################################

/opt/hiveid-ap/system_update.sh

sudo apt-get install --yes apt-transport-https ca-certificates software-properties-common
curl -fsSL https://yum.dockerproject.org/gpg | sudo apt-key add -

sudo add-apt-repository \
    "deb https://apt.dockerproject.org/repo/ \
    raspbian-$(lsb_release -cs) \
    main"

sudo apt-get update
sudo apt-get install --yes docker-engine