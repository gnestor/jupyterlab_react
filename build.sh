#!/usr/bin/env bash

npm -v
if [ $? -eq 0 ]; then
    echo npm is installed
else
    echo "'npm -v' failed, therefore npm is not installed.  In order to perform a
    developer install of jupyterlab_react you must have npm installed
    on your machine! See http://blog.npmjs.org/post/85484771375/how-to-install-npm
    for installation instructions." 
    exit 1
fi

cp -rf component/lib/ labextension/src/component/ && cp -rf component/lib/ nbextension/src/component/

cd labextension
npm install
cd ..

cd nbextension
npm install
cd ..
