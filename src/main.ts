import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import router from './plugins/router';
import { initAuth, useAuth } from './composables/useClerk';
import { VueQueryPlugin } from "@tanstack/vue-query";


const main = async () => {
  await initAuth();
  const app = createApp(App).use(router).use(VueQueryPlugin);
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) router.push({ name: 'Login' });
  app.mount('#app');
}

main();
