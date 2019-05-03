import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入element-ui组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import './assets/css/main.css'

Vue.config.productionTip = false

// 自定义指令
// Vue.directive('focus', {
//   // 当被绑定的元素插入到DOM中时
//   inserted: function(el){
//     // 聚焦元素
//     el.focus()
//   }
// })

Vue.directive('document-click', {
  // bind(), inserted(), update()都是自定义指令中的钩子函数，其作用是定义该指令在什么时候，如何才能被触发(触发条件)
  bind(el, binding, vnode){
    // console.log(el, binding, vnode);
    document.addEventListener('click', binding.value, false);
    // binding.value  就是'document-click'这个自定义指令实际要执行的函数，例如 v-document-click="documentClick", 那么binding.value就等于documentClick这个函数，这个函数里面写了具体执行的事件
  },

  // inserted(){
  //   console.log('inserted')
  // },

  // update(){
  //   console.log('update')
  // }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
