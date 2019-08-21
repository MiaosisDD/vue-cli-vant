import Vue from 'vue'
import App from './App.vue'

// 引入vant全局注册组件
import '@/const/components.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
