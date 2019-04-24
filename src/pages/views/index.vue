<template>
  <el-container>
    <el-header class="nav-header">
      <div class="header-left">
        <div class="logo-wrapper">
          <img src="../../assets/imgs/logo.png" alt="nobug" />
        </div>
      </div>
      <div class="header-right">
        <ul>
          <li @click="toggleUserMenus">
            <div class="user-wrapper">
              <span class="circle">{{ this.userInfo.name && this.userInfo.name.substring(0, 1) }}</span>
              <a class="user">{{ this.userInfo.name }}</a>
              <icon name="sort-down" class="sort-down" />
            </div>
            <ul class="user-dropdown-menu" v-show="isShowUserSelect">
              <li>123</li>
              <li>123</li>
              <li>123</li>
            </ul>
          </li>
        </ul>
      </div>
    </el-header>
    <el-main class="main">
      <header class="main-header">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item v-for="(item, index) in menus" :index="String(index)" :key="index">
            <icon :name="item.icon" />
            {{ item.title }}
          </el-menu-item>
        </el-menu>
      </header>
    </el-main>
  </el-container>
</template>

<style lang="scss" scoped>
.nav-header {
  background-color: #1e384c !important;
  color: #fff;
  height: auto !important;
  border: none !important;
  margin-bottom: 0 !important;
  width: 100%;

  .header-left {
    float: left;

    .logo-wrapper {
      float: left;

      img {
        float: left;
        width: 120px;
        padding: 12px 12px 18px 18px;
      }
    }
  }
  .header-right {
    float: right;

    ul {
      li {
        padding: 15px;
        line-height: 28px;
        position: relative;

        .user-wrapper {

          .circle {
            background-color: #60cce1;
            display: inline-block;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            color: #fff;
            font-size: 18px;
            text-align: center;
          }
          .user {
            display: inline-block;
            color: #FFF;
            font-size: 14px;
            padding-left: 10px;
          }
          .sort-down {
            @extend .user;
            padding-left: 0;
            vertical-align: top;
            padding-top: 6px;
          }
        }
        .user-dropdown-menu {
          position: absolute;
          z-index: 1000;
          right: 0;
          top: 60px;
          width: 240px;
          background-color: #fff;
        }
      }
      li:hover {
        background: rgba(255, 255, 255, .1);
        cursor: pointer;
      }
    }
  }
}
.main {
  padding: 0;

  .main-header {
    padding-left: 20px;
    padding-right: 20px;
    background: #fff;
  }
  .el-menu--horizontal > .el-menu-item {
    height: 46px;
    line-height: 46px;
  }
}

</style>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      activeIndex: '0',
      menus: [{
        icon: 'navicon',
        title: '概览'
      }, {
        icon: 'file',
        title: '问题'
      }, {
        icon: 'bar-chart',
        title: '统计'
      }, {
        icon: 'cog',
        title: '设置'
      }],
      isShowUserSelect: false
    };
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    handleSelect() {},
    toggleUserMenus() {
      this.isShowUserSelect = !this.isShowUserSelect;
    }
  }
};
</script>
