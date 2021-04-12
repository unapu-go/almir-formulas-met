#!/usr/bin/env bash
assets_dir="assets"
[ ! -e "$assets_dir" ] && {
  mkdir -p "$assets_dir" || exit $?
}
mod="deps/material-design-icons"
icons_dst="assets/static/icons.css"
codepoints="$mod/font/MaterialIcons-Regular.codepoints"
root=`pwd`
[ ! -e "deps/material-design-icons" ] && {
  mkdir -p deps || exit $?
  cd deps
  wget https://github.com/google/material-design-icons/archive/4.0.0.tar.gz -O material-design-icons.tar.gz || exit $?
  tar -zxf 4.0.0.tar.gz || exit $?
  exit
  cd "$root"
}

[ ! -e "$codepoints" ] && {
    echo '`'"$codepoints"'` does not exists' >&2
    exit 1
}

cp -a $mod/font/*.{ttf,otf,codepoints} "$assets_dir" || exit $?

echo "// Auto generated file. Do not edit it.
" > "assets/static/icons.css"

cat /dev/null > "$icons_dst"

cat $codepoints | while read l
do
    name=$(echo "$l" | cut -d" " -f 1)
    code=$(echo "$l" | cut -d" " -f 2)
    echo "[mdl-icon-name*=\"$name\"] > a::before {
  content: \"\\$code\";
}" >> "$icons_dst"
done