import { createStore } from "vuex";
// 引入菜单模块
import menuModule from './modules/menu'
// 引入用户模块
import userModule from './modules/user';
export default createStore({
    // 模块
    modules: {
        // 菜单模块
        menu: menuModule,
        // 用户模块
        user: userModule
    }
})