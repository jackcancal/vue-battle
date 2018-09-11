<template>
  <div class="home">
    <div class="home-top" :style="{top: downloadShow ? '52px' : '0px'}">
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
          <span class="nav-item"
                v-for="(headCate, index) in headCateList"
                :class="{active: $route.path === `/cate/${headCate.id}`}"
                @click.stop="goto($event,headCate.id, (index - 1))"
                :key="index">
            <span>{{headCate.name}}</span>
          </span>
        </div>
      </div>
    </div>
    <router-view :cateIndex="cateIndex" ref="rout"/>
    <div class="gift"></div>
    <div class="to-top" @click="toTop"></div>
    <div class="mask" v-if="!isCloseMask">
      <img @click="closeMask" src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/modalClose-9365f12572.png" class="close"/>
      <div class="mask-wrapper">
        <div class="mask-content">
          <div class="content-title">
            <div class="title-line"></div>
            <div class="title-text">新人专享礼</div>
            <div class="title-line"></div>
          </div>
          <div class="content-subTitle">
            <span>感谢使用网易严选，已为你准备了一份专享礼</span>
          </div>
          <div class="content-img-info">
            <img class="content-img" src="http://yanxuan.nosdn.127.net/15c8d56c8399c66338ca7a08bbb9ef9e.jpg?imageView&quality=85&thumbnail=232y232" alt="">
            <div class="content-info">
              <div class="info-title">
                埃及进口长绒毛巾
              </div>
              <div class="info-desc">
                Ralph Lauren
              </div>
              <div class="info-price">
                <div class="price-new">
                  ￥32.00
                </div>
                <div class="price-old">
                  ￥199.00
                </div>
              </div>
            </div>
          </div>
          <div class="content-favourable">
            <span>领劵立减￥10.00</span>
          </div>
          <div class="content-to-more">
            <span>查看更多特惠商品</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapState} from 'vuex'

  export default {
    data () {
      return {
        cateIndex: 0,
      }
    },
    mounted () {
      this.$store.dispatch('getHome', () => {
        this.navBscroll = new this.$BScroll('.top-nav-warp', {
          scrollX:true,
          click: true
        })
      })
    },
    methods: {
      goto (e, id, index,) {
        this.$refs.rout.toTop2()
        this.$router.replace(`/cate/${id}`)
        this.cateIndex = index
        this.navBscroll.scrollToElement(e.currentTarget)

      },
      closeMask () {
        this.$store.dispatch('closeMask')
      },
      toTop () {
        this.$refs.rout.toTop()
      }
    },
    computed: {
      ...mapGetters(['headCateList']),
      ...mapState(['downloadShow', 'isCloseMask'])
    },
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
      top: 52px
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
            &.active
              bottom-border-1px(rgb(192, 74, 78))
              color rgb(192, 74, 78)
            font-size 14px
            padding 0 10px
            text-align center
            line-height 30px


    .gift
      width (120/$rem)
      height (80/$rem)
      background-image url("./image/gift.png")
      background-size 100%
      position fixed
      right: 0
      bottom (250/$rem)
    .to-top
      display block
      width (82/$rem)
      height (82/$rem)
      background-image url("./image/toTop.png")
      background-size 100%
      position fixed
      right: (40/$rem)
      bottom (125/$rem)
    .mask
      width: 100%
      height: 100%
      position fixed;
      top: 0
      left: 0
      z-index 100
      background-color: rgba(0,0,0,0.6);
      .close
        position absolute
        display block
        top (60/$rem)
        right: (30/$rem);
        width (31.98*2/$rem)
        height: (31.98*2/$rem);
      .mask-wrapper
        position absolute
        width: (315*2/$rem);
        height: (346*2/$rem);
        top: 0
        right: 0
        left: 0
        bottom: 0
        margin auto
        box-sizing border-box
        padding (30/$rem) (20/$rem)
        border-radius (20/$rem)
        background-color: #fff;
        .mask-content
          width 100%
          height: 100%
          .content-title
            width: 100%;
            height (29*2/$rem)
            display flex
            justify-content center
            align-items center
            .title-line
              width: 8%
              height: (2*2/$rem);
              background-color: #000;
            .title-text
              font-size (40/$rem)
              font-weight bold
              margin 0 (20/$rem)
          .content-subTitle
            font-size (28/$rem)
            >span
              display inline-block
              color #7e8c8d
              margin-top (5/$rem)
              transform scale(.9)
          .content-img-info
            display flex
            margin-top (40/$rem)
            .content-img
              display block
              width (115.98*2/$rem)
              height: (115.98*2/$rem);
            .content-info
              display flex
              flex-direction column
              justify-content center
              background-color: #eee;
              padding-left (10/$rem)
              width 100%
              .info-title
                font-size (28/$rem)
              .info-desc
                margin-top: (10/$rem);
                box-sizing border-box
                width: (154*2/$rem);
                height: (29*2/$rem);
                padding 0 (10/$rem)
                font-size (45/$rem)
                line-height (29*2/$rem)
                text-align center
                border (2/$rem) solid #aaa
              .info-price
                display flex
                margin-top: (20/$rem);
                .price-new
                  color: rgb(180, 40, 45);
                  margin-right: (10/$rem);
                .price-old
                  color #7e8c8d
                  text-decoration line-through
          .content-favourable
            width 100%
            text-align center
            >span
              display inline-block
              text-align center
              background: rgb(180, 40, 45)
              width 100%
              border-radius (5/$rem)
              height: (43.98*2/$rem);
              color white
              line-height (43.98*2/$rem)
              font-size (28/$rem)
              margin-top: (40/$rem);
          .content-to-more
            box-sizing border-box
            border 1px solid
            border-radius (5/$rem)
            height: (43.98*2/$rem);
            color #7e8c8d
            line-height (43.98*2/$rem)
            text-align center
            font-size (28/$rem)
            margin-top (40/$rem)

</style>
