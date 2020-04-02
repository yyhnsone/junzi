import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRoute from './movie'
import mineRoute from './mine'
import cinemaRoute from './cinema'

Vue.use(VueRouter)

const routes = [
    movieRoute,
    mineRoute,
    cinemaRoute,
    {
        path: '/*',
        redirect: '/movie'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router