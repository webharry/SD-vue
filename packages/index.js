/**
 * @author webharry
 * Date: 18/03/22
 */
import YSearch from './search/index.js'

const components = [
  YSearch
]
/* 全局引入，注册到Vue component上 */
const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  YSearch
}
