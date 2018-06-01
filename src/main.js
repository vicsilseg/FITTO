/* SERVICES */
import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes/routes";
import { TweenMax, TimelineMax, MorphSVGPlugin } from "gsap";
import { store } from "./store/store"
import VueTouch from 'vue-touch';
/* CSS */

import "./styles/reset.css";
import "./styles/main.css";

/* SERVICES USE */

Vue.use(VueRouter);
Vue.use(VueTouch);

const router = new VueRouter({
  routes
});

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
});

