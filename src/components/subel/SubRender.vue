<script lang="ts">
import { h } from 'vue'

export default {
  props: {
    // 渲染函数
    render: {
      type: Function,
      default(createElement: any) {
        return createElement('div', "blank")
      }
    },
    // 参数
    params: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(props) {
    // 返回渲染函数
    return () => props.render(h, props.params);
  }
}
</script>