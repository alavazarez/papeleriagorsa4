require('./bootstrap');
window.Vue = require('vue').default;

import Vuetify from 'vuetify'
Vue.use(Vuetify);

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import App from '../App.vue'
import papeleriaIndex from '../views/papeleria/index.vue'
import login from '../views/admin/login.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: papeleriaIndex,
        },
        {
            path: '/login',
            component: login
        }
    ]
})

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    components: {App},
    router
});
