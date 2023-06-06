import * as _ from "lodash";

export default {
    // 状态
    state: {
        // 总菜单数据
        totalMenu: [],
        // 侧边栏菜单
        sideMenu: []
    },
    // mutations
    mutations: {
        // 更新总菜单数据
        updateTotalMenu(state: any, { totalMenu }: { totalMenu: Array<any> }) {
            // 获取菜单长度
            const totalMenuLength = totalMenu == null ? 0 : totalMenu.length;
            // 更新总菜单数据
            state.totalMenu = totalMenuLength ? totalMenu : [];
        },
        // 通过Id更新总菜单数据
        updateTotalMenuById(state: any, menu: { id: string}) {
            // 获取对应菜单
            const index = _.findIndex(state.totalMenu, (item: any) => item.id == menu.id);
            // 修改对应
            index > -1 && (state.totalMenu[index] = menu)
        },
        // 更新侧边栏菜单
        updateSideMenu(state: any, { menus }: { menus: Array<any> }) {
            // 获取菜单长度
            const menusLength = menus == null ? 0 : menus.length;
            // 更新侧边栏菜单
            state.sideMenu = menusLength ? menus : [];
        }
    },
    // 获取
    getters: {
        // 获取根部菜单
        rootMenu(state: any) {
            // 父级菜单Id为空则为顶级菜单
            return _.find(state.totalMenu, (item: any) => item.pMenuId === "");
        },
        // 获取顶部菜单
        topMenuList(state: any, getters: any) {
            // 获取根部菜单
            const rootMenu = getters.rootMenu;
            // 获取父级菜单ID为根部菜单的菜单
            return state.totalMenu.filter((item: any) => item.pMenuId == rootMenu.id && item.enable)
        },
        // 获取侧边栏菜单
        sideMenuList: (state: any) => (route: string) => {
            if (route && route != '/') {
                // 获取当前路由对应的顶部菜单
                const topMenu = _.find(state.totalMenu, (item: any) => item.route == route);
                // 返回父级菜单ID为当前路由的菜单
                return state.totalMenu.filter((item: any) => item.pMenuId == topMenu.id && item.enable);
            }
            return [];
        },
        // 获取可配置的菜单
        menuSettingList(state: any, getters: any) {
            // 获取根部菜单
            const rootMenu = getters.rootMenu;
            // 获取顶部菜单
            let topMenu =  _.filter(state.totalMenu, item => item.pMenuId == rootMenu.id)
            // 获取侧边栏测但
            let sideMenu = _.filter(state.totalMenu, item => _.findIndex(topMenu, top => top.id == item.pMenuId) > -1);
            // 返回
            return _.concat(topMenu, sideMenu);
        }
    }
}