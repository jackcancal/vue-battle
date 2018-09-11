import Vue from 'vue'
import Router from 'vue-router'

import InterLayer from '../pages/InterLayer/InterLayer.vue'
import Cart from '../pages/Cart/Cart.vue'
import Home from '../pages/Home/Home.vue'
import Suit from '../pages/Home/Suit/Suit.vue'
import Recommend from '../pages/Home/Recommend/Recommend.vue'

import Item from '../pages/Item/Item.vue'
import ItemRouter from '../pages/Item/ItemRouter/ItemRouter.vue'

import Person from '../pages/Person/Person.vue'
import Topic from '../pages/Topic/Topic.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/interlayer',
      component: InterLayer
    },
    {
      path: '/cart',
      component: Cart,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/',
      component: Home,
      meta: {
        showFooter: true
      },
      children: [
        {
          path: '/cate/1005111',
          component: Recommend,
          meta: {
            showFooter: true
          },
        },
        {
          path: '/cate/:id',
          component: Suit,
          meta: {
            showFooter: true
          },
        },{
          path: '/',
          redirect: '/cate/1005111'
        }
      ]
    },
    {
      path: '/item',
      component: Item,
      children: [
        {
          path:'/item/:id',
          component:ItemRouter,
          meta: {
            showFooter: true
          },
        },
        {
          path:'/item',
          redirect: '/item/1022001'
        },
      ]
    },
    {
      path: '/person',
      component: Person
    },
    {
      path: '/topic',
      component: Topic,
      meta: {
        showFooter: true
      },
    },

  ]
})
