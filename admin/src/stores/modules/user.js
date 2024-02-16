import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref('')
    const setToken = (val) => {
      token.value = val
    }
    const userInfo = ref({})
    const setUserInfo = (val) => {
      userInfo.value = val
    }
    return {
      token,
      setToken,
      setUserInfo,
      userInfo
    }
  },
  {
    persist: true
  }
)
