/**
 * @name Main
 * @description File that webpack watches and outputs to bundle.js (see webpack.config.js)
 * @version 2.5
 * @since 2.0
 * @author Aaron Welsh <contact@aaron-welsh.co.uk>
 */

// Import Vue and Vue Loader
import Vue from 'vue';
import VueRouter from 'vue-router';
import Es6Promise from 'es6-promise';
Es6Promise.polyfill();
Vue.use(VueRouter);


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

// Views (children)
import BandM from '../views/projects/bearandmeerkat.vue';
import Marine from '../views/projects/360marine.vue';
import Elcees from '../views/projects/elcees.vue';
import Responsiveness from '../views/projects/responsiveness.vue';
import Jordan from '../views/projects/jordan.vue';
import Dsd from '../views/projects/dsd.vue';
import Cms from '../views/projects/cms.vue';

// Set up routes with relevant views/components
const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home},
        { path: '/about', component: About},
        { path: '/projects', component: Project},
        { path: '/contact', component: Contact},

        // Child views for Projects. I was going to use children[] but with the current structure it doesn't make much sense.

        { path: '/projects/bearandmeerkat', component: BandM},
        { path: '/projects/360marine', component: Marine},
        { path: '/projects/elcees', component: Elcees},
        { path: '/projects/responsiveness', component: Responsiveness},
        { path: '/projects/jordan', component: Jordan},
        { path: '/projects/dsd', component: Dsd},
        { path: '/projects/cms', component: Cms},
        
    ]
});

// On new router load, scroll to top of the page.
router.beforeEach((to, from, next) => {
    window.scrollTo(0, 500);
    next();
});

new Vue({
    el: '#app',
    router,
    render: h => h(app)
});