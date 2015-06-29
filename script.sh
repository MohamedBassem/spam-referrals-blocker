#!/bin/bash

cat referrer-spam-blacklist/spammers.txt | sed 's/\./\\./g' | sed -r 's/^(.*)$/\t\/\0\/,/' > tmp.tmp
sed '/.*\/\/.*\$\$REPLACE_ME\$\$/r tmp.tmp' spam-referrals-blocker-template.js > tmp2.tmp
curl -X POST -s --data-urlencode 'input@tmp2.tmp' http://javascript-minifier.com/raw > ./release/spam-referrals-blocker.min.js
rm tmp.tmp tmp2.tmp
cat ./release/spam-referrals-blocker.js.min
