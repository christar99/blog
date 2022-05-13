import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import vuex from 'vuex'
import { RouterView } from 'vue-router'

loadFonts()

createApp(App)
	.use(vuetify)
	.use(vuex)
	.use(RouterView)
	.mount('#app')
