import Vuex from 'vuex';
import Projects from './modules/projects';
// Import env file and check if app is in production or development so we can change strict mode accordingly
import Env from '../../../build/env.json';
const env = (Env.app.mode == 'production' ? true : false);
export default new Vuex.Store({
    modules: {
        Projects
    },
    strict: env,
});