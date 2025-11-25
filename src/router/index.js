import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import OurProductsPage from '@/views/OurProductsPage.vue'
import ContactUsPage from '@/views/ContactUsPage.vue'

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
    },
    {
        path: '/ContactUs',
        name: 'ContactUs',
        component: ContactUsPage
    
    }
    
]
const router = createRouter({
        history: createWebHistory(),
        routes,
        scrollBehavior(to, from, savedPosition) {
            return { top: 0 };
        }
})

export default router