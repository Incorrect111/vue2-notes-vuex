import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
import router from './routes'
import store from './store';

import './assets/scss/main.scss'

Vue.config.productionTip = false
Vue.use(Vuex)

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')