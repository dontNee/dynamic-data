import totalMenuJsonData from "../data/menu.json"
import tableJsonData from "../data/table.json"
import optionJsonData from "../data/option.json"
import datasetJsonData from "../data/dataset.json"
import axios from 'axios';

// 开发模式
const devMode = true;

export default {
    // 获取菜单数据
    getTotalMenuData(params: any, callback: (x: Array<any>) => void) {
        if (devMode) {
            // 获取本地文件数据
            return callback(totalMenuJsonData);
        }
    },
    // 用户登录
    userLogin(params: any, callback: (x: boolean) => void) {
        if (devMode) {
            // 用户名为admin且密码是123456时，返回成功
            return callback(params.userName == "admin" && params.password == "123456");
        }
    },
    // 获取表格配置
    getTableColumn(tableName: "menuSetting" | "blogTable"): any {
        // 获取对应的表格配置
        return tableJsonData[tableName] ? tableJsonData[tableName] : [];
    },
    // 获取Echarts基础配置项
    getEchartOptions(type: "bar" | "map" | "line" | "pie") {
        // 获取对应的option
        return optionJsonData[type];

    },
    // 获取Echarts数据集
    getEchartDataset(type: "bar" | "map" | "line" | "pie") {
        return datasetJsonData[type]
    },
    // 获取地图
    getMapJson(mapcode: string) {
        // 请求服务器
        return axios.get(`/global-assets/file/geoJson/${mapcode}_full.json`);
    }
}