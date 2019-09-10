import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";

import ElementUI from "element-ui";
import i18n from "@/lang";

Vue.use(ElementUI, {
  size: "medium", // Set element-ui default size
  i18n: (key: string, value: string) => i18n.t(key, value)
});

import 'element-ui/lib/theme-chalk/index.css';
import '@/permission'
import "@/style/index.less"
import "@/pwa/registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
