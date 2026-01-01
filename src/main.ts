import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vScroll from './directives/vScroll'
import vMotion from './directives/vMotion'
import { useTheme } from './composable/useTheme'

// Inicializar tema antes de montar o app para evitar flash
const { initTheme } = useTheme();
initTheme();

const app = createApp(App)

app.directive('scroll', vScroll);
app.directive("motion", vMotion);

app.mount('#app')
