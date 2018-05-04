<template>
    <div class="alert">
        <div class="content">
            <i class="warning"></i>
            <div class="con">{{content}}</div>
        </div>
        <a class="btn ui-alert-cancel" @click="() => this.$emit('ui-alert-cancel')">{{cancel}}</a>
        <a class="btn ui-alert-confirm" @click="() => this.$emit('ui-alert-confirm')">{{confirm}}</a>
    </div>
</template>
<script>
export default {
  name: "Alert",
  props: {
    content: {
      default: "确认后不能撤销",
      type: String
    },
    confirm: {
      default: "确定",
      type: String
    },
    cancel: {
      default: "取消",
      type: String
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.alert {
  margin: auto;
  width: 300px;
  padding: 10px;
  border-radius: 4px;
  background: #ccc;
  box-shadow: #2d8cf0;
  .content {
    min-height: 100px;
    margin: 10px;
  }
  .btn {
    display: inline-block;
    height: 20px;
    width: 40px;
    border-radius: 8px;
    cursor: pointer;
  }
  .ui-alert-cancel {
    padding: 6px 15px 7px;
    margin-left: 140px;
    color: #495060;
    background-color: #fff;
  }
  .ui-alert-confirm {
    padding: 6px 15px 7px;
    color: #fff;
    background-color: #2d8cf0;
  }
}
</style>