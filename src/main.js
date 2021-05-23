import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'


import Register from "@/components/Register";
import Auth from "@/components/Auth";
import Hello from "@/components/Hello";

Vue.config.productionTip = false

Vue.use(Vuesax)
Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "Register",
    component: Register,
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth,
  },
  {
    path: "/hello",
    name: "Hello",
    component: Hello,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
