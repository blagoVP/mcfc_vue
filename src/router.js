import VueRouter from 'vue-router';
import AppLogin from './components/auth/app-login.vue';
import AppCreate from './components/app-create.vue';
import AppRegister from './components/auth/app-register.vue';
import AppHome from './components/app-home.vue';
import AppHomeUnAuth from './components/app-home-unAuth.vue';
import AppDetails from './components/app-details.vue';
import AppNotFound from './components/shared/app-not-found.vue';

function authGuard(to, from, next){
    if (localStorage.getItem('user')){
        next()
    } else {
        next('/login')
    }
}

const router = new VueRouter({
    mode: 'history',
    routes:
        [
            { path: '/login', component: AppLogin },
            { path: '/create', component: AppCreate, beforeEnter: authGuard },
            { path: '/register', component: AppRegister },
            { path: '/home', component: AppHome, beforeEnter(to, from, next){
                if (localStorage.getItem('user')){
                    next()
                } else {
                    next('/')
                }
            }},
            { path: '/', component: AppHomeUnAuth },
            {path: '/details/:id', component: AppDetails, beforeEnter: authGuard},
            {path: '*', component: AppNotFound}
        ]
});

export default router;