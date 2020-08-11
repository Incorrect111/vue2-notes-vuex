//Default
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//Pages
import Home from '@/pages/Home.vue'
import NotFound from '@/pages/404.vue'
import Example from '@/pages/Example.vue'

//Routering

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },

        {
            path: '/example',
            name: 'example',
            component: Example
        },
        {
            path: '*',
            name: 'notFound',
            component: NotFound
        }
    ]
})