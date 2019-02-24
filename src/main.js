import Vue from 'vue'
import App from './components/App.vue'
import VueMasonry from 'vue-masonry-css';

Vue.config.productionTip = false

Vue.use(VueMasonry);

new Vue({
  render: h => h(App),
}).$mount('#app')
