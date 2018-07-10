/* eslint-disable */
import ThemeLayout from './components/Layout/ThemeLayout.vue'
import posts from './components/Pages/posts.vue'
import post from './components/Pages/post.vue'
import page from './components/Pages/page.vue'
import category from './components/Pages/category.vue'
import tag from './components/Pages/tag.vue'
/*
const routes = [
  {
    path: '/',
    redirect: '/home',
    component: ThemeLayout,
    children: [
      { path: '/blog/:page(\\d+)?', name: 'home', component: posts },
      { path: '/blog/:name', name: 'post', component: post },
      { path: '/page/:name', name: 'page', component: page },
      { path: '/category/:name', name: 'cat', component: category },
      { path: '/tag/:name', name: 'tag', component: tag }
    ]
  }
]
*/

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: ThemeLayout
  }
]

export default routes
