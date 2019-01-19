import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ComingSoon from './views/ComingSoon.vue'
import InTheaters from './views/InTheaters.vue'
import Weekly from './views/Weekly.vue'
import NewMovies from './views/NewMovies.vue'
import UsBox from './views/UsBox.vue'
import Top250 from './views/Top250.vue'
import SearchMovie from './views/SearchMovie.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/comingSoon',
            name: 'comingSoon',
            component: ComingSoon
        },
        {
            path: '/inTheaters',
            name: 'inTheaters',
            component: InTheaters
        },
        {
            path: '/newMovies',
            name: 'newMovies',
            component: NewMovies
        },
        {
            path: '/usBox',
            name: 'usBox',
            component: UsBox
        },
        {
            path: '/top250',
            name: 'top250',
            component: Top250
        },
        {
            path: '/weekly',
            name: 'weekly',
            component: Weekly
        },
        {
            path: '/searchMovie',
            name: 'searchMovie',
            component: SearchMovie
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})
