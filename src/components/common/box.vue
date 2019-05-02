<template>
  <section class="box-wrapper">
    <header class="box-header">
      <icon :name="this.icon" style="font-size: 16px;"/>
      <span>{{ this.title }}</span>
    </header>
    <div class="box-main">
      <slot></slot>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.box-wrapper {
  height: 100%;
  margin-bottom: 25px;
  background: #fff;
  border: 1px solid #e4e5e7;
  border-radius: 0px;
  margin: 20px;

  .box-header {
    border-top: 1px solid #e4e5e7;
    border-bottom: 1px solid #e4e5e7;
    border-top-width: 3px;
    font-weight: normal;
    padding: 10px 10px;
    border-radius: 0px;
    font-size: 14px;
  }
  .box-main {
    background: #fff;
    padding: 20px;
    position: relative;
    min-height: 200px
  }
}
</style>

<script>
export default {
  name: 'box',
  props: {
    title: {
      type: String
    },
    icon: {
      type: String
    }
  },
  data() {
    return {};
  }
};
</script>
