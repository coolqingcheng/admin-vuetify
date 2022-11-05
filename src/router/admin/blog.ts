import { RouteRecordRaw } from "vue-router";

const blog: RouteRecordRaw[] = [
    {
        path: '',
        component: () => import("@/views/admin/blog/Article.vue")
    }
]

export {
    blog
}