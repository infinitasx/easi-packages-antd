#! /bin/bash

NAME=$1

FILE_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")/../packages" && pwd)

re="[[:space:]]+"

if [ "$#" -ne 1 ] || [[ $NAME =~ $re ]] || [ "$NAME" == "" ]; then
  echo "Usage: yarn gc \${name} with no space"
  exit 1
fi

DIRNAME="$FILE_PATH/$NAME"
INPUT_NAME=$NAME

if [ -d "$DIRNAME" ]; then
  echo "$NAME component already exists, please change it"
  exit 1
fi
NORMALIZED_NAME=""
for i in $(echo $NAME | sed 's/[_|-]\([a-z]\)/\ \1/;s/^\([a-z]\)/\ \1/'); do
  C=$(echo "${i:0:1}" | tr "[:lower:]" "[:upper:]")
  NORMALIZED_NAME="$NORMALIZED_NAME${C}${i:1}"
done
NAME=$NORMALIZED_NAME

mkdir -p "$DIRNAME"

cat > $DIRNAME/index.vue <<EOF
<template>
  <div>
    <slot></slot>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import { createNamespace } from "../utils/create";
export default defineComponent({
  name: createNamespace('${NAME}'),
  props: { },
  setup(props) {
    // init here
  },
})
</script>
<style>
</style>
EOF

cat <<EOF >"$DIRNAME/index.ts"
import { App, Plugin } from 'vue'
import ${NAME} from './index.vue'

${NAME}.install = (app: App): void => {
  app.component(${NAME}.name, ${NAME})
}

export default ${NAME} as typeof ${NAME} & Plugin;
EOF

cat > $DIRNAME/package.json <<EOF
{
  "name": "@easi-packages-antd/$INPUT_NAME",
  "version": "0.0.0",
  "main": "index.ts",
  "license": "MIT",
  "peerDependencies": {
    "vue": "3.1.1"
  },
  "devDependencies": {
    "@vue/test-utils": "^2.0.0-beta.3"
  }
}
EOF
