import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { favoritesStore } from './stores/favorites'
import { loadingStore } from './stores/loading'

const app = createApp(App)

app.provide('favoritesStore', favoritesStore)
app.provide('loadingStore', loadingStore)
app.use(router)

app.mount('#app')
