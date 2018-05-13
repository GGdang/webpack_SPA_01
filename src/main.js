
import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router';
import store from './store';


import 'bootstrap';
import 'bootstrap/scss/bootstrap-reboot.scss';
import 'bootstrap/scss/bootstrap.scss';
import $ from 'jquery';
import 'font-awesome/scss/font-awesome.scss';

import Home from './components/home.vue';
import About from './components/aboutUs.vue';
import Services from './components/services.vue';
import Portfolio from './components/portfolio.vue';
import Blog from './components/blog.vue';
import Contact from './components/contact.vue';
import loading from './components/loading.vue';


import WOW from 'wowjs';
import {UAnimateContainer, UAnimate} from 'vue';
import VueWow from 'vue-wow';
Vue.use(VueWow);
// import * as VueGoogleMaps from 'vue2-google-maps';
// Vue.use(VueGoogleMaps,{
//     load:{
//         key:'AIzaSyDqajvV0wDw6X1n8SytgDNzwqt0eMAfeWg',
//     }
// });
Vue.use(VueRouter);
new WOW.WOW().init();

let routes = [
    {
        path:'/loading',
        name:'loaging',
        component:loading
    },
    {
        path:'/',
        name:'Home',
        meta:{
            title:'CompanyHome'
        },
        component:Home
    },
    {
        path:'/about',
        name:'aboutUs',
        meta:{
            title:'CompanyAboutUs'
        },
        component:About
    },
    {
        path:'/services',
        name:'services',
        meta:{
            title:'CompanyServices'
        },
        component:Services
    },
    {
        path:'/portfolio',
        name:'portfolio',
        meta:{
            title:'CompanyPortfolio'
        },
        component:Portfolio
    },
    {
        path:'/blog',
        name:'blog',
        meta:{
            title:'CompanyBlog'
        },
        component:Blog
    },
    {
        path:'/contact',
        name:'contact',
        meta:{
            title:'CompanyContact'
        },
        component:Contact
    }
]

const RouterConfig = {
    // mode:'history',
    routes:routes
}
const router = new VueRouter(RouterConfig);

router.beforeEach((to,from,next)=>{
    window.document.title = to.meta.title;
    
    next();
});
let nowPage = '';
router.afterEach((to,from,next)=>{
    window.scrollTo(0,0);
    // console.log(to.name,from.name);
    nowPage = to.name;
})
new Vue({
    el:'#app',
    data:{
    },
    created(){
        this.$store.state.activePage.nowPage=nowPage;
        console.log(this.$store.state.activePage.nowPage);
    },
    router,
    store,
    render:h => h(App)
});

