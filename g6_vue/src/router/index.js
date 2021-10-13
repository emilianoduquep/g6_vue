import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Calificaciones from '../views/Calificaciones.vue'
import Informacion from '../views/Informacion.vue'
import Contacto from '../views/Contacto.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/calificaciones',
    name: 'Calificaciones',
    component: Calificaciones
  },
  {
    path: '/informacion',
    name: 'Informacion',
    component: Informacion
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
