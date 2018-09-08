<template>
  <div class="home">
    <div class="home-top">
      <div class="logo-search">
        <a href="javascript:;" class="logo"></a>
        <div class="search">
          <span>
            <span class="search-icon"></span>
            <span class="search-placeholder">搜索商品，共13222款好物</span>
          </span>
        </div>
      </div>
      <div class="top-nav-warp">
        <div class="top-nav">
          <span class="nav-item active">推荐</span>
          <span class="nav-item">居家</span>
          <span class="nav-item">鞋包配饰</span>
          <span class="nav-item">服装</span>
          <span class="nav-item">电器</span>
          <span class="nav-item">洗护</span>
          <span class="nav-item">饮食</span>
          <span class="nav-item">餐厨</span>
          <span class="nav-item">婴童</span>
          <span class="nav-item">文体</span>
          <span class="nav-item">特色区</span>
        </div>
      </div>
    </div>
    <div class="scroll-container">
      <div class="scroll-content">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img class="swiper-img" src="https://yanxuan.nosdn.127.net/f02e973bd0673b30ee30e08918f9aa5c.jpg?imageView&quality=75&thumbnail=750x0" alt="">
            </div>
            <div class="swiper-slide">
              <img class="swiper-img" src="https://yanxuan.nosdn.127.net/f02e973bd0673b30ee30e08918f9aa5c.jpg?imageView&quality=75&thumbnail=750x0" alt="">
            </div>
            <div class="swiper-slide">
              <img class="swiper-img" src="https://yanxuan.nosdn.127.net/f02e973bd0673b30ee30e08918f9aa5c.jpg?imageView&quality=75&thumbnail=750x0" alt="">
            </div>
            <div class="swiper-slide">
              <img class="swiper-img" src="https://yanxuan.nosdn.127.net/f02e973bd0673b30ee30e08918f9aa5c.jpg?imageView&quality=75&thumbnail=750x0" alt="">
            </div>
            <div class="swiper-slide">
              <img class="swiper-img" src="https://yanxuan.nosdn.127.net/f02e973bd0673b30ee30e08918f9aa5c.jpg?imageView&quality=75&thumbnail=750x0" alt="">
            </div>
            <div class="swiper-slide">
              <img class="swiper-img" src="https://yanxuan.nosdn.127.net/f02e973bd0673b30ee30e08918f9aa5c.jpg?imageView&quality=75&thumbnail=750x0" alt="">
            </div>
            <div class="swiper-slide">
              <img class="swiper-img" src="https://yanxuan.nosdn.127.net/f02e973bd0673b30ee30e08918f9aa5c.jpg?imageView&quality=75&thumbnail=750x0" alt="">
            </div>
            <div class="swiper-slide">
              <img class="swiper-img" src="https://yanxuan.nosdn.127.net/f02e973bd0673b30ee30e08918f9aa5c.jpg?imageView&quality=75&thumbnail=750x0" alt="">
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        <ul class="g-grow">
          <li class="g-grow-item">
            <a href="javascript:;">
              <span class="g-item-icon"></span>
              <span class="g-item-text">网易自营品牌</span>
            </a>
          </li>
          <li class="g-grow-item">
            <a href="javascript:;">
              <span class="g-item-icon"></span>
              <span class="g-item-text">30天无忧退货</span>
            </a>
          </li>
          <li class="g-grow-item">
            <a href="javascript:;">
              <span class="g-item-icon"></span>
              <span class="g-item-text">48小时快速退款</span>
            </a>
          </li>
        </ul>
        <div class="direct-goods">
          <FoolrHeader/>
          <ul class="goods-card">
            <li class="goods-item goods-item1">
              <div class="item-detail">
                <h4 class="item-origin">海外制造商</h4>
                <div class="item-price">9.9元起</div>
                <img class="item-new" src="./image/to-new.png"/>
              </div>
            </li>
            <li class="goods-item goods-item2">
              <div class="item-detail">
                <h4 class="item-origin">海外制造商</h4>
                <div class="item-price">9.9元起</div>
                <img class="item-new" src="./image/to-new.png"/>
              </div>
            </li>
            <li class="goods-item goods-item3">
              <div class="item-detail">
                <h4 class="item-origin">海外制造商</h4>
                <div class="item-price">9.9元起</div>
                <img class="item-new" src="./image/to-new.png"/>
              </div>
            </li>
            <li class="goods-item goods-item4">
              <div class="item-detail">
                <h4 class="item-origin">海外制造商</h4>
                <div class="item-price">9.9元起</div>
                <img class="item-new" src="./image/to-new.png"/>
              </div>
            </li>
          </ul>
        </div>
        <GoodsGrid/>
        <div class="limit-goods">
          <div class="limit-description">
            <div class="text">严选限时购</div>
            <div class="time">
              <span class="time-table hour">00</span>
              <span class="point">:</span>
              <span class="time-table minute">00</span>
              <span class="point">:</span>
              <span class="time-table second">00</span>
            </div>
            <div class="next-time">
              <span>下一场</span>
              <span class="next-timer">10:00</span>
              <span>开始</span>
            </div>
          </div>
          <div class="limit-img">
            <img src="./image/limit.png">
            <div class="price">
              <div>￥630</div>
              <div>￥699</div>
            </div>
          </div>
        </div>
        <div class="sale"></div>
        <div class="special-select">
          <FoolrHeader/>
          <div class="special-goods-warp">
            <div class="special-goods-content">
              <ul class="special-goods">
                <li class="special-item">
                  <img class="special-img" src="./image/special-select.jpg" alt="">
                  <div class="text">
                    <h4>吃得到果肉的，才是真凤梨酥</h4>
                    <span>38元起</span>
                  </div>
                  <div class="desc">47%凤梨果肉</div>
                </li>
                <li class="special-item">
                  <img class="special-img" src="./image/special-select.jpg" alt="">
                  <div class="text">
                    <h4>吃得到果肉的，才是真凤梨酥</h4>
                    <span>38元起</span>
                  </div>
                  <div class="desc">47%凤梨果肉</div>
                </li>
                <li class="special-item">
                  <img class="special-img" src="./image/special-select.jpg" alt="">
                  <div class="text">
                    <h4>吃得到果肉的，才是真凤梨酥</h4>
                    <span>38元起</span>
                  </div>
                  <div class="desc">47%凤梨果肉</div>
                </li>
                <li class="special-item">
                  <img class="special-img" src="./image/special-select.jpg" alt="">
                  <div class="text">
                    <h4>吃得到果肉的，才是真凤梨酥</h4>
                    <span>38元起</span>
                  </div>
                  <div class="desc">47%凤梨果肉</div>
                </li>
                <li class="special-item">
                  <img class="special-img" src="./image/special-select.jpg" alt="">
                  <div class="text">
                    <h4>吃得到果肉的，才是真凤梨酥</h4>
                    <span>38元起</span>
                  </div>
                  <div class="desc">47%凤梨果肉</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <TitleGoodGrid/>
      </div>
    </div>
    <div class="gift"></div>
    <div class="to-top"></div>
  </div>
