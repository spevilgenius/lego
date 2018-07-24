/* eslint-disable */
import DropDown from './components/Dropdown.vue'
import Card from './components/Cards/Card.vue'

const GlobalComponents = {
  install (Vue) {
    Vue.component('drop-down', DropDown)
    Vue.component('card', Card)
  }
}

export default GlobalComponents
