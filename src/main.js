import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

// custom style show or hide
Vue.directive('visible', function(el,binding) {
	el.style.visibility = binding.value ? 'visible' : 'hidden';
});

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
