import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios';
import VueAxios from 'vue-axios';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(VueAxios, Axios)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false
Vue.prototype.http = Axios;
Vue.prototype.api = 'http://localhost:3000';
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')