#!/bin/bash
/bin/hostname -I | sed -e "s/\s192\.168\.2\.1//g"
