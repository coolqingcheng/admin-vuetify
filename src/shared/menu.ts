import { RouteRecordRaw, RouteLocationRaw } from "vue-router"

interface MenuRaw {
    text: string
    index:string
    icon?: string
    route?: RouteLocationRaw
    children?: MenuRaw[]
}


// icon需要以mdi-开头  图标地址 https://materialdesignicons.com/
const menu: MenuRaw[] = [
    {
        text: '仪表盘',
        index:'1',
        icon: 'mdi-view-dashboard',
        route: {
            path: '/admin/dash',
        }
    },
    {
        text: '关于',
        index:'2',
        icon: 'mdi-domain',
        route: {
            path:'/admin/setting/system'
        }
    },
    // {
    //     text: '设置',
    //     icon: 'mdi-cog',
    //     children: [
    //         {
    //             text: '系统设置',
    //             route: {
    //                 path: '/admin/setting/system'
    //             }
    //         }
    //     ]
    // },
    {
        text: '博客',
        icon: 'mdi-post',
        index:'3',
        children: [
            {
                text: '文章',
                index:'3-1',
                route: '/admin/blog'
            }
        ]
    }

]

export {
    menu
}