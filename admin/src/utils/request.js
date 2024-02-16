import axios from 'axios'
import { useUserStore } from '@/stores'
import router from '@/router'
const instance = axios.create({
  baseURL: '/api',
  timeout: 300000
})
// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    const UserStore = useUserStore()
    // 在发送请求之前做些什么
    config.headers.authorization = UserStore.token
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    const UserStore = useUserStore()
    if (response.data.code === '1') {
      UserStore.setToken(response.headers.authorization)
      return response
    }
    ElMessage.error(response.data.msg || '服务器崩溃了')
    return Promise.reject(response)
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    if (error.response?.status == 401) {
      router.push('/login')
      ElMessage.error(error.response?.data?.msg || '服务器崩溃了')
      return Promise.reject(error)
    }
    ElMessage.error(error.response?.data?.msg || '服务器崩溃了')
    return Promise.reject(error)
  }
)

export default instance
