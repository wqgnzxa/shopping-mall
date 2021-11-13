import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/icomoon/stylus/style.css";
import store from "./store";
import toast from "./components/common/toast/index";

import "./mock/index.js";
Vue.config.productionTip = false;

// 安装toast插件
Vue.use(toast);

new Vue({
    render: (h) => h(App),
    router,
    store,
    toast,
}).$mount("#app");