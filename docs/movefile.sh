#! /bin/bash
if [ ! -d "./.vitepress/dist" ]; then
    echo "./.vitepress/dist 目录不存在"
    exit 1
fi

if [  -d "../dist/website/" ]; then
    rm -rf "../dist/website/"
fi


mv -f ./.vitepress/dist ../dist/website/