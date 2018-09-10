<template>
  <header class="goods-header">
    <span>{{title}}</span>
    <img src="./image/go2.png"/>
  </header>
</template>

<script>
  export default {
    props:['title']
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .goods-header
    width: 100%
    height: 55px
    display flex
    justify-content center
    align-items center
    >img
      width: 15px
      height: 15px
      margin-left 5px
</style>
