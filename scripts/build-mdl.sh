#!/usr/bin/env bash
assets_dir="assets"
[ ! -e "$assets_dir" ] && {
  mkdir -p "$assets_dir" || exit $?
}
root=`pwd`
cd submodules/material-design-lite || exit $?
node_modules/gulp/bin/gulp.js || exit $?
cp -a dist/{material.min.css,material.min.js,material-grid.min.css} "$root/$assets_dir"