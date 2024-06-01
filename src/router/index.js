import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import OurProductsPage from '@/views/OurProductsPage.vue'

const routes = [
    {
        path: '/',
        name: 'Landing',
        component: LandingPage
    
    },
    {
        path: '/OurProducts',
        name: 'OurProducts',
        component: OurProductsPage
    
    }
]
const router = createRouter({
        history: createWebHistory(),
        routes
})

export default router