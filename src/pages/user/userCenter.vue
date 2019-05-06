<template>
  <section class="wrapper">
    <box title="个人中心" icon="address-card" class="clear">
        <div class="avatar-wrapper">
          <span class="name">{{ this.userInfo.name && this.userInfo.name.substring(0, 1) }}</span>
        </div>
        <el-form :model="userForm" :rules="userRules" ref="userForm" status-icon label-width="100px" class="user-form">
          <div>
            <h2 class="user-name" v-text="userInfo.name"></h2>
          </div>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="userForm.email" auto-complete="off" disabled></el-input>
          </el-form-item>
          <el-form-item label="用户名" prop="name">
            <el-input v-model="userForm.name" auto-complete="off" :disabled="isDisabled"></el-input>
          </el-form-item>
          <el-form-item label="联系方式" prop="phone">
            <el-input v-model="userForm.phone" auto-complete="off" :disabled="isDisabled"></el-input>
          </el-form-item>
          <el-form-item style="text-align: right;">
            <el-button type="primary" @click="updateUserInfo">{{ this.isDisabled ? '编 辑' : '保 存' }}</el-button>
          </el-form-item>
        </el-form>
    </box>
  </section>
</template>

<style lang="scss" scoped>
$avatarWh: 200px;

.wrapper {
  margin-left: 12%;
  margin-right: 12%;

  .avatar-wrapper {
    width: $avatarWh;
    height: $avatarWh;
    background-color: #60cce1;
    border-radius: $avatarWh;
    float: left;
    text-align: center;
    line-height: $avatarWh;

    .name {
      color: #fff;
      font-size: 80px;
      font-weight: bold;
    }
  }
  .user-form {
    float: left;
    width: calc(100% - 230px);
    margin-top: $avatarWh / 2;
    margin-left: 30px;

    .user-name {
      display: inline-block;
      height: 30px;
      max-width: 400px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 26px;
      font-weight: 600;
      line-height: 30px;
      margin-bottom: 20px;
      color: #1a1a1a;
    }
  }
}
</style>

<script>
import box from '@/components/common/box';
import { mapState, mapMutations } from 'vuex';
import { validate } from '@/utils';
import { userApi } from '@/api';

export default {
  components: {
    box
  },
  data() {
    return {
      userForm: {},
      userRules: {
        email: {
          required: true, message: '请输入邮箱', trigger: 'blur'
        },
        name: {
          required: true, message: '请输入用户名', trigger: 'blur'
        },
        phone: [{
          required: true, message: '请输入手机号', trigger: 'blur'
        }, {
          validator: validate.validatePhone, trigger: 'blur'
        }]
      },
      isDisabled: true
    };
  },
  mounted() {
    this.init();
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    ...mapMutations(['SETUSERINFO']),
    init() {
      this.userForm = {
        ...this.userInfo
      };
    },
    updateUserInfo() {
      if (this.isDisabled) {
        this.isDisabled = false;
      } else {
        this.submitUserInfo();
      }
    },
    submitUserInfo() {
      this.$refs.userForm.validate((valid) => {
        if (valid) {
          userApi.updateUserInfo(this.userForm)
            .then(() => {
              this.$message.success('操作成功');
              this.SETUSERINFO(this.userInfo);
              this.isDisabled = true;
            });
        }
      });
    }
  }
};
</script>
