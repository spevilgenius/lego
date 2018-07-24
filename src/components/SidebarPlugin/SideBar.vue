<template>
  <!--<div class="sidebar" :style="sidebarStyle" :data-color="backgroundColor" :data-image="backgroundImage" :data-active-color="activeColor">-->
  <div class="sidebar" :style="sidebarStyle" :data-image="backgroundImage">
    <div class="sidebar-wrapper" ref="sidebarScrollArea">
      <div class="logo">
        <a class="logo-mini" href="https://legodan.com">
          <div class="logo-img" id="logobox">
            <!--<img :src="logo" alt="logo">-->
          </div>
        </a>
        <a href="" class="simple-text logo-normal">
          {{ title }}
        </a>
      </div>
      <slot>

      </slot>
      <ul class="nav">
        <slot name="links">
          <sidebar-item v-for="(link, index) in sidebarLinks"
                        :key="link.name + index"
                        :link="link">

            <sidebar-item v-for="(subLink, index) in link.children"
                          :key="subLink.name + index"
                          :link="subLink">
            </sidebar-item>
          </sidebar-item>
        </slot>

      </ul>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
  const THREE = require('three');
  
  import {
    OBJLoader,
    MTLLoader
  } from 'three';

  require('imports-loader?THREE=three!three/examples/js/loaders/OBJLoader.js');
  require('imports-loader?THREE=three!three/examples/js/loaders/MTLLoader.js');
  export default {
    name: 'sidebar',
    data() {
      return {
        camera: null,
        scene: null,
        renderer: null,
        mesh: null,
        object: null,
        pivot: null
      }
    },
    props: {
      title: {
        type: String,
        default: 'LegoDan'
      },
      backgroundColor: {
        type: String,
        default: 'purple',
        validator: (value) => {
          let acceptedValues = ['', 'blue', 'azure', 'green', 'orange', 'red', 'purple', 'black']
          return acceptedValues.indexOf(value) !== -1
        }
      },
      backgroundImage: {
        type: String,
        default: 'wp-content/themes/lego/dist/static/img/LegoBlack1x1.png'
      },
      activeColor: {
        type: String,
        default: 'success',
        validator: (value) => {
          let acceptedValues = ['primary', 'info', 'success', 'warning', 'danger']
          return acceptedValues.indexOf(value) !== -1
        }
      },
      logo: {
        type: String,
        default: 'wp-content/themes/lego/dist/static/img/LDSBLogo1.png'
      },
      sidebarLinks: {
        type: Array,
        default: () => []
      },
      autoClose: {
        type: Boolean,
        default: true
      }
    },
    provide() {
      return {
        autoClose: this.autoClose
      }
    },
    computed: {
      sidebarStyle() {
        return {
          backgroundImage: `url(${this.backgroundImage})`
        }
      }
    },
    methods: {
      async initScrollBarAsync() {
        await import('perfect-scrollbar/dist/css/perfect-scrollbar.css')
        const PerfectScroll = await import('perfect-scrollbar')
        PerfectScroll.initialize(this.$refs.sidebarScrollArea)
      },
      init: function () {
        var container = document.getElementById('logobox')
        this.scene = new THREE.Scene()
        //this.scene.background = new THREE.Color(0xffffff);
        //this.camera = new THREE.PerspectiveCamera(75, container.innerWidth / container.innerHeight, 0.1, 1000)
        this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)

        var ambientLight = new THREE.AmbientLight(0xffffff, 1);
        this.scene.add(ambientLight);
        var pointLight = new THREE.PointLight(0xffffff, 0.8);
        this.camera.add(pointLight);

        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setSize(80, 80)

        var onProgress = function (xhr) {
          if (xhr.lengthComputable) {
            var percentComplete = xhr.loaded / xhr.total * 100;
            console.log(Math.round(percentComplete, 2) + '% downloaded');
          }
        };
        var onError = function (xhr) { console.log('Error Loading') };

        var thiscomponent = this;

        new THREE.MTLLoader()
          .load('https://legodan.com/wp-content/uploads/2018/models/brick/brick.mtl', function (materials) {
            materials.preload();
            new THREE.OBJLoader()
              .setMaterials(materials)
              .load('https://legodan.com/wp-content/uploads/2018/models/brick/brick.obj', function (object) {
                thiscomponent.loadobject2(object)
              }, onProgress, onError);
          });

      },
      loadobject2: function (object) {
        var container = document.getElementById('logobox')
        object.traverse(function (child) {
          if (child instanceof THREE.Object3D) {
            console.log('CHILD NAME:' + child.name);
            var stop = 'stop';
            if (child.name === 'Part.1') {
              object.getObjectByName("Part.1").material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true });
            }
          }
        });
        this.object = object

        var box = new THREE.Box3().setFromObject(this.object);
        box.center(this.object.position); // this re-sets the mesh position
        this.object.position.multiplyScalar(- 1);

        this.pivot = new THREE.Group();
        this.scene.add(this.pivot)
        this.pivot.add(this.object)

        this.pivot.rotation.x = .45

        //this.object.position.x = 0
        //this.object.position.y = 0
        //this.object.position.z = 0
        //this.scene.add(this.object)
        this.camera.position.z = 30
        container.appendChild(this.renderer.domElement)
        this.animate()
      },
      animate: function () {
        requestAnimationFrame(this.animate)
        this.pivot.rotation.y += 0.04;
        //this.object.rotation.x += 0.05
        //this.object.rotation.y += 0.05
        //this.mesh.rotation.x += 0.01
        //this.mesh.rotation.y += 0.01
        this.renderer.render(this.scene, this.camera)
      }
    },
    mounted() {
      this.initScrollBarAsync();
      this.init();
    },
    beforeDestroy() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.showSidebar = false
      }
    }
  }

</script>
<style>
  @media (min-width: 992px) {
    .navbar-search-form-mobile,
    .nav-mobile-menu {
      display: none;
    }
  }
</style>
