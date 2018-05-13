import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/home.vue';
import About from '../components/aboutUs.vue';
import Services from '../components/services.vue';
import Portfolio from '../components/portfolio.vue';
import Blog from '../components/blog.vue';
import Contact from '../components/contact.vue';
import loading from '../components/loading.vue';

Vue.use(VueRouter);
const routes = [{
        path: '/loading',
        name: 'loaging',
        component: loading
    },
    {
        path: '/',
        name: 'Home',
        meta: {
            title: 'CompanyHome'
        },
        component: Home
    },
    {
        path: '/about',
        name: 'aboutUs',
        meta: {
            title: 'CompanyAboutUs'
        },
        component: About
    },
    {
        path: '/services',
        name: 'services',
        meta: {
            title: 'CompanyServices'
        },
        component: Services
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        meta: {
            title: 'CompanyPortfolio'
        },
        component: Portfolio
    },
    {
        path: '/blog',
        name: 'blog',
        meta: {
            title: 'CompanyBlog'
        },
        component: Blog
    },
    {
        path: '/contact',
        name: 'contact',
        meta: {
            title: 'CompanyContact'
        },
        component: Contact
    }
]
const RouterConfig = {
    mode: 'history',
    routes: routes
}
const router = new VueRouter(RouterConfig);
router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
});
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
})

export default new VueRouter({
    router: routes
})