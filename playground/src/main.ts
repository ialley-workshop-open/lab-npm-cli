import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// @ts-ignore
import routes from 'virtual:generated-pages'; // 类似于router

import InstallPlugin from 'my-custom-vue3-package';

import App from './App.vue';

import '@unocss/reset/tailwind.css';
import 'virtual:windi.css';
import 'uno.css';
import './styles/main.css';
import './index.css';

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
app.use(router);
app.use(InstallPlugin());
app.mount('#app');
