// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import cognito from './cognito'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'

// Vue-Awesome
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
// globally (in your main .js file)

Vue.use(BootstrapVue)
Vue.component('icon', Icon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  cognito,
  components: { App },
  template: '<App/>'
})
