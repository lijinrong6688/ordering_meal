import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/views/login'
import SignIn from '@/views/SignIn'
import ForgotPw from '@/views/ForgotPw'
import HomePage from '@/views/home/HomePage'
import CountPage from '@/views/count/CountPage'
import MyPage from '@/views/my/MyPage'
import MyChangepw from '@/views/my/MyChangepw'
import test from '@/views/test'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
        { path: '/', redirect: '/views/login' },
				{ path: '*', redirect: '/views/login' },
				{
					path: '/views/login',
					name: 'login',
					component: login
        },
        {
					path: '/views/signin',
					name: 'SignIn',
					component: SignIn
        },
        {
					path: '/views/forgotpw',
					name: 'ForgotPw',
					component: ForgotPw
        },
        {
					path: '/test',
					name: 'test',
          component: test,
          children:[
            {
            path: '/views/home',
            name: 'HomePage',
            component: HomePage,
          },
          {
            path: '/views/my',
            name: 'MyPage',
            component: MyPage
          },
          {
            path: '/HelloWorld',
            name: 'HelloWorld',
            component: HelloWorld
          },
          {
            path: '/views/count',
            name: 'CountPage',
            component: CountPage
          },
          {
            path: '/views/mychangepw',
            name: 'MyChangepw',
            component: MyChangepw
          }
        ]
				},
				// {
				// 	path: '/views/home',
				// 	name: 'HomePage',
        //   component: HomePage,
				// },
				// {
				// 	path: '/views/my',
				// 	name: 'MyPage',
				// 	component: MyPage
				// },
        // {
        //   path: '/HelloWorld',
        //   name: 'HelloWorld',
        //   component: HelloWorld
        // },
        // {
        //   path: '/views/count',
        //   name: 'CountPage',
        //   component: CountPage
        // },
  ]
})
