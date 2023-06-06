import axios from "axios"

// 请求通用方法
function apiAxios(method: string, url: string, params: any, callback: any) {
    // Axios Api
    axios({
        method: method,
        url: url,
        data: params
    })
    .then(res => {
        if (res && res.status == 200) {
            // 返回服务器响应结果
            callback(res.data);
        } else {
            callback();
        }
    })
    .catch(err => {

        // 是否接收到服务器响应
        if (err.response) {

            console.error("错误的服务器响应: ", err);
        }
        // 发送请求但没有接收到服务器响应
        if (!err.response && err.request) {

            console.error("服务器响应超时...");
        }
    })
}

export default {
    // get函数
    get(url: string, params: any, callback: any) {
        // 调用
        apiAxios("get", url, params, callback);
    },
    // post函数
    post(url: string, params: any, callback: any) {
        // 调用post
        apiAxios("post", url, params, callback);
    }
}