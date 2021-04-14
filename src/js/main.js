'use strict'

import { createApp } from 'vue'

import router from './../router'

import App from './../components/app'

const app = createApp(App)

app.use(router)

app.mount('#app')
