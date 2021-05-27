import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'


import Register from "@/components/Register";
import Auth from "@/components/Auth";
import Congrats from "@/components/Congrats";

Vue.config.productionTip = false

Vue.use(Vuesax)
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/register'
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/congrats",
    name: "Congrats",
    component: Congrats,
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
