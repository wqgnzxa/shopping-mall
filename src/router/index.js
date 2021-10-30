import Vue from "vue";
import VueRouter from "vue-router";

const Home = () =>
    import ("../views/home/home.vue");
const Category = () =>
    import ("../views/category/category.vue");
const Shopcart = () =>
    import ("../views/shopcart/shopcart.vue");
const Profile = () =>
    import ("../views/profile/profile.vue");

Vue.use(VueRouter);

const routes = [{
        path: "",
        redirect: "/home",
    },
    {
        name: "home",
        path: "/home",
        component: Home,
    },
    {
        name: "category",
        path: "/category",
        component: Category,
    },
    {
        name: "shopcart",
        path: "/shopcart",
        component: Shopcart,
    },
    {
        name: "profile",
        path: "/profile",
        component: Profile,
    },
];

const router = new VueRouter({
    routes,
    mode: "history",
});

export default router;