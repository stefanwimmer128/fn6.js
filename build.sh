#!/usr/bin/env bash

# Get version from package.json
version=$(node <<< "console.log(require(\"./package.json\").version);")

# Write JSDoc
echo "# fn6.js ${version} Documentation" > docs/fn6.md
echo "" >> docs/fn6.md
jsdoc2md lib/fn6.js >> docs/fn6.md

# Browserify for bower
browserify lib/fn6.js > build/fn6.js
