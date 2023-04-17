import Home from '@/views/Home.vue'
import LifeStyle from '@/views/LifeStyle.vue'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {path : '/',component :Home},
    {path : '/lifestyle',component :LifeStyle},
    
]

const router = createRouter({
  
    history: createWebHistory(),
    routes,
  })

  export default router