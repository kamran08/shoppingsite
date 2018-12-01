import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import showproduct from '@/components/showproduct'  
import sellproduct from '@/components/sellproduct'
import cart from '@/components/cart'
import addItem from '@/components/addItem'
import ProductionPage from '@/views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'showproduct',
      component: showproduct
    },
    {
      path: '/sellproduct',
      name: 'sellproduct',
      component: sellproduct
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },   
    {
      path: '/addItem',
      name: 'addItem',
      component: addItem
    },
    {
      path: '/ProductionPage',
      name: 'ProductionPage',
      component: ProductionPage
    }
  ]

})
