import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useRouteStateStore = defineStore('RouteStateStore', () => {
  const routeState = ref(false)
  const setRouteState = (val) => {
    routeState.value = val
  }
  const isCollapse = ref(false)
  const changCollapse = () => {
    isCollapse.value = !isCollapse.value
  }
  return {
    routeState,
    setRouteState,
    isCollapse,
    changCollapse
  }
})
