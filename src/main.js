import { createApp } from 'vue';
import App from '../apps/app.vue';

const app = createApp(App);
app.mount('#app');

if(app.mount){
    console.log('Mounted');
}