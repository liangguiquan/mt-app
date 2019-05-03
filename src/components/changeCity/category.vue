<template>
  <div class="category">
    <dl class="m-category">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="item in list" :key="item">
        <a :href="'#city-' + item">{{item}}</a>
      </dd>
    </dl>

    <dl
      v-for="(item, index) in cityGroup"
      :key="index"
      class="m-category-section"
      :id="'city-' + index"
    >
      <dt>{{index}}</dt>
      <dd>
        <span v-for="city in item" :key="city.id" @click="changeCity(city)">{{city.name}}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
import api from "@/api/index.js";

export default {
  data() {
    return {
      list: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      cityList: [],
      cityGroup: null
    };
  },

  created() {
    api.getCityList().then(res => {
      let obj = {};
      res.data.data.forEach((item, index) => {
        if (!obj[item.firstChar]) {
          obj[item.firstChar] = [];
        }
        obj[item.firstChar].push(item);
      });
      // console.log(obj)
      this.cityGroup = obj;
    });
  },

  methods: {
    changeCity(item) {
      this.$store.dispatch('setPosition', item);
      this.$router.push({name: 'index'})
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/category.scss";
</style>