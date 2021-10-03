import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import routes from './routes';

import './index.scss';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  mode: 'history',
});

new Vue({
  el: '#root',
  render: (h) => h(App),
  router,
});

// if (module.hot) {
//   module.hot.accept();
// }

// https://github.com/persteenolsen/webpack-5-vue-boilerplate
