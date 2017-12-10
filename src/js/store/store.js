import Vuex from 'vuex';
import Projects from './modules/projects';

let env = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        Projects
    },
    strict: env,
});