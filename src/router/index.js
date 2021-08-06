import { createRouter, createWebHistory } from 'vue-router'
import Home from './../pages/Home.vue'

const routes = [
    {
        path: '/Home',
        name: 'Home',
        component: Home,
    },
    {
        path: '',
        component: () =>
            import(/* webpackChunkName: "Main" */ '../layouts/Main.vue'),
        children: [
            {
                path: '/',
                redirect: '/',
            },
            {
                path: '/About',
                name: 'About',
                component: () =>
                    import(
                        /* webpackChunkName: "About" */ '../pages/About.vue'
                    ),
            },
            {
                path: '/Contact',
                name: 'Contact',
                component: () =>
                    import(
                        /* webpackChunkName: "Contact" */ '../pages/Contact.vue'
                    ),
            },
            {
                path: '/Gallery',
                name: 'Gallery',
                component: () =>
                    import(
                        /* webpackChunkName: "Gallery" */ '../pages/Gallery.vue'
                    ),
            },
            {
                path: '/News',
                name: 'News',
                component: () =>
                    import(/* webpackChunkName: "News" */ '../pages/News.vue'),
            },
            {
                path: '/Workshop',
                name: 'Workshop',
                component: () =>
                    import(
                        /* webpackChunkName: "Workshop" */ '../pages/Workshop.vue'
                    ),
            },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