</template>

<script>
  import GoodsGrid from '../../coponents/GoodsGrid/GoodsGrid.vue'
  import FoolrHeader from '../../coponents/FoolrHeader/FoolrHeader.vue'
  import TitleGoodGrid from '../../coponents/TitleGoodGrid/TitleGoodGrid.vue'
  export default {
    data () {
      return {
        arr: [1,2]
      }
    },
    beforeMount () {
      this.$store.dispatch('getHomeData')
    },
    mounted () {
      this.$nextTick(() => {
        new this.$Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
          },
          loop: true
        })
        new this.$BScroll('.special-goods-content', {
          click: true
        })
        new this.$BScroll('.top-nav-warp', {
          scrollX:true,
          click: true
        })
      })
    },
    components:{
      GoodsGrid,
      FoolrHeader,
      TitleGoodGrid
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .home
    width: 100%
    background-color: #eee;
    margin-bottom 49px
    overflow hidden
    .home-top
      width: 100%
      position fixed
      top: 0
      left: 0
      z-index 10
      background-color: #fff;
      .logo-search
        box-sizing border-box
        height: 44px
        padding 8px 16px
        display flex
        align-items center
        .logo
          width 69px
          height: 20px
          margin-right 10px
          background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png")
          background-size 100%
          background-repeat no-repeat
        .search
          width: 266px
          height: 28px
          display flex
          justify-content center
          align-items center
          background-color: #eee;
          border-radius 5px
          .search-icon
            width: 14px
            height: 14px
            display inline-block
            vertical-align middle
            background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png")
            background-size 100%
            background-repeat no-repeat
          .search-placeholder
            width: 158.65px
            height: 20.5px
            font-size 14px
            color #333
      .top-nav-warp
        height: 30px
        position absolute
        z-index 5
        background-color: #fff;
        width 100%
        box-sizing border-box
        .top-nav
          display flex
          width 795.735px
          justify-content space-around
          .nav-item
            font-size 14px
            padding 0 10px
            text-align center
            line-height 30px
            &.active
              border-bottom (3/$rem) solid rgb(180, 40, 45)

    .scroll-container
      width 100%
      box-sizing border-box
      margin-top 74px
      margin-bottom 60px
      .swiper-container
        width: 100%
        margin -10px 0
        .swiper-img
          width 100%
      .g-grow
        position relative
        z-index 2
        width: 100%
        background-color: #fff;
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
          background-image url("./image/right.png")
          background-size 16px
          vertical-align middle
        .g-item-text
          display inline-block
          vertical-align middle
          line-height 16px
      .direct-goods
        width: 100%
        height: 293px
        box-sizing border-box
        background-color: #fff;
        margin-top:10px
        margin-bottom 10px
        .goods-card
          height: 234px
          box-sizing border-box
          margin 0 8px
          display flex
          flex-wrap wrap
          .goods-item
            width: 177px
            height: 115px
            box-sizing border-box
            background-color: #eee;
            background-image: url("./image/pp.png");
            background-size 176px
            background-repeat no-repeat
            &.goods-item1
              margin-right 4px
              margin-bottom 4px
            &.goods-item3
              margin-right: 4px;
            .item-detail
              width: 100%
              display flex
              padding-top 10px
              padding-left 10px
              font-size 13px
              flex-direction column
              .item-origin
                width: 100%
                height: 16.5px
                margin-bottom 3px
              .item-price
                width: 100%
                height 17px
              .item-new
                display block
                width: 32px
                height 16px
                margin-top 4px


      .limit-goods
        background-color: #fff;
        height: 190px
        width: 100%
        display flex
        padding 15px 30px
        box-sizing border-box
        .limit-description
          width: 160px
          height 167px
          display flex
          box-sizing border-box
          padding 20px 0
          flex-direction column
          justify-content space-around
          .text
            font-size 20px
            letter-spacing 5px
          .time
            font-size 16px
            .time-table
              color white
              width 31px
              height 28px
              text-align center
              line-height 28px
              background-color: #333;
              display inline-block
          .next-time
            font-size 12px
        .limit-img
          width 160px
          height: 160px
          position relative
          >img
            width: 100%
            height: 100%
          .price
            position absolute
            right: 10px
            bottom 20px
            width: 48px
            height: 48px
            border-radius 50%
            font-size 13px
            font-weight bold
            color white
            display flex
            flex-direction column
            align-items center
            justify-content center
            background-color: rgb(245, 149, 36);
      .sale
        width: 100%
        height: 150px
        margin 10px 0
        background-image url("./image/sale.jpg");
        background-size 100%;
      .special-select
        height: 281.5px
        width: 100%
        background-color: #fff;
        .special-goods-warp
          width 100%
          .special-goods-content
            height: 226.5px
            box-sizing border-box
            padding 0 20px 20px 20px
            .special-goods
              clearFix()
              width (3000/$rem)
              .special-item
                float left
                margin-right 10px
                width 287.5px
                height 208.5px
                display flex
                flex-direction column
                justify-content space-between
                .special-img
                  width: 100%
                  height: 161px
                .text
                  width: 100%
                  height 18px
                  margin-bottom 2.5px
                  display flex
                  justify-content space-between
                  >h4
                    font-size 14px
                  >span
                    color rgb(180, 40, 45)
                    font-size 14px
                .desc
                  width: 100%
                  height 18px
                  font-size 12.5px
                  color #7e8c8d
    .gift
      width (120/$rem)
      height (80/$rem)
      background-image url("./image/gift.png")
      background-size 100%
      position fixed
      right: 0
      bottom (250/$rem)
    .to-top
      width (82/$rem)
      height (82/$rem)
      background-image url("./image/toTop.png")
      background-size 100%
      position fixed
      right: (40/$rem)
      bottom (125/$rem)
</style>
