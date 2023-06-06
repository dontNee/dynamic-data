import apiAxios from './api-axios';

export default {
    // 获取博客列表
    getBlogList(params: any, callback: (result: any) => void) {
        // 获取博客
        apiAxios.get('http://43.138.104.32/api/blog/list', params, callback);
    },
    // 通过Id获取博客详情
    getBlogById(params: { sid: string }, callback: (result: any) => void) {
        // 根据Id获取
        apiAxios.get('/api/blog/detail', params, callback);
    },
    // 新增博客
    addBlog(params: Blog, callback: (result: any) => void) {
        // 新增博客
        apiAxios.post('/api/blog/list', params, callback);
    },
    // 更新博客
    updateBlog(params: { sid: string}, callback: (result: any) => void) {
        // 更新博客
        apiAxios.post('/api/blog/update', params, callback);
    }
}

interface Blog {
    blogAuthor: string,
    blogViewTimes: number,
    blogTitle: string,
    blogContent: string
}