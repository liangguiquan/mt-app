<template>
  <div class="page-index" style="z-index: 999">
    <el-row>
      <el-col :span="5">
        <MMenu/>
      </el-col>
      <el-col :span="19">
        <MLife/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <Container :nav="iStyle"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <Container :nav="maoyan"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MMenu from "@/components/index/menu.vue";
import MLife from "@/components/index/life.vue";
import Container from "@/components/index/container.vue";

export default {
  data() {
    return {
      iStyle: {
        class: "iStyle",
        title: "有格调",
        list: [
          {
            text: "全部",
            tab: "all"
          },
          {
            text: "约会餐饮",
            tab: "food"
          },
          {
            text: "丽人SPA",
            tab: "spa"
          },
          {
            text: "电影演出",
            tab: "movie"
          },
          {
            text: "品质旅游",
            tab: "travel"
          }
        ]
      },
      maoyan: {
        class: "maoyan",
        title: "猫眼电影",
        list: [
          {
            text: "正在热映",
            tab: "hot"
          },
          {
            text: "即将上映",
            tab: "coming"
          }
        ]
      }
    };
  },

  components: {
    MMenu,
    MLife,
    Container
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>