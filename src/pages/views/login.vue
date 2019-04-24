<template>
  <el-container>
    <el-main class="wrapper">
      <div class="box">
        <header class="header">
          <img src="../../assets/imgs/logo.png" class="logo" />
          <p class="advertisement">Monitor your bugs and fix it efficiently</p>
        </header>
        <div class="form-wrapper">
          <el-form :model="loginForm" :rules="loginRules" ref="loginForm" status-icon>
            <el-form-item prop="email">
              <el-input v-model="loginForm.email" placeholder="请输入邮箱" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" v-model="loginForm.password" placeholder="请输入密码" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
          <footer class="footer">
            <el-button type="primary" class="login-btn" @click="login" :loading="lock">登录</el-button>
            <p>忘记密码？</p>
            <hr>
            <div class="register-wrapper">
              <span style="font-size: 14px;">还没有账号？</span>
              <el-button type="text" @click="navigateRegister">免费注册</el-button>
            </div>
          </footer>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<style lang="scss" scoped>
@import '../../style/constant.scss';

.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .box {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    border: 1px solid #e2e2e2;
    background-color: #fff;
    text-align: center;
    padding-top: 5rem;
    padding-bottom: 5rem;

    .header {
      margin-bottom: 5rem;

      .logo {
        display: inline-block;
        height: 50px;
      }
      .advertisement {
        margin-top: 20px;
        margin-bottom: 0;
        font-weight: 300;
      }
    }
    .form-wrapper {
      padding-left: 80px;
      padding-right: 80px;
    }
    .footer {
      padding-top: 10px;
      padding-bottom: 10px;
      width: 100%;

      .login-btn {
        width: 100%;
      }
      p {
        text-align: right;
        color: $primary;
        font-weight: 300;
        margin-top: 20px;
        font-size: 14px;
        text-decoration: none;
        cursor: pointer;
      }
      hr {
        margin-top: 20px;
        margin-bottom: 20px;
        border: 0;
        border-top: 1px solid #eee;
      }
      .register-wrapper {
        width: 100%;
        border: 1px solid #e4e5e7;
        border-radius: 3px;
      }
    }
  }
}
</style>

<script>
import { validate } from '@/utils/form';
import { userApi } from '@api';
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      loginForm: {
        email: '879688355@qq.com',
        password: 'liyi**1021'
      },
      loginRules: {
        email: [{
          required: true, message: '请输入邮箱', trigger: 'blur'
        }, {
          validator: validate.validateEmail, trigger: 'blur'
        }],
        password: [{
          required: true, message: '请输入密码', trigger: 'blur'
        }, {
          validator: validate.validatePassword, trigger: 'blur'
        }]
      }
    };
  },
  computed: {
    ...mapState(['lock'])
  },
  methods: {
    ...mapMutations(['SETUSERINFO']),
    login() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          userApi.login(this.loginForm)
            .then((res) => {
              this.SETUSERINFO(res.data);
              this.$router.push({
                name: 'index'
              });
            })
            .catch(() => {});
        }
      });
    },
    navigateRegister() {
      this.$router.push({
        name: 'register'
      });
    }
  }
};
</script>
