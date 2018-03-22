# search搜索组件
使用示例：
```html
<template>
  <div>

    <Search :searchKey="page.key" :searchcontent="searchcontent" v-on:increment="go"></Search>

  </div>
</template>

<script>
import Search from './components/search'
import Vue from 'vue'

Vue.use(Search);

export default {
  name: 'componentName',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      page: {
        key: ""
      },
      searchcontent:'请输入...', //搜索文本内容
    }
  },
  methods: {
    go: function(payload) {
      this.page.key = payload.key;
      console.log('this.page.key=',this.page.key);
      //这里写你的业务逻辑
    },
  },
  components: {
    Search
  }
}
</script>

<style>

</style>

```