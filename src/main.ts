/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import vuetify from './plugins/vuetify'
import { router } from "../src/router/index"
import { createPinia } from 'pinia'


const pinia = createPinia()
const app = createApp(App)

registerPlugins()

app
  .use(vuetify)
  .use(router)
  .use(pinia)
  .mount('#app')
