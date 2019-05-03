<template>
  <div class="page-register">
    <div class="header">
      <header>
        <a href="#" class="site-logo"></a>
        <div class="login">
          <span>已有美团账号?</span>
          <router-link :to="{name: 'login'}">登录</router-link>
        </div>
      </header>
    </div>

    <div class="content">
      <el-form
        :model="registerForm"
        status-icon
        :rules="registerForm.rules"
        ref="registerForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input type="userName" v-model="registerForm.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="registerForm.password"
            autocomplete="off"
            @input="input"
          ></el-input>
        </el-form-item>
        <div class="pw-strength">
          <div :class="['bar', registerForm.strengthClass]"></div>
          <div class="letter">
            <span>弱</span>
            <span>中</span>
            <span>强</span>
          </div>
        </div>
        <el-form-item label="确认密码" prop="rePassword">
          <el-input type="password" v-model="registerForm.rePassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('registerForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>

    <footer>
      <p class="copyright">
        ©
        <a class="f1" href="https://www.meituan.com">meituan.com</a>&nbsp;
        <a class="f1" target="_blank" href="http://www.miibeian.gov.cn/">京ICP证070791号</a>&nbsp;
        <span class="f1">京公网安备11010502025545号</span>
      </p>
    </footer>
  </div>
</template>

<script>
import api from "@/api/index.js";

export default {
  data() {
    return {
      registerForm: {
        userName: "",
        password: "",
        rePassword: "",
        strengthClass: "",
        rules: {}
      }
    };
  },
  methods: {
    submitForm() {
      console.log(this.registerForm.password);
    },
    input() {
      let regStr = /(\w)+/g;
      let regNum = /(\d)+/g;
      let reg = /_/g;
      let strongth =
        this.registerForm.password.match(reg) &&
        this.registerForm.password.match(regStr) &&
        this.registerForm.password.match(regNum);

      if (
        this.registerForm.password.length > 20 ||
        (this.registerForm.password.length > 6 && strongth)
      ) {
        this.strengthClass = "strong";
      } else if (this.registerForm.password.length < 6) {
        this.strengthClass = "weak";
      } else if (!this.registerForm.password) {
        this.strengthClass = " ";
      } else {
        this.strengthClass = "normal";
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/register/index.scss";
</style>