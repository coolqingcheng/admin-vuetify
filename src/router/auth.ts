import { RouteRecordRaw } from "vue-router";


const routes: RouteRecordRaw[] = [
    {
        path: 'login',
        component: () => import("../views/auth/Login.vue")
    },
    {
        path:'test',
        component:()=> import("../views/Test.vue")
    }
];

export {
    routes
};