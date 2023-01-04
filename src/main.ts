import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './tailwind.css'
import App from './App.vue'
import router from "./router";
import { createHead } from '@vueuse/head'

const pinia = createPinia()
pinia.use(({ store }) => {
  store.router = markRaw(router);
});

const app = createApp(App)
const head = createHead()

app.use(pinia)
app.use(head)
app.use(router);
app.mount(document.body)
