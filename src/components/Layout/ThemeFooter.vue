<template>
  <footer class="footer">
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
export default {}

</script>
<style>

</style>
