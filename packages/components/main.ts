import { createApp } from 'vue'
import App from './App.vue'
import './src/index.less'

const app = createApp(App)

app.mount(document.querySelector('#app') as HTMLDivElement)
