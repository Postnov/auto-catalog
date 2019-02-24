import Vue from 'vue';
import VueMasonry from 'vue-masonry-css';
import App from './components/App.vue';

Vue.config.productionTip = false;

Vue.use(VueMasonry);

new Vue({
  render: h => h(App),
}).$mount('#app');
