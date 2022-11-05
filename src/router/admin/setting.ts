import { RouteRecordRaw } from "vue-router"

const system: RouteRecordRaw[] = [
    {
        path: 'system',
        component:()=>import("@/views/admin/system/System.vue")
    }
]

export {
    system
}