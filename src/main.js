import './assets/styles/normalize.css'
import './assets/styles/main.css'
import './assets/styles/fonts.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
