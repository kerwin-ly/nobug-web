<template>
  <div class="bg">
    <div class="main">
      <div class="form-top">
        <div style="text-align:center;margin-top: 20px;">
          <img src="../assets/imgs/logo.png" alt="logo" style="width:200px;display:inline-block" />
        </div>
        <div class="form-top-left">
          <h3>Login to our site</h3>
            <p>Enter your username and password to log on:</p>
        </div>
        <div class="form-top-right">
          <i class="fa fa-lock"></i>
        </div>
      </div>
      <div class="form-bottom">
        <div class="login-form">
          <div class="form-group">
            <label class="sr-only" for="form-username">Username</label>
              <input type="text" v-model="loginForm.username" placeholder="Username..." class="form-username form-control" id="form-username" style="padding:0px;">
            </div>
            <div class="form-group">
              <label class="sr-only" for="form-password">Password</label>
              <input type="password" v-model="loginForm.password" placeholder="Password..." class="form-password form-control" id="form-password" style="padding:0px;">
            </div>
            <button class="btn" style="cursor:pointer;margin-left:2px;width:100%;" @click="login">{{logining ? '登录中' : '登录'}}<i class="el-icon-loading" v-show="logining"></i></button>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      logining: false // 是否在登录中
    };
  },
  methods: {
    login() {

    }
  }
};
</script>

<style scoped>
.bg {
  background: url('../assets/imgs/bg.jpg') no-repeat center center fixed;
  background-size: cover;
}
.main {
  width: 500px;
  margin: 0 auto;
  position: relative;
  padding-top: 9%;
}

.form-top {
  overflow: hidden;
  padding: 0 25px 15px 25px;
  background: #444;
  background: rgba(0, 0, 0, 0.35);
  -moz-border-radius: 4px 4px 0 0;
  -webkit-border-radius: 4px 4px 0 0;
  border-radius: 4px 4px 0 0;
  text-align: left;
}
.form-top-left {
  float: left;
  width: 75%;
  padding-top: 25px;
}
.form-top-left h3 {
  margin-top: 0;
  color: #fff;
  margin-bottom: 10px;
}
.form-top-left p {
  opacity: 0.8;
  color: #fff;
}

p {
  margin: 0 0 10px;
}

.form-top-right {
  float: left;
  width: 25%;
  padding-top: 5px;
  font-size: 66px;
  color: #fff;
  line-height: 100px;
  text-align: right;
  opacity: 0.3;
}
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transform: translate(0, 0);
}
.form-bottom {
  padding: 25px 25px 30px 25px;
  background: #444;
  background: rgba(0, 0, 0, 0.3);
  -moz-border-radius: 0 0 4px 4px;
  -webkit-border-radius: 0 0 4px 4px;
  border-radius: 0 0 4px 4px;
  text-align: left;
}
.form-group {
  margin-bottom: 15px;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
h3 {
  font-size: 22px;
  font-weight: 300;
  color: #555;
  line-height: 30px;
}
label {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: 700;
}
input[type="text"],
input[type="password"],
textarea,
textarea.form-control {
  height: 50px;
  margin: 0;
  padding: 0 20px;
  vertical-align: middle;
  background: #fff;
  border: 3px solid #fff;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 50px;
  color: #888;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  -o-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -ms-transition: all 0.3s;
  transition: all 0.3s;
}

.form-control {
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}
.form-bottom form button.btn {
  width: 100%;
}

button.btn {
  height: 50px;
  margin: 0;
  padding: 0 20px;
  vertical-align: middle;
  background: #de615e;
  border: 0;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 50px;
  color: #fff;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  text-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  -o-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -ms-transition: all 0.3s;
  transition: all 0.3s;
}
.btn {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
</style>

