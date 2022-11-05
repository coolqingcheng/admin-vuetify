
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import { routes as auth } from "./auth"
import { admin } from './admin'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        children: [
            ...auth,
            ...admin
        ]
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

router.beforeEach((to, from) => {
    // if (
    //     // 检查用户是否已登录
    //     !isAuthenticated &&
    //     // ❗️ 避免无限重定向
    //     to.name !== 'Login'
    // ) {
    //     // 将用户重定向到登录页面
    //     return { name: 'Login' }
    // }
})

export {
    router
}