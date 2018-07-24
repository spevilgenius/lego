/* eslint-disable */
import Components from './components'
import GlobalComponents from './globalComponents'
import GlobalDirectives from './globalDirectives'
import SideBar from './components/SidebarPlugin'
import VueTabs from 'vue-nav-tabs'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import 'bootstrap/dist/css/bootstrap.css'
import 'vue-nav-tabs/themes/vue-tabs.scss'
import './assets/sass/legobootstrap.scss'
import './assets/css/lego.css'
import 'es6-promise/auto'
locale.use(lang)

export default {
  async install (Vue) {
    Vue.use(GlobalComponents)
    Vue.use(GlobalDirectives)
    Vue.use(Components)
    Vue.use(SideBar)
    Vue.use(VueTabs)
  }
}
