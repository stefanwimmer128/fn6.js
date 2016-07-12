#!/usr/bin/env bash

# Get version from package.json
version="$(node <<< "console.log(require(\"./package.json\").version);")"

# Reset docs
test -d docs && rm -dr docs
mkdir docs

# Write JSDoc
echo "# fn6.js ${version} JSDoc
" > docs/fn6.md
jsdoc2md src/fn6.js >> docs/fn6.md

# Reset build
test -d build && rm -dr build
mkdir build

# Build JavaScript
echo "/**
 * fn6.js ${version}
 * @author Stefan Wimmer <stefanwimmer128@gmail.com>
 */
(fn6 =>
{
    if (typeof module === \"object\")
        module.exports = fn6();
    else
        this.fn6 = fn6();
})(() =>
{" > build/fn6.js
while IFS="" read line
do
    line="${line//\$\{version\}/${version}}"
    line="${line//module.exports\ =\ /return\ }"
    echo "    ${line}" >> build/fn6.js
done < src/fn6.js
echo "});" >> build/fn6.js
