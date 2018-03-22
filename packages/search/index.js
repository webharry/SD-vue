/* 组件注册文件 */
import search from './search.vue'

search.install = function (Vue) {
  Vue.component('search', search)
}

export default search
