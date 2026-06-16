import type { App } from 'vue'
import pinia from '@/plugins/pinia.ts'
import router from '@/router'

export function registerPlugins(app: App) {
  app.use(pinia).use(router)
}
