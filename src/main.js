import { createApp } from "vue";
import App from "./components/layout/App.vue";
import router from "./router";
import "./assets/css/tailwind.css";
import "./assets/css/var.css";
import "./assets/css/style.css";

createApp(App).use(router).mount("#app");
