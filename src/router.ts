import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('./views/Home.vue') },
  { path: '/about', component: () => import('./views/About.vue') },
  { path: '/selected-country/:name', component: () => import('./views/SelectedCountry.vue') }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {top: 0, left: 0, behavior: "smooth"}
  }
});

export default router;
