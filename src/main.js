import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSpinner)
import { faVuejs } from '@fortawesome/free-brands-svg-icons'
library.add(faVuejs)
Vue.component('font-awesome-icon', FontAwesomeIcon)
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
Vue.use(VueSidebarMenu)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

