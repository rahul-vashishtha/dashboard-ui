import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/tailwind-light";

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.mount("#app");
