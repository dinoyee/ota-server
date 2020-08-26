#!/usr/server/bash

ip=$1
cerDir="$HOME/.ota-server/"$ip"/"
mkdir -p "$cerDir"

# get rid of output
blackhole="/dev/null"

openssl genrsa -out "$cerDir"myCA.key 2048 2> $blackhole

openssl req -x509 -new -key "$cerDir"myCA.key -out "$cerDir"myCA.cer -days 730 -subj /CN="ota-server "$ip" Custom CA" 2> $blackhole

openssl genrsa -out "$cerDir"cert.key 2048 2> $blackhole

openssl req -new -out "$cerDir"cert.req -key "$cerDir"cert.key -subj /CN=$ip 2> $blackhole

openssl x509 -req -in "$cerDir"cert.req -out "$cerDir"cert.cer -CAkey "$cerDir"myCA.key -CA "$cerDir"myCA.cer -days 365 -CAcreateserial -CAserial "$cerDir"serial 2> $blackhole
