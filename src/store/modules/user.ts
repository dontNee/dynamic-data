import Api from "../../api/index"

export default {
    // 状态
    state: {
        // 当前用户
        user: null
    },
    // mutations
    mutations: {
        // 用户登录
        updateUser(state: any, userInfo: { userName: string, password: string }) {
            // 更新用户
            state.user = userInfo;
        },
        // 退出登录
        deleteUser(state: any) {
            // 删除当前用户
            state.user = null;
        }
    },
    // action
    actions: {
        // 用户登录-一般都是异步方法回调
        userLogin({ commit }: any, userInfo: { userName: string, password: string }) {
            // 返回
            return new Promise((resolve, reject) => {
                // 调用用户登录方法
                Api.userLogin(userInfo, (result: boolean) => {
                    if (result) {
                        commit('updateUser', userInfo);
                    }
                    resolve(result);
                });
            })
        }
    }
}