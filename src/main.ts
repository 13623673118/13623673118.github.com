import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import '@/assets/reset.scss'

app.mount('#app')
