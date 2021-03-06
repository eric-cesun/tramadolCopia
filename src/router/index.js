import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import What from '../views/What.vue'
import How from '../views/How.vue'
import Precautions from '../views/Precautions.vue'
import Contact from '../views/Contact.vue'
import Products from '../views/Products.vue'
import OrderNow from '../views/OrderNow.vue'
Vue.use(VueRouter)

const routes = [{
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
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/what',
        name: 'What',
        component: What
    },
    {
        path: '/how',
        name: 'How',
        component: How
    },
    {
        path: '/precautions',
        name: 'Precautions',
        component: Precautions
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/products',
        name: 'Products',
        component: Products
    },
    {
        path: '/orderNow/:text',
        name: 'OrderNow',
        component: OrderNow
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router