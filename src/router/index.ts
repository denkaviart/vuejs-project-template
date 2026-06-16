import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const appendLayoutToRoutes = (routes: RouteRecordRaw[]) => {
  return routes.map((route) => {
    return {
      path: route.path,
      component: route.meta?.layout ?? DefaultLayout,
      children: [
        {
          ...route,
          path: '',
        },
      ],
    }
  })
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: appendLayoutToRoutes(routes),
})

// This will update routes at runtime without reloading the page
if (import.meta.hot) {
  handleHotUpdate(router)
}

export default router
