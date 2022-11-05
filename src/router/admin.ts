import { RouteRecordRaw } from "vue-router";
import { system } from "@/router/admin/setting"
import { blog } from "@/router/admin/blog"

const admin: RouteRecordRaw[] = [
    {
        path: 'admin', component: () => import("@/views/admin/Index.vue")
        , children: [
            {
                path: 'dash', component: () => import("@/views/admin/DashBoard.vue")
            },
            {
                path: 'setting', children: system
            },
            {
                path: 'blog', children: blog
            }
        ]
    }
]

export {
    admin
}