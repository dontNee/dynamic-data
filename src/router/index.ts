import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TheWelcome from '../components/TheWelcome.vue'
import AboutEcharts from '../components/home/charts/AboutEcharts.vue'
import AboutData from '../components/home/data/AboutData.vue'
import SettingPage from '../components/setting/SettingPage.vue'
import MenuSetting from '../components/setting/MenuSetting.vue'
import BarEcharts from '../components/home/charts/BarEcharts.vue'
import LineEcharts from '../components/home/charts/LineEcharts.vue'
import PieEcharts from '../components/home/charts/PieEcharts.vue'
import MapEcharts from '../components/home/charts/MapEcharts.vue'
import BlogData from '../components/home/data/BlogData.vue'

const router = createRouter({
  // hash路由
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/',
          component: TheWelcome
        },
        {
          path: 'charts',
          component: AboutEcharts
        },
        {
          path: 'data',
          component: AboutData
        },
        {
          path: 'setting',
          component: SettingPage,
          children: [
            {
              path: 'menu_setting',
              component: MenuSetting
            }
          ]
        },
        {
          path: 'bar',
          component: BarEcharts
        },
        {
          path: 'line',
          component: LineEcharts
        },
        {
          path: 'pie',
          component: PieEcharts
        },
        {
          path: 'map',
          component: MapEcharts
        },
        {
          path: 'blog',
          component: BlogData
        }
      ]
    }
  ]
})

export default router
