<template>
  <div class="download-header" v-if="downloadShow">
    <div class="clear" @click="clear">×</div>
    <div class="logo-title">
      <div class="logo"></div>
      <div class="title">
        <div class="title-sub">网易严选</div>
        <div class="title-desc">立即领取APP新人专享1000元礼包</div>
      </div>
    </div>
    <div class="open-app">打开App</div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['downloadShow'])
    },
    methods: {
      clear () {
        this.$store.dispatch('resetDownloadShow')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .download-header
    width: 100%
    height: (104/$rem);
    background-color: #000;
    display flex
    align-items center
    position fixed
    top: 0
    left: 0
    z-index 20
    .clear
      width: (48/$rem);
      height: (48/$rem);
      font-size (72/$rem)
      text-align center
      line-height (40/$rem)
      font-weight lighter
      color white
      margin: 0 (20/$rem);
    .logo-title
      height: (103/$rem);
      color white
      display flex
      justify-content center
      align-items center
      .logo
        width: (72/$rem);
        height: (72/$rem);
        background-image: url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s28ce1ea0be-3d137edb2d.png');
        background-repeat: no-repeat;
        background-size: (160/$rem);
        background-position: (4/$rem) (-208/$rem);
        margin-right: (20/$rem);
      .title
        display flex
        flex-direction column
        .title-sub
          font-size (30/$rem)
          font-weight bold
          margin-bottom (10/$rem)
        .title-desc
          font-size (24/$rem)
    .open-app
      width: (138.51/$rem);
      height: (51.98/$rem);
      color white
      background-color: rgb(180, 40, 45);
      font-size (24/$rem)
      text-align center
      line-height (51.98/$rem)
      margin-left: (45/$rem);
      margin-top: (10/$rem);
</style>
