import '../src/assets/base.css'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import pinia from './stores'
import Particles from 'particles.vue3'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(Particles)
app.mount('#app')
