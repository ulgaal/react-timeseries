#!/bin/bash
# A bash script to generate documentation for react-timeseries

mkdir -p doc/ref

# react-docgen
npx react-docgen src/ChartContainer.js src/ChartRow.js \
 -o stories/docgen.json  --resolver=findAllComponentDefinitions

# react-docgen to md
node --experimental-modules stories/generateRefDocs.mjs
