import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FavouritesView from '../views/FavouritesView.vue'
import CollectionView from '../views/CollectionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/favourites',
      name: 'favourites',
      component: FavouritesView
    },
    {
      path: '/collection/:code',
      name: 'collection',
      component: CollectionView
    }
  ]
})

export default router
