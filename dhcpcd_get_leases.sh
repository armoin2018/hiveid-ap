#!/bin/bash
cat /var/lib/misc/dnsmasq.leases | sed -e "s/\s/,/g"
