#!/usr/bin/env bash

mkdir -p build
cp src/index.html build/
npx rollup -c
npx lessc src/style.less build/style.css
