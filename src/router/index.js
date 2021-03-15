import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRoutes = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  }];
export const asyncRoutes = [
  {
    path: '/system',
    component: Layout,
    redirect: '/system/psychologistList',
    name: 'System',
    meta: { title: '讲师管理', icon: 'user' },
    children: [
      {
        path: 'psychologistList',
        name: '心理医师列表',
        component: () => import('@/views/psychologist/index'),
        meta: { title: '心理医师列表', icon: 'peoples' }
      },
      {
        path: 'info',
        name: '添加心理医师',
        component: () => import('@/views/psychologist/updateOrSave'),
        meta: { title: '添加心理医师', icon: 'edit'}
      },
      {
        path: 'info/:id',
        name: '心理医师修改',
        component: ()=> import('@/views/psychologist/updateOrSave'),
        meta: { title: '心理医师修改', icon: 'edit'},
        hidden: true
      }
    ]
  },
  {
    path: '/subject',
    component: Layout,
    redirect: '/subject/list',
    name: '课程分类管理',
    meta: { title: '课程分类管理', icon: 'tree-table' },
    children: [
      {
        path: 'list',
        name: '课程分类列表',
        component: () => import('@/views/subject/index'),
        meta: { title: '课程分类列表', icon: 'tree' }
      },
      {
        path: 'save',
        name: '添加课程分类',
        component: () => import('@/views/subject/save'),
        meta: { title: '添加课程分类', icon: 'excel'}
      },
    ]
  },
  {
    path: '/course',
    component: Layout,
    redirect: '/course/list',
    name: '课程管理',
    meta: { title: '课程管理', icon: 'education' },
    children: [
      {
        path: 'list',
        name: '课程列表',
        component: () => import('@/views/course/index'),
        meta: { title: '课程列表', icon: 'list' }
      },
      {
        path: 'save',
        name: '添加课程',
        component: () => import('@/views/course/info'),
        meta: { title: '添加课程', icon: 'education'}
      },
      {
        path: 'info/:id',
        name: 'EduCourseInfoEdit',
        component: () => import('@/views/course/info'),
        meta: {
          title: '编辑课程基本信息',
          noCache: true
        },
        hidden: true
      },
      {
        path: 'chapter/:id',
        name: 'EduCourseChapterEdit',
        component: () => import('@/views/course/chapter'),
        meta: {
          title: '编辑课程大纲',
          noCache: true
        },
        hidden: true
      },
      {
        path: 'publish/:id',
        name: 'EduCoursePublishEdit',
        component: () => import('@/views/course/publish'),
        meta: {
          title: '发布课程',
          noCache: true
        },
        hidden: true
      }
    ]
  },
  {
    path: '/banner',
    component: Layout,
    redirect: '/banner/list',
    name: 'Banner管理',
    meta: { title: 'Banner管理', icon: 'example' },
    children: [
      {
        path: 'list',
        name: 'Banner列表',
        component: () => import('@/views/banner/list'),
        meta: { title: 'Banner列表', icon: 'table' }
      },

      {
        path: 'update/:id',
        name: 'update',
        component: () => import('@/views/banner/add'),
        meta: {
          title: '修改Banner',
          noCache: true
        },
        hidden: true
      },
      {
        path: 'add',
        name: 'update',
        component: () => import('@/views/banner/add'),
        meta: {
          title: '添加Banner',
          icon: 'edit'
        },
      }
    ]
  },
  {
    path: '/statistics',
    component: Layout,
    redirect: '/statistics/table',
    name: '统计分析',
    meta: {
      title: '统计分析',
      icon: 'example'
    },
    children: [{
      path: 'create',
      name: '生成数据',
      component: () => import('@/views/statistics/create'),
      meta: {
        title: '生成数据',
        icon: 'table'
      }
    },
      {
        path: 'showLog',
        name: '图表显示',
        component: () => import('@/views/statistics/showLog'),
        meta: {
          title: '图表显示',
          icon: 'tree'
        }
      },
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },
  {
    path: '/acl',
    component: Layout,
    redirect: '/acl/user/list',
    name: '权限管理',
    meta: { title: '权限管理', icon: 'chart' },
    children: [
      {
        path: 'user/list',
        name: '用户管理',
        component: () => import('@/views/acl/user/list'),
        meta: { title: '用户管理' }
      },
      {
        path: 'role/list',
        name: '角色管理',
        component: () => import('@/views/acl/role/list'),
        meta: { title: '角色管理' }
      },
      {
        path: 'role/form',
        name: '角色添加',
        component: () => import('@/views/acl/role/form'),
        meta: { title: '角色添加' },
        hidden: true
      },
      {
        path: 'role/update/:id',
        name: '角色修改',
        component: () => import('@/views/acl/role/form'),
        meta: { title: '角色修改' },
        hidden: true
      },
      {
        path: 'role/distribution/:id',
        name: '角色权限',
        component: () => import('@/views/acl/role/roleForm'),
        meta: { title: '角色权限' },
        hidden: true
      },
      {
        path: 'menu/list',
        name: '菜单管理',
        component: () => import('@/views/acl/menu/list'),
        meta: { title: '菜单管理' }
      },
      {
        path: 'user/add',
        name: '用户添加',
        component: () => import('@/views/acl/user/form'),
        meta: { title: '用户添加' },
        hidden: true
      },
      {
        path: 'user/update/:id',
        name: '用户修改',
        component: () => import('@/views/acl/user/form'),
        meta: { title: '用户修改' },
        hidden: true
      },
      {
        path: 'user/role/:id',
        name: '用户角色',
        component: () => import('@/views/acl/user/roleForm'),
        meta: { title: '用户角色' },
        hidden: true
      }

    ]
  },

  { path: '*', redirect: '/404', hidden: true }
];

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// export default new Router({
//   // mode: 'history', //后端支持可开
//   scrollBehavior: () => ({ y: 0 }),
//   routes: constantRouterMap
// })

export default router
