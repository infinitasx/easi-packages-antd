import { App } from 'vue'
import Nav from './index.vue'

Nav.install = (app: App): void => {
  app.component(Nav.name, Nav)
}

export default Nav
