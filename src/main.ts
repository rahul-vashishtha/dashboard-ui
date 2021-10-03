import { createApp, h } from 'vue'
import registerComponents from './components/components';
import App from './pages/App/App.vue'
import router from './router'

const app = createApp({
    render: () => h(App)
});

registerComponents(app);

app.use(router).mount('#app');