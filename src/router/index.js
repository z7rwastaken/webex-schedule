import VueRouter from "vue-router";
import Vue from "vue";
import Homepage from "../views/Homepage.vue";

Vue.use(VueRouter)

const routes = [
    {  
        path: "/home", 
        component: Homepage
    }
];

const router = new VueRouter({
  routes
});

export default router;