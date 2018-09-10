<template>
  <div class="cart">
    <div class="cart-header" :style="{marginTop: downloadShow ? '52px' : '0' }">
      <div class="cart-header-title">购物车</div>
      <div class="cart-header-right">领劵</div>
    </div>
    <ul class="g-grow">
      <li class="g-grow-item">
        <a href="javascript:;">
          <div class="g-item-icon"></div>
          <span class="g-item-text">30天无忧退货</span>
        </a>
      </li>
      <li class="g-grow-item">
        <a href="javascript:;">
          <div class="g-item-icon"></div>
          <span class="g-item-text">48小时快速退款</span>
        </a>
      </li>
      <li class="g-grow-item">
        <a href="javascript:;">
          <div class="g-item-icon"></div>
          <span class="g-item-text">满88免邮</span>
        </a>
      </li>
    </ul>
    <div class="empty">
      <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" alt="">
    </div>
    <div class="add-something">去添加点儿什么吧</div>
    <div class="to-login">登录</div>
  </div>
</template>

<script>
  import {mapGetters, mapState} from 'vuex'
  export default {
    computed: {
      ...mapGetters(['policyDescList']),
      ...mapState(['downloadShow'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .cart
    width 100%
    background-color: #eee;
    height (667*2/$rem)
    .cart-header
      background-color: #fff;
      bottom-border-1px(#eee)
      width 100%
      height: (87.98/$rem);
      box-sizing border-box
      padding: 0 (30/$rem);
      position relative
      margin-top 52px
      .cart-header-title
        width: (108/$rem);
        height: (87/$rem )
        text-align center
        font-size (36/$rem)
        line-height (87/$rem)
        position absolute
        top: 50%
        left: 50%
        transform translate(-50%, -50%)
      .cart-header-right
        width: (87.98/$rem);
        height: (87/$rem )
        text-align center
        font-size (34/$rem)
        line-height (87/$rem)
        position absolute
        right (60/$rem)
        color rgb(180, 40, 45)
    .g-grow
      position relative
      z-index 2
      width: 100%
      background-color: #eee;
      height: 36px
      box-sizing border-box
      padding 0 20px
      display flex
      align-items center
      justify-content space-between
      font-size 13px
      .g-item-icon
        width: 16px
        height: 16px
        display inline-block
        vertical-align middle
        border-radius 50%
        background-color: #666;
        transform scale(.4)
      .g-item-text
        display inline-block
        vertical-align middle
        line-height 16px
    .empty
      width 100%
      margin-top (134*2/$rem)
      height: (248/$rem);
      >img
        width (248/$rem)
        height: 100%;
        margin-left: 50%
        transform translateX(-50%)
    .add-something
      text-align center
      font-size (28/$rem)
      color #7e8c8d
      margin-top (-10/$rem)
    .to-login
      width (480/$rem)
      height: (92/$rem);
      background-color: rgb(180, 40, 45);
      text-align center
      color white
      line-height (92/$rem)
      margin-left: 50%
      transform translateX(-50%)
      border-radius (10/$rem)
      margin-top: (50/$rem);
</style>
