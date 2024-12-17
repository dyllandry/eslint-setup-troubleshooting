import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// ts and eslint diagnostic
const unusedVar = 123;

// eslint diagnostic
if (123 == 123) {

// eslint diagnostic
} else if (123 == 123) {

}

createApp(App).mount('#app')
