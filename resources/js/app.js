require('./bootstrap');
window.Vue = require('vue').default;

import Vuetify from 'vuetify';
Vue.use(Vuetify);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);


import App from '../App.vue'
import papeleriaIndex from '../views/papeleria/index.vue'
import login from '../views/admin/login.vue'
import ventas from '../views/admin/ventas.vue'

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
        },
        {
            path: '/admin/shops',
            component: ventas
        }
    ]
})

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    components: {App},
    router
});
