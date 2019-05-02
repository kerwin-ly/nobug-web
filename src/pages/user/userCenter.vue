<template>
  <section>
    <box title="个人中心" icon="address-card">
      <el-form :model="userForm" :rules="userRules" ref="userForm" status-icon label-width="100px">
        <el-row>
          <el-col :md="12" :sm="24">
            <el-form-item label="用户名" prop="name">
              <el-input v-model="userForm.name" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="12" :sm="24">
            <el-form-item label="项目背景" prop="email">
              <el-input v-model="userForm.email" placeholder="请输入邮箱" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="12" :sm="24">
            <el-form-item label="项目背景" prop="email">
              <el-input v-model="userForm.email" placeholder="请输入邮箱" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="12" :sm="24">
            <el-form-item label="项目背景" prop="email">
              <el-input v-model="userForm.email" placeholder="请输入邮箱" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-form-item style="text-align: right;">
            <el-button>取消</el-button>
            <el-button type="primary">保 存</el-button>
          </el-form-item>
        </el-row>
      </el-form>
    </box>
  </section>
</template>

<script>
import box from '@/components/common/box';

export default {
  components: {
    box
  },
  data() {
    return {
      userForm: {}
    };
  }
};
</script>

