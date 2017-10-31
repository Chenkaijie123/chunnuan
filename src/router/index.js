import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Shelf from '../components/shelf'
import Shop from '../components/shop'
import Find from '../components/find'
import Me from '../components/me'
import Best from '../components/shopmodules/best'
import Boy from '../components/shopmodules/boy'
import Finish from '../components/shopmodules/finish'
import Girl from '../components/shopmodules/girl'
import Month from '../components/shopmodules/month'
import Rank from '../components/shopmodules/rank'
import bookwindow from '../components/bookwindow'
import Search from '../components/search'


Vue.use(Router)

export default new Router({

  linkActiveClass:'active',

  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: HelloWorld
    // }
    {path:'/shelf',component:Shelf},
    {path:'/shop',component:Shop,children:[
      {path:'/shop/best',component:Best},
      {path:'/shop/boy',component:Boy},
      {path:'/shop/finish',component:Finish},
      {path:'/shop/girl',component:Girl},
      {path:'/shop/month',component:Month},
      {path:'/shop/rank',component:Rank}
    ]},
    {path:'/find',component:Find},
    {path:'/me',component:Me},
    {path:'/bookwindow',component:bookwindow},
    {path:'/search',component:Search}


  ]

})


