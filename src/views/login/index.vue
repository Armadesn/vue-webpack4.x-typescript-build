<template>
  <div :class="prefixCls">
    <el-form
      :class="prefixCls + '-from'"
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
    >
      <div :class="prefixCls + '-title'">
        <h3 class="title">
          {{ $t("login.title") }}
        </h3>
      </div>
      <el-form-item prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { Form as ElForm, Input } from "element-ui";

import { UserModule } from "../../store/modules/user";

const prefixCls = "login";

@Component({})
export default class extends Vue {
  private prefixCls = prefixCls;
  private ruleForm = {
    username: "",
    password: ""
  };
  private rules = {
    username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
    password: [{ required: true, message: "请输入密码", trigger: "blur" }]
  };
  created() {}
  private submitForm(name: string) {
    (this.$refs.ruleForm as ElForm).validate(async(valid: boolean) => {
      if (valid) {
        await UserModule.LoginAcion(this.ruleForm);
        this.$router.push({
          path: "/"
        });
      } else {
        return false;
      }
    });
  }
}
</script>
<style lang="less">
.login {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: url("../../assets/login-bg.jpg");
  position: relative;
  &-from {
    position: absolute;
    width: 400px;
    max-width: 100%;
    right: 160px;
    top: 50%;
    overflow: hidden;
    background: #fff;
    color: #17233d;
    padding: 20px;
    border-radius: 5px;
  }
  .el-form-item {
    text-align: center;
  }
  &-title {
    padding-bottom: 20px;
    text-align: center;
    color: #17233d;
  }
}
</style>
