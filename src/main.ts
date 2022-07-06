import { createApp } from 'vue'
import { setupNaiveUI } from './plugins';
import App from './App.vue'

async function setupApp() {

  
    const app = createApp(App);
  


  
    // 按需引入naiveUI
    setupNaiveUI(app);
  
  
    // 路由准备就绪后挂载 App
    app.mount('#app');
  }
  
  setupApp();
