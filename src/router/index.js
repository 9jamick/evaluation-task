import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import MovieDetail from '../views/MovieDetail.vue'
import FavoritesPage from '../views/FavoritesPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/movie/:id',
      name: 'movie-detail',
      component: MovieDetail
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesPage
    }
  ]
})

export default router
