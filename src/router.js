import VueRouter from 'vue-router';

const router = new VueRouter({
    mode: 'history',
    routes:
        [
            { path: '/', redirect: '/home' },
            {
                path: '/home', component: () => import('./components/app-home.vue'), beforeEnter(to, from, next) {
                    if (localStorage.getItem('user')) {
                        next()
                    } else {
                        next('/unAuth')
                    }
                }
            },
            { path: '/unAuth', component: () => import('./components/app-home-unAuth.vue') },
            { path: '/login', component: () => import('./components/auth/app-login.vue') },
            { path: '/create', component: () => import('./components/app-create.vue'), beforeEnter: authGuard },
            { path: '/register', component: () => import('./components/auth/app-register.vue') },
            { path: '/details/:id', component: () => import('./components/app-details.vue'), beforeEnter: authGuard },
            { path: '/comment/:id', component: () => import('./components/app-comments.vue'), beforeEnter: authGuard },
            { path: '*', component: () => import('./components/shared/app-not-found.vue') }
        ]
});

function authGuard(to, from, next) {
    if (localStorage.getItem('user')) {
        next()
    } else {
        next('/login')
    }
}

export default router;