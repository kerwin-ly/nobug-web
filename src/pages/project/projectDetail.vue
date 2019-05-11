<template>
  <section class="menu-wrapper">
    <header class="header">
      <div class="project-name-wrapper">
        <span class="project-color" :style="{backgroundColor: projectInfo.projectColor}"></span>
        <span class="project-name" :title="projectInfo.projectName">{{ projectInfo.projectName }}</span>
      </div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="selectMenu">
        <el-menu-item :index="String(index)" v-for="(item, index) in menuList" :key="index">
          <icon :name="item.icon" />
          {{ item.name }}
        </el-menu-item>
      </el-menu>
      <div class="btn-wrapper">
        <div class="operation-wrapper">
          <img src="../../assets/imgs/provide-user.png" alt="" class="operation-img">
          <el-button type="text">邀请成员</el-button>
        </div>
        <div class="operation-wrapper">
          <img src="../../assets/imgs/add-issue.png" alt="" class="operation-img">
          <el-button type="text">新建问题</el-button>
        </div>
      </div>
    </header>
    <div class="main">
      <router-view></router-view>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '../../style/mixin.scss';
  $headerHeight: 46px;

  .menu-wrapper {
    padding: 0 20px;
    background-color: #fff;
    border-bottom: solid 1px #e6e6e6;
    height: $headerHeight;

    .header {
      .el-menu {
        display: inline-block;
      }
      .el-menu--horizontal {
        border-bottom: none;
      }
      .el-menu--horizontal > .el-menu-item {
        float: left;
        padding-right: 15px;
        padding-left: 15px;
        height: $headerHeight;
        line-height: $headerHeight;
        color: #6a6c6f !important;
      }

      .project-name-wrapper {
        @include textOverflow(152px);

        display: inline-block;
        padding-right: 15px;
        padding-left: 15px;
        height: $headerHeight;
        line-height: $headerHeight;
        color: #6a6c6f !important;
        vertical-align: top;

        .project-color {
          display: inline-block;
          width: 14px;
          height: 14px;
          margin-top: 16px;
          margin-right: 5px;
          border-radius: 3px;
        }
      }
      .btn-wrapper {
        float: right;

        .operation-img {
          width: 26px;
          vertical-align: middle;
        }
        .operation-wrapper {
          line-height: $headerHeight;
          float: right;
          padding-right: 15px;
        }
      }
    }
  }
</style>

<script>
import { projectApi } from '@/api';

export default {
  data() {
    return {
      activeIndex: '-1',
      menuList: [{
        index: '0',
        icon: 'file-text',
        name: '问题',
        routeName: 'issueList'
      }, {
        index: '1',
        icon: 'bar-chart',
        name: '统计',
        routeName: 'issueStats'
      }, {
        index: '2',
        icon: 'file',
        name: '文件',
        routeName: 'projectFile'
      }, {
        index: '3',
        icon: 'cog',
        name: '设置',
        routeName: 'projectSetting'
      }],
      projectInfo: {}
    };
  },
  mounted() {
    this.getProjectDetail();
  },
  methods: {
    getProjectDetail() {
      projectApi.getProjectDetail(this.$route.params.projectId)
        .then((res) => {
          this.projectInfo = res.data;
        });
    },
    selectMenu(key) {
      this.$router.push({
        name: this.menuList[key].routeName
      });
    }
  }
};
</script>

