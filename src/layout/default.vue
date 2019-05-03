<template>
  <div class="layout-default">
    <el-container>
      <el-header height="" style="padding: 0px;">
        <MyHeader/>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer height="100%">
        <MyFooter/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import MyHeader from "@/components/header/index.vue";
import MyFooter from "@/components/footer/index.vue";

export default {
  components: {
    MyHeader,
    MyFooter
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/public/layout.scss";
</style>