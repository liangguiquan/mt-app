<template>
  <div class="m-products-list">
    <ul>
      <li v-for="item in nav" :key="item.key" :class="{'s-nav-active': item.active}">{{item.name}}</li>
    </ul>
    <el-row>
      <item v-for="item in productsList" :key="item.type" :meta="item"/>
    </el-row>
  </div>
</template>

<script>
import Item from "./item.vue";
import api from "@/api/index.js";

export default {
  components: {
    Item
  },
  created() {
    api.getProductsList().then(res => {
      console.log(res);
      this.productsList = res.data.data;
    });
  },

  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true
        },
        {
          key: "s-price",
          name: "价格最低",
          active: false
        },
        {
          key: "s-score",
          name: "人气最高",
          active: false
        },
        {
          key: "s-comment",
          name: "评价最高",
          active: false
        }
      ],
      productsList: [],
    };
  }
};
</script>

<style>
</style>