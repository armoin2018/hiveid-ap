#!/bin/bash
node-red-admin list | sed -r "s/\x1B\[([0-9]{1,2}(;[0-9]{1,2})?)?[mGK]//g" | grep -Pv "^[\s\t]" | sed -e "s/\/.*$//g" | grep -Pv "(^Node|^node\-red$)" | uniq
