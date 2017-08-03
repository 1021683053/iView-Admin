// 定义左侧导航
let menus =[
    {
        type: 'menu',
        name: 'home',
        icon: 'android-home',
        text: '首页',
        path: '/home'
    },
    {
        type: 'menu',
        name: 'article',
        icon: 'person-stalker',
        text: '文章列表',
        path: '/article',
        ison: ['/users/user', '/users/modify']
    },
    {
        type: 'submenu',
        name: 'community',
        icon: 'chatboxes',
        text: '社区',
        childens:[
            {
                name: 'publish',
                text: '已发布',
                path: '/article/notespub',
                ison: ['/article/note','/article/mark']
            },
            {
                name: 'errors',
                text: '异常笔记',
                path: '/article/noteserr'
            },
            {
                name: 'await',
                text: '待审核笔记',
                path: '/article/notesver'
            },
            {
                name: 'topics',
                text: '话题管理',
                path: '/topic/topics'
            },
            {
                name: 'discuss',
                text: '评论管理',
                path: '/discuss/discus'
            },
            {
                name: 'label',
                text: '标签管理',
                path: '/label/labels'
            }
        ]
    },
    {
        type: 'submenu',
        name: 'digital',
        icon: 'pie-graph',
        text: '数据',
        childens: [
            {
                name: 'work',
                text: '业务数据',
                path: '/users/table'
            },{
                name: 'flow',
                text: '流量数据',
                path: '/users/table'
            }
        ]
    },
    {
        type: 'submenu',
        name: 'deploy',
        icon: 'gear-b',
        text: 'APP配置',
        childens: [
            {
                name: 'homeconf',
                text: '首页配置',
                path: '/system/home'
            },
            {
                name: 'recoconf',
                text: '推荐配置',
                path: '/system/recom',
                ison: ['/system/recmodify']
            },
            {
                name: 'startconf',
                text: '启动页管理',
                path: '/system/startup'
            }
        ]
    },
    {
        type: 'submenu',
        name: 'resource',
        icon: 'images',
        text: '资源管理',
        childens: [
            {
                name: 'imageup',
                text: '上传图片',
                path: '/resource/upload'
            },
            {
                name: 'imageres',
                text: '图片资源',
                path: '/resource/imglist'
            }
        ]
    }
];

export default menus;