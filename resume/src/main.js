import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App);
app.use(store).use(router).use(VueAxios, axios).mount("#app");
app.config.globalProperties.$api_hostname = "http://127.0.0.1:8001/"