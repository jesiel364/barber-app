import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '/mdb-ui-kit/css/mdb.min.css'
import '/mdb-ui-kit/css/my_style.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
