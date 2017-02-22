//importamos vue
import Vue from 'vue'
//importamos el modulo vue-resource
import VueResource from 'vue-resource'
//importamos nuestro componente
import App from './App.vue'
//le indicamos a vue que utilizaremos vue-resource
Vue.use(VueResource)
// creamos nuestra instancia de vue
new Vue({
	//indicamos el dic preincipal
  el: '#app',
  // hacemos render de nuesto componente, esto es similar a hacer
  // component: {app}
  render: h => h(App)
})
