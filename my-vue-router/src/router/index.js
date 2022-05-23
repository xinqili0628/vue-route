import Vue from 'vue'
import Router from 'vue-router'
import a from '@/components/a'
import b from '@/components/b'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'a',
      component: a
    },{
      // 路径
      path: '/b',
      // 对应的组件
      name: 'b',
      component: b
    },{
      path:'*',
      redirect:'/'
    }
  ]
})
