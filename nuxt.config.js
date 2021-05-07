// nuxt.js的配置
module.exports = {
    router: {
        linkActiveClass: 'active', // 路由高亮
        extendRoutes(routes, resolve) {
            routes.splice(0)
            routes.push(...[
                {
                    path: '/',
                    component: resolve(__dirname, 'pages/layout/'),
                    children:[
                        {
                            path: '',  // 默认子路由
                            name: 'home',
                            component: resolve(__dirname,'pages/home/')
                        },
                        {
                            path: '/login',  // 默认子路由
                            name: 'login',
                            component: resolve(__dirname,'pages/login/')
                        },
                        {
                            path: '/register',  // 默认子路由
                            name: 'register',
                            component: resolve(__dirname,'pages/login/')
                        },
                        {
                            path: '/profile/:username',  // 默认子路由
                            name: 'profile',
                            component: resolve(__dirname,'pages/profile/')
                        },
                        {
                            path: '/settings',  // 默认子路由
                            name: 'settings',
                            component: resolve(__dirname,'pages/setting/')
                        },
                        {
                            path: '/editor',  // 默认子路由
                            name: 'editor',
                            component: resolve(__dirname,'pages/create/')
                        },
                        {
                            path: '/article/:slug',  // 默认子路由
                            name: 'article',
                            component: resolve(__dirname,'pages/article/')
                        },
                    ]
                }
            ])
        }
    },
    // 注册插件
    server: {
        host: '0.0.0.0',
        port: 3000
    },
    plugins: [
        '~/plugins/request.js',
        '~/plugins/dayjs.js'
    ]
}