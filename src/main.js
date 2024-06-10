// eslint-disable-next-line
/* eslint-disable */

import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'
import VueCookies from "vue3-cookies";

import storeSettings from './store/index'

const app = createApp(App)
const store = createStore(storeSettings)

app.use(VueCookies);

app.use(store)
app.mount('#app')
