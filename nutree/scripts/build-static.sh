#!/usr/bin/env bash
# Builds the static version of the site into ./out (for Hostinger Premium).
# Works on a temporary copy so the source tree keeps its server features.
set -euo pipefail
cd "$(dirname "$0")/.."

TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT

rsync -a --exclude node_modules --exclude .next --exclude out ./ "$TMP/"
ln -s "$PWD/node_modules" "$TMP/node_modules"

rm -rf "$TMP/src/app/api" "$TMP/src/app/admin" "$TMP/src/middleware.ts"

(cd "$TMP" && STATIC_EXPORT=true NEXT_PUBLIC_ENABLE_CHAT=false npx next build)

rm -rf out
cp -R "$TMP/out" ./out
cp public/.htaccess out/.htaccess 2>/dev/null || true
echo "Static site ready in ./out"
