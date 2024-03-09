import '@/assets/scss/app.scss'

import { createApp } from 'vue'

import Notifications from '@kyvg/vue3-notification'

import pinia from '@/stores'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(pinia).use(router).use(Notifications)

app.mount('#app')
