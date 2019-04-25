<template>
  <section class="project-wrapper">
    <div class="project-add-wrapper" @click="addProject">
      <span class="add-circle">
        <icon name="plus" class="plus"/>
      </span>
      <span class="add-text">创建新项目</span>
    </div>
    <div class="project-list">
      <header>
        <hr class="project-index-hr">
        <p>
          <icon name="list-ul" />
          <span>我创建的项目</span>
        </p>
      </header>
      <el-row class="project-list-content">
        <el-col :log="3" :md="3" :sm="6" class="project-item" v-for="(item, index) in projectList" :key="index">
          <div class="project-item-main" @click="getProjectDetail">
            <div class="project-index-header" :style="{backgroundColor: item.color}">
              <a>{{ item.name }}</a>
            </div>
            <div class="project-index-content clear">
              <span class="creator" :style="{color: item.color}">
                {{ item.creator }}
              </span>
              <span class="members-num">
                <icon name="user" />
                <a>{{ item.members }}</a>
              </span>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .project-wrapper {
    padding: 25px 40px 40px 40px;
    min-width: 320px;

    .project-add-wrapper {

      .add-circle {
        display: inline-block;
        margin-top: 17px;
        margin-bottom: 19px;
        width: 50px;
        height: 50px;
        text-align: center;
        border-radius: 25px;
        font-size: 18px;
        line-height: 50px;
        background-color: #d4d8db;
        color: #fff;
      }
      .add-text {
        font-size: 14px;
        color: #616d71;
        background-color: transparent;
        padding-left: 15px;
      }
    }
    .project-add-wrapper:hover {
      cursor: pointer;

      .add-circle {
        transform: scale(1.05)
      }
      .add-text {
        color: #337ab7
      }
    }
    .project-list {
      position: relative;
      margin-top: 20px;

      .project-index-title {
        font-size: 16px;
        color: #ffffff;
        word-break: break-word;
        word-wrap: break-word;
      }
      .project-index-hr {
        background-color: #dee2e6;
        color: #dee2e6;
        height: 1px;
        margin-top: 20px;
        margin-bottom: 20px;
        border: 0;
        border-top: 1px solid #eee;
      }
      .project-list-content {
        margin-top: 20px;

        .project-item {
          width: 260px;
          height: 195px;
          margin: auto 10px;
          border-radius: 6px;
          padding: 0;

          .project-item-main {
            padding: 0px;
            border-radius: 6px;
            overflow: hidden;
            border: 1px solid #e4e5e7;
            cursor: pointer;
            transition: transform .1s linear;

            .project-index-header {
              height: 104px;
              padding: 10px 20px;
              border-top-left-radius: 6px;
              border-top-right-radius: 6px;
              width: 228px;
              display: table-cell;
              vertical-align: middle;
              text-align: center;

              a {
                cursor: pointer;
                color: #fff;
              }
            }
            .project-index-content {
              padding-left: 15px;
              padding-right: 15px;
              padding: 12.5px 20px;
              background-color: #fff;
              font-size: 14px;

              .creator {
                float: left;
              }
              .members-num {
                float: right;
                color: #B0BEC5
              }
            }
          }
          .project-item-main:hover {
            transform: scale(1.05)
          }
        }
      }
    }
  }
</style>

<script>
export default {
  data() {
    return {
      projectList: [{
        name: 'demo test',
        color: 'red',
        creator: 'kerwin',
        members: 3
      }, {
        name: 'demo test',
        color: 'red',
        creator: 'kerwin',
        members: 3
      }, {
        name: 'demo test',
        color: 'red',
        creator: 'kerwin',
        members: 3
      }, {
        name: 'demo test',
        color: 'red',
        creator: 'kerwin',
        members: 3
      }, {
        name: 'demo test',
        color: 'red',
        creator: 'kerwin',
        members: 3
      }]
    };
  },
  methods: {
    addProject() {},
    getProjectDetail() {}
  }
};
</script>

