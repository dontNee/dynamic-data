import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// 导入饿了么组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 导入vuex配置
import store from './store'
// 全局样式
import './assets/main.css'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(store)
// 注册icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
