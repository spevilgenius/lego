<template>
  <footer class="footer" :style="footerStyle" :data-image="backgroundImage">
    <div class="container-fluid d-flex flex-wrap justify-content-between">
      <nav>
        <ul class="footer-menu">
          <li>
            <router-link :to="{path:'/admin'}">LegoDan</router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; Coded with
        <i class="fa fa-heart heart"></i> by
        <a href="legodan.com" target="_blank">legodan</a>.
        Designed by <a href="http://legodan.com" target="_blank" rel="noopener">legodan</a>.
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundImage: {
      type: String,
      default: 'wp-content/themes/lego/dist/static/img/LegoRed1x1.png'
    }
  },
  computed: {
    footerStyle () {
      return {
        backgroundImage: `url(${this.backgroundImage})`
      }
    }
  }
}
</script>
<style>

</style>
