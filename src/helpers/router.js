import Vue from 'vue';
import Router from 'vue-router';

import Auth from "@/components/Auth";
import Register from "@/components/Register";
import Congrats from "@/components/Congrats";

Vue.use(Router);

const routes = [
    {
        path: '*',
        redirect: '/auth'
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
]

export const router = new Router({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/auth', '/register']
    const authRequired = !publicPages.includes(to.path)
    const loggedIn = localStorage.getItem('user')

    if (authRequired && !loggedIn) { return next('/auth') }
    next();
})