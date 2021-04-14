'use strict'

import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './../views/home'
import Perfil from './../views/perfil'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/perfil/:username',
      component: Perfil,
      /*
      children: [
        {
          path: '/:username',
          component: Perfil
        }
      ]
      */
    }
  ]
})
