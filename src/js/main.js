/**
 * @name Main
 * @description File that webpack watches and outputs to bundle.js (see webpack.config.js)
 * @version 3.0
 * @since 2.0
 * @author Aaron Welsh <contact@aaron-welsh.co.uk>
 */
// Import Vue and Vue Loader
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import Es6Promise from 'es6-promise';
import Axios from 'axios';
import VeeValidate from 'vee-validate';

// Main app import
import app from '../views/App.vue';

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Project from '../views/Project.vue';
import Contact from '../views/Contact.vue';
import Client from '../views/Client.vue';
import NotFound from '../views/NotFound.vue';

const axios = Axios.create({
    baseURL: '/',
});

Vue.prototype.$http = axios;

Es6Promise.polyfill();
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VeeValidate);

const store = require('./store/store').default;

// Set up routes with relevant views/components
const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/projects', component: Project },
        { path: '/contact', component: Contact },
        { path: '/projects/:client', component: Client },
        { path: '*', component: NotFound }
    ]
});

// On new router load, scroll to top of the page.
router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    next();
});

const startVue = () => {
    const vue = new Vue({
        el: '#app',
        store,
        router,
        render: h => h(app)
    });
    return vue;
};
startVue();
// Just a wee message to show people where they can find my source code.
console.log(
    '%cYou seem interested in how I made my portfolio... Nooice! View all the code on GitHub - https://github.com/aarogrammer/portfolio/',
    'color: #16a085; font-size: 1.1em;'
);
