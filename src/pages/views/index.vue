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
                <router-link :to="{ name: 'userCenter' }">
                  <icon name="user"/>个人信息
                </router-link>
              </li>
              <li>
                <a @click="showPwdDialog">
                  <icon name="vcard"/>修改密码
                </a>
              </li>
              <li class="exit">
                <a @click="logout">
                  <icon name="power-off"/>退出
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
    <el-dialog title="修改密码" :visible.sync="isShowPwdDialog" :close-on-click-modal="false">
      <el-form :model="pwdForm" label-width="100px" :rules="pwdRules" ref="pwdForm" status-icon>
        <el-form-item label="原密码" prop="originPwd">
          <el-input type="password" v-model="pwdForm.originPwd" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPwd">
          <el-input type="password" v-model="pwdForm.newPwd" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认新密码" prop="repeatPwd">
          <el-input type="password" v-model="pwdForm.repeatPwd" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShowPwdDialog = false">取 消</el-button>
        <el-button type="primary" @click="submitPwd">确 定</el-button>
      </div>
    </el-dialog>
  </el-container>
</template>

<style lang="scss" scoped>
@import '../../style/mixin';

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
        padding: 14px 14px 18px 18px;
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
            @include textOverflow(60px);

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
import { userApi } from '@/api';
import { validate } from '@/utils';

export default {
  data() {
    const originPwdRule = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入原密码'));
      } else {
        if (validate.isLimitPwdLength(value)) {
          callback();
        } else {
          callback(new Error('密码应为6-18位英文数字组成'));
        }
      }
    };
    const newPwdRule = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入新密码'));
      } else {
        if (validate.isLimitPwdLength(value)) {
          if (value === this.pwdForm.originPwd) {
            callback(new Error('新密码不能与原密码相同'));
          } else {
            callback();
          }
        } else {
          callback(new Error('密码应为6-18位英文数字组成'));
        }
      }
    };
    const repeatPwdRule = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else {
        if (validate.isLimitPwdLength(value)) {
          if (value !== this.pwdForm.newPwd) {
            callback(new Error('两次输入密码不一致'));
          } else {
            callback();
          }
        } else {
          callback(new Error('密码应为6-18位英文数字组成'));
        }
      }
    };

    return {
      isShowUserSelect: false,
      isShowPwdDialog: false,
      pwdRules: {
        originPwd: [{
          required: true, message: '请输入原密码', trigger: 'blur'
        }, {
          validator: originPwdRule, trigger: 'blur'
        }],
        newPwd: [{
          required: true, message: '请输入新密码', trigger: 'blur'
        }, {
          validator: newPwdRule, trigger: 'blur'
        }],
        repeatPwd: [{
          required: true, message: '请再次输入新密码', trigger: 'blur'
        }, {
          validator: repeatPwdRule, trigger: 'blur'
        }]
      },
      pwdForm: {
        originPwd: '',
        newPwd: '',
        repeatPwd: ''
      }
    };
  },
  mounted() {
    document.getElementById('content').onclick = () => {
      if (this.isShowUserSelect) {
        this.isShowUserSelect = false;
      }
    };
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    toggleUserMenus() {
      this.isShowUserSelect = !this.isShowUserSelect;
    },
    logout() {
      userApi.logout()
        .then(() => {
          this.$message.success('退出成功');
          this.$router.push({
            name: 'login'
          });
        });
    },
    showPwdDialog() {
      this.isShowPwdDialog = true;
    },
    submitPwd() {
      this.$refs.pwdForm.validate((valid) => {
        if (valid) {
          userApi.updatePwd(this.pwdForm)
            .then(() => {
              this.$message.success('修改密码成功，请重新登录');
              this.logout();
            });
        }
      });
    }
  },
  watch: {
    isShowPwdDialog(newVal) {
      if (!newVal) {
        this.$refs.pwdForm.resetFields();
      }
    }
  }
};
</script>
