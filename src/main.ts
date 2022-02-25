import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import router from './router'
import store from './store'

import '@/assets/styles/tailwind.css'
import 'ant-design-vue/dist/antd.css'
import '@/assets/styles/app.css'

const app = createApp(App)

app.use(store).use(router).use(Antd)

app.mount('#app')
