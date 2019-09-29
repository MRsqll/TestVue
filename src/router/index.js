import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import aParent from  '../view/parentChild/aParent'
import aChild from  '../view/parentChild/aChild'
import brother from  '../view/brother/brother'
import sister from  '../view/brother/sister'
import total from  '../view/vuex/total'
import cal from '../view/vuex/cal'
import modifier from '../view/modifier/modifier'
import watchComputed from '../view/aComputed/watchComputed'
import aComputed from '../view/aComputed/aComputed'
import tablePre from '../view/aComputed/tablePre'
import aDirective from '../view/aDirective/aDirective'
import aFilter from '../view/aFilter/aFilter'
import aRender from '../view/aRender/aRender'
import scopeSlot from '../view/scopeSlot/scopeSlot'
import sChild from '../view/scopeSlot/sChild'
import aPage from '../view/routerId/aPage'
import bPage from '../view/routerId/bPage'
import headerNav from '../components/headerNav'
import leftNav from '../components/leftNav'
import arrChange from '../view/list/arrChange'
import useTable from '../view/eleComponent/eleTable/useTable'
import leftIndex from '@/components/leftIndex'
import aEcharts from '../view/aEcharts/aEcharts'
import listTree from '../view/eleComponent/eleTree/listTree'
import createTree from '../view/eleComponent/eleTree/createTree'
import editTree from '../view/eleComponent/eleTree/editTree'

Vue.use(Router)

const routers =  new Router({
  routes: [
    {
      path: '/sChild',
      name: 'sChild',
      component: sChild
    },
    {
      path: '/bPage/:data/:id',
      name: 'bPage',
      component: bPage
    },
    {
      path: '/tablePre',
      name: 'tablePre',
      component: tablePre
    },
    {
      path: '/aComputed',
      name: 'aComputed',
      component: aComputed
    },
    {
      path: '/cal',
      name: 'cal',
      component: cal
    },

    {
      path: '/sister',
      name: 'sister',
      component: sister
    },

    {
      path: '/achild',
      name: 'aChild',
      component: aChild
    },
    {
      path: '/headerNav',
      name: 'headerNav',
      component: headerNav
    },
    {
      path: '/',
      name: 'leftNav',
      component: leftNav,
      redirect: '/leftIndex',
      children: [
        {
          path: '/leftIndex',
          name: 'leftIndex',
          component: leftIndex
        },
          {
              path: '/listTree',
              name: 'listTree',
              component: listTree
          },{
              path: '/editTree/:id',
              name: 'editTree',
              component: editTree
          },
          {
              path: '/createTree',
              name: 'createTree',
              component: createTree
          },
          {
              path: '/aEcharts',
              name: 'aEcharts',
              component: aEcharts
          },
        {
          path: '/useTable',
          name: 'useTable',
          component: useTable
        },
        {
          path: '/aParent',
          name: 'aParent',
          component: aParent
        },
        {
          path: '/brother',
          name: 'brother',
          component: brother
        },
        {
          path: '/total',
          name: 'total',
          component: total
        },
        {
          path: '/modifier',
          name: 'modifier',
          component: modifier
        },
        {
          path: '/watchComputed',
          name: 'watchComputed',
          component: watchComputed
        },
        {
          path: '/aRender',
          name: 'aRender',
          component: aRender
        },
        {
          path: '/scopeSlot',
          name: 'scopeSlot',
          component: scopeSlot
        },
        {
          path: '/aPage',
          name: 'aPage',
          component: aPage,
        },
        {
          path: '/arrChange',
          name: 'arrChange',
          component: arrChange
        },
        {
          path: 'aFilter',
          name: 'aFilter',
          component: aFilter,
        },{
          path: 'aDirecyive',
          name: 'aDirective',
          component: aDirective,
        }
      ]
    }
  ]
})



export default routers
