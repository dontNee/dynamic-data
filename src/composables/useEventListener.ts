// event.js
import { onMounted, onUnmounted } from 'vue'

export function useEventListener(target: any, event: string, callback: any) {
  // 如果你想的话，
  // 也可以用字符串形式的 CSS 选择器来寻找目标 DOM 元素
  onMounted(() => {
    // 测试传入的是Dom还是String
    target = target.addEventListener ? target : document.getElementById(target);
    if (!target) {
      return console.debug("添加事件监听器失败");
    }
    // 添加监听器
    target.addEventListener(event, callback);
  })
  onUnmounted(() => {
    // 测试传入的是Dom还是String
    target = target.removeEventListener ? target : document.getElementById(target);
    if (!target) {
      return console.debug("卸载事件监听器失败");
    }
    // 删除监听器
    target.removeEventListener(event, callback);
  })
}