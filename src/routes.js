//Default
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//Pages
import Home from '@/pages/Home.vue'
import NotFound from '@/pages/404.vue'
import About from '@/pages/About.vue'

//Routering

export default new Router({
    mode: 'hash',
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },

        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '*',
            name: 'notFound',
            component: NotFound
        }
    ]
})