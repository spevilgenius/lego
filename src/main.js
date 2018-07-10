/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import LegoBootstrap from './legobootstrap'
import App from './components/App.vue'
import routes from './routes'

// components
import HelloWorld from '@/components/HelloWorld'
import ThemeLayout from '@/components/Layout/ThemeLayout.vue'

// import routes from './router'

Vue.use(VueRouter)
Vue.use(LegoBootstrap)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ThemeLayout
    }
  ],
  linkActiveClass: 'active'
})

new Vue ({
  el: '#legoapp',
  render: h => h(App),
  router
})