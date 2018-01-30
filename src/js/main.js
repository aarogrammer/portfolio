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

const axios = Axios.create({
    baseURL: '/',
});

Vue.prototype.$http = axios;

Es6Promise.polyfill();
Vue.use(VueRouter);
Vue.use(Vuex);

// Import vee-validate for form validation on the client side
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

// Main app import
import app from '../views/App.vue';

// Views (parents)
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Project from '../views/Project.vue';
import Contact from '../views/Contact.vue';
import Client from '../views/Client.vue';

// Set up routes with relevant views/components
const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home},
        { path: '/about', component: About},
        { path: '/projects', component: Project},
        { path: '/contact', component: Contact},
        { path: '/projects/:client', component: Client}
    ]
});

// On new router load, scroll to top of the page.
router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    next();
});

new Vue({
    el: '#app',
    store: require('./store/store').default,
    router,
    render: h => h(app)
});