<template>
    <div class="wrapper" :class="{'nav-open': $sidebar.showSidebar}">
        <side-bar>
            <mobile-menu></mobile-menu>
            <template slot-scope="props" slot="links">
                <sidebar-item :link="{name: 'Home', icon: 'nc-icon nc-chart-pie-35', path: '/home'}"></sidebar-item>
                <sidebar-item :link="{name: 'Blog', icon: 'nc-icon nc-app', path: '/blog'}"></sidebar-item>
                <sidebar-item :link="{name: 'Gallery', icon: 'nc-icon nc-notes', path: '/gallery'}"></sidebar-item>
                <sidebar-item :link="{name: 'Links', icon: 'nc-icon nc-paper-2', path: '/links'}"></sidebar-item>
                <sidebar-item :link="{name: 'About', icon: 'nc-icon nc-pin-3', path: '/about'}"></sidebar-item>
                <sidebar-item :link="{name: 'Shop', icon: 'nc-icon nc-chart-bar-32', path: '/shop'}"></sidebar-item>
            </template>
        </side-bar>
        <div class="main-panel">
            <theme-navbar></theme-navbar>
            <theme-header></theme-header>
            <theme-content @click.native="toggleSidebar"></theme-content>
            <theme-footer></theme-footer>
        </div>
    </div>
</template>
<script>
import ThemeNavbar from './ThemeNavbar.vue'
import ThemeHeader from './ThemeHeader.vue'
import ThemeFooter from './ThemeFooter.vue'
import ThemeContent from './ThemeContent.vue'
import MobileMenu from './MobileMenu.vue'
export default {
  name: 'ThemeLayout',
  components: {
    ThemeNavbar,
    ThemeHeader,
    ThemeFooter,
    ThemeContent,
    MobileMenu
  },
  methods: {
    toggleSidebar () {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false)
      }
    }
  }
}
</script>
<style lang="scss">

</style>
