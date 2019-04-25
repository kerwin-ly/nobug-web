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
              <li>
                <a>
                  <icon name="user"/>个人信息
                </a>
              </li>
              <li>
                <a>
                  <icon name="vcard" />
                  账号设置
                </a>
              </li>
              <li class="exit">
                <a>
                  <icon name="power-off" />
                  退出
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </el-header>
    <el-main class="main" id="content">
      <router-view></router-view>
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
          right: -20px;
          top: 60px;
          width: 160px;
          background-color: #fff;
          font-size: 13px;
          box-shadow: 0 6px 12px rgba(0,0,0,.1);
          color: #333;

          li {
            padding: 0;
            background: #FFF;
            width: 100%;
            height: 36px;
            line-height: 36px;

            a {
              i {
                padding-right: 5px;
              }
              padding: 15px;
            }
          }
          .exit {
            border-top: 1px solid #e4e5e7;
            text-align: center;
          }
          li:hover {
            background-color: #f1f3f6;
          }
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
  mounted() {
    document.getElementById('content').onclick = () => {
      if (this.isShowUserSelect) {
        this.isShowUserSelect = false;
      }
    };
  },
  methods: {
    handleSelect() {},
    toggleUserMenus() {
      this.isShowUserSelect = !this.isShowUserSelect;
    }
  }
};
</script>
