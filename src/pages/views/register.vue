<template>
  <el-container>
    <el-main class="wrapper">
      <div class="box">
        <header class="header">
          <img src="../../assets/imgs/logo.png" class="logo" />
          <p class="advertisement">Monitor your bugs and fix it efficiently</p>
        </header>
        <div class="form-wrapper">
          <el-form :model="registerForm" :rules="registerRules" ref="registerForm" status-icon>
            <el-form-item prop="name">
              <el-input v-model="registerForm.name" placeholder="请输入用户名" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item prop="email">
              <el-input v-model="registerForm.email" placeholder="请输入邮箱" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" v-model="registerForm.password" placeholder="请输入密码" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
          <footer class="footer">
            <el-button type="primary" class="register-btn" @click="register">注册</el-button>
            <hr>
            <div class="login-wrapper">
              <span style="font-size: 14px;">已有账号？</span>
              <el-button type="text" @click="navigateLogin">立即登录</el-button>
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

      .register-btn {
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
      .login-wrapper {
        width: 100%;
        border: 1px solid #e4e5e7;
        border-radius: 3px;
      }
    }
  }
}
</style>

<script>
import { validate } from '@/utils';
import { userApi } from '@/api';

export default {
  data() {
    return {
      registerForm: {
        name: '',
        email: '',
        password: ''
      },
      registerRules: {
        name: [{
          required: true, message: '请输入用户名', trigger: 'blur'
        }],
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
  methods: {
    register() {
      this.$refs.registerForm.validate((valid) => {
        if (valid) {
          userApi.register(this.registerForm)
            .then(() => {
              this.$message.success('注册成功');
              this.$router.push({
                name: 'login'
              });
            });
        }
      });
    },
    navigateLogin() {
      this.$router.push({
        name: 'login'
      });
    }
  }
};
</script>
