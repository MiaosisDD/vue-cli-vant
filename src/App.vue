<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for='(i, index) in 4' :key='index'>
        <img src="https://tempim-1256796114.cos-website.ap-shanghai.myqcloud.com/placeholder/400x300">
      </van-swipe-item>
    </van-swipe>
    <van-button>按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';
export default {
  name: 'app',
  components: {
    'van-swipe': Swipe,
    'van-swipe-item': SwipeItem
  }
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
