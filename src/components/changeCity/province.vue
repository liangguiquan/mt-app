<template>
  <div>
    <span class="name">按省份选择：</span>
    <m-select
      :list="provinceList"
      title="省份"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeProvince"
      className="province"
    />
    <m-select
      :list="cityList"
      title="城市"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
      :disabled="cityDisabled"
      className="city"

    />
    <!-- 组件上的自定义事件要小写  @change_active -->
    <span>直接搜索：</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>

<script>
import MSelect from "./select.vue";

import api from "@/api/index.js";

export default {
  data() {
    return {
      provinceList: [
      ],
      province: "省份",
      cityList: [
      ],
      city: "城市",
      provinceActive: false,
      cityActive: false,
      searchList: ["南京",
        "上海",
        "广州",
        "武汉",
        "厦门",
        "重庆",
        "天津",
        "深圳",
        "成都",
        "珠海",
        "北京",
        "长沙"],
        searchWord: '',
        loading: false,
        cityDisabled: true,
    };
  },

  created(){
    api.getProvinceList().then(res=>{
      // console.log(res);
      this.provinceList = res.data.data.map((item)=>{
        item.name = item.provinceName;
        return item;
      });

    })
  },

  components: {
    MSelect
  },

  methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },

    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    changeProvince(item){
      this.province = item.name;
      this.cityDisabled = false;
      this.cityList = item.cityInfoList
    },
    changeCity(item){
      this.city = item.name;
      this.$store.dispatch('setPosition', item);
      this.$router.push({name: 'index'})
    },

    remoteMethod(e){
      console.log(e);
      // 请求后端接口
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>