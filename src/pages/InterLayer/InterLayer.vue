<template>
  <div class="interlayer">
    <img class="img1" src="//yanxuan.nosdn.127.net/53df1ead033706dcd7da9a91c8977b83.jpg" alt="">
    <img class="img2" src="//yanxuan.nosdn.127.net/143424244e87fb8eed45c6984c769a63.jpg" alt="">
    <div class="to">
      <img class="img3" src="//yanxuan.nosdn.127.net/d600f8c56fc184e199aa389e09fb2ff9.jpg" alt="">
      <div class="download-app"></div>
      <span class="continue" @click="go"></span>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      go () {
        this.$store.dispatch('goTo')
        setTimeout(() => {
          this.$router.replace('/')
        }, 10)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .interlayer
    width: 100%
    height: (667*2/$rem);
    background-color: rgb(227, 227, 226);
    .img1
      width: 100%;
      display block
    .img2
      width 100%
      display block
    .to
      position relative
      .img3
        width: 100%
        display block;
      .download-app
        position absolute
        width: (216*2/$rem);
        height (49*2/$rem)
        top: (48*2/$rem)
        left: (160/$rem);
      .continue
        position absolute
        width: (127*2/$rem);
        height: (15*2/$rem);
        top: (115*2/$rem)
        left: (250/$rem);
</style>
