const routers = [
    {
        path: '/login',
        meta: {
            title: '用户登录'
        },
        component: (resolve) => require(['@/views/login.vue'], resolve)
    },
    {
        path: '/error',
        meta: {
            title: 'ERR',
        },
        component: (resolve) => require(['@/views/error.vue'], resolve)
    },
    {
        path: '/',
        meta: {
            title: '首页',
            token: true
        },
        redirect: '/home'
    },
    {
        path: '/layout',
        alias: '/',
        component: (resolve) => require(['@/components/layout.vue'], resolve),
        children: [
            {
                path: '/home',
                meta: {
                    title: '控制面板',
                    token: true
                },
                component: (resolve) => require(['@/views/home/index.vue'], resolve)
            },
            {
                path: 'error',
                meta: {
                    title: 'ERROR',
                    token: true
                },
                component: (resolve) => require(['@/views/error.vue'], resolve)
            },
            {
                path: '*',
                redirect: 'layout/error',
            }
        ]
    },
    {
        path: '*',
        redirect: '/error'
    }
]
export default routers;