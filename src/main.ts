import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

// Set global variable for API URL. Defaults to prod URL.
app.config.globalProperties.apiURL = process.env.VUE_APP_API_URL || 'https://api.awelsh.dev';

app.use(store).use(router).mount('#app');
