import type { App } from 'vue'
import EASIText from '../text'
import EASIButton from '../button'


import { version as version_ } from './version'
const version = version_ 

const components = [
  EASIText,
  EASIButton
]

const plugins:[] = []

const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name, component)
  })

  plugins.forEach(plugin => {
    app.use(plugin)
  })
}

export {
  EASIText,
  EASIButton,
  install,
}

export default {
  version,
  install,
}
