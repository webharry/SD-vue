# YJ-vue
YJ-vue是一款基于 Vue.js 2.0 的前端 UI 组件库，主要用于快速开发 PC 网站中后台产品

## 特性
* 基于Vue开发的UI组件
* 基于iview框架进行封装

> A Vue.js project
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
## 使用
```js
import SelfUI from 'self-component' // 引入组件库
import 'self-component/packages/theme-default/lib/index.css' // 引入样式库

Vue.use(SelfUI)

```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
