#!/bin/bash
##########################################################
#### Author: Blaine McDonnell (blaine@armoin.com)     ####
#### Usage: sudo ./setup_docker_apt.sh                ####
#### Description: Sets up Docker                      ####
#### Version: 0.20190705                              ####
####          0.20190705  Removed apt-get --force-yes ####
##########################################################

/opt/hiveid-ap/system_update.sh
export DEBIAN_FRONTEND=noninteractive
sudo apt-get install --yes apt-transport-https ca-certificates software-properties-common
curl -fsSL https://yum.dockerproject.org/gpg | sudo apt-key add -

sudo add-apt-repository \
    "deb https://apt.dockerproject.org/repo/ \
    raspbian-$(lsb_release -cs) \
    main"

sudo apt-get install --yes docker-engine

export DEBIAN_FRONTEND=dialog
