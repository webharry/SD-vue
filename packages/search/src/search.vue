<template>
  <div class="search">
    <Input v-model="searchKey" :placeholder="searchcontent" @on-enter="handleSendMessage">
    <Button slot="append" icon="ios-search" @click="handleSendMessage"></Button>
    </Input>
  </div>
</template>
<script>
export default {
  props: ['searchcontent'],
  data() {
    return {
        searchKey:''
    };
  },
  mounted() {},
  methods: {
    handleSendMessage: function() {
      this.$emit('increment',{ key: this.searchKey })//触发getUserList事件
    }
  }
};
</script>
<style>
.search {
  float: right;
  margin-left: 100px;
}
</style>