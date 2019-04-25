<template>
  <section>
    <header class="main-header">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item v-for="(item, index) in menus" :index="String(index)" :key="index">
          <icon :name="item.icon" />
          {{ item.title }}
        </el-menu-item>
      </el-menu>
    </header>
  </section>
</template>

<style lang="scss" scoped>
.main-header {
  padding-left: 20px;
  padding-right: 20px;
  background: #fff;
}
.el-menu--horizontal > .el-menu-item {
  height: 46px;
  line-height: 46px;
}
</style>


<script>
export default {
  data() {
    return {};
  }
};
</script>

