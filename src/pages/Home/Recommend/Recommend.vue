<template>
  <div>
    <div class="scroll-container" :style="{marginTop: downloadShow ? '126px' : '74px' }">
      <div class="scroll-content">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(homeSwiper, index) in homeSwiperList" :key="index">
              <img class="swiper-img" :src='homeSwiper.picUrl'>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        <ul class="g-grow">
          <li class="g-grow-item" v-for="(policyDesc, index) in policyDescList" :key="index">
            <a href="javascript:;">
              <img class="g-item-icon" :src="policyDesc.icon"/>
              <span class="g-item-text">{{policyDesc.desc}}</span>
            </a>
          </li>
        </ul>
        <div class="direct-goods">
          <FoolrHeader title="品牌制造商直供"/>
          <ul class="goods-card">
            <li class="goods-item"
                v-for="(showTag, index) in showTagList"
                :style="{backgroundImage: `url(${showTag.picUrl})`}"
                :class="`goods-item${index + 1}`"
                :key="index">
              <div class="item-detail">
                <h4 class="item-origin">{{showTag.name}}</h4>
                <div class="item-price">{{showTag.floorPrice}}元起</div>
                <img class="item-new" v-if="showTag.newOnShelf" src="./image/to-new.png"/>
              </div>
            </li>
          </ul>
        </div>
        <GoodsGrid title="新品首发" :list="NewItem" ref="newItem" :index="0"/>
        <GoodsGrid title="人气推荐 · 好物精选" :list="popularItemList" ref="popularItem" :index="1"/>
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
            <img v-if="limitGoods" :src="limitGoods.listPicUrl">
            <div class="price" v-if="limitGoods">
              <div>￥{{Math.floor(limitGoods.retailPrice * .9)}}</div>
              <div>￥{{Math.floor(limitGoods.retailPrice)}}</div>
            </div>
          </div>
        </div>
        <div class="sale"></div>
        <div class="special-select">
          <FoolrHeader title="专题精选"/>
          <div class="special-goods-warp">
            <div class="special-goods-content">
              <ul class="special-goods">
                <li class="special-item" v-for="(topic, index) in topicList" :key="index">
                  <img class="special-img" :src="topic.itemPicUrl">
                  <div class="text">
                    <h4>{{topic.subtitle}}</h4>
                    <span>{{topic.priceInfo}}元起</span>
                  </div>
                  <div class="desc">{{topic.title}}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <TitleGoodGrid/>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapState} from 'vuex'
  import GoodsGrid from '../../../coponents/GoodsGrid/GoodsGrid.vue'
  import FoolrHeader from '../../../coponents/FoolrHeader/FoolrHeader.vue'
  import TitleGoodGrid from '../../../coponents/TitleGoodGrid/TitleGoodGrid.vue'
  export default {
    computed: {
      ...mapGetters([
        'homeSwiperList',
        'policyDescList',
        'showTagList',
        'NewItem',
        'popularItemList',
        'limitGoods',
        'topicList'
      ]),
      ...mapState(['downloadShow'])
    },
    methods: {
      _initBBSroll () {
        new this.$Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
          },
          loop: true
        })
        new this.$BScroll('.special-goods-content', {
          scrollX: true,
          click: true
        })
        this.BS = new this.$BScroll('.scroll-container', {
          scrollX: true,
          click: true
        })
      },
      toTop () {
        this.BS.scrollTo(0, 0, 500)
      },
      toTop2 () {
        this.BS.scrollTo(0, 0)
      }
    },
    mounted () {
      this.$store.dispatch('getHome', ()=>{
        this.$nextTick(() => {
          this._initBBSroll()
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
  @import "../../../common/stylus/mixins.styl"
  .scroll-container
    width 100%
    height (667*2/$rem)
    box-sizing border-box
    margin-top 126px
    margin-bottom 60px
    .swiper-container
      width: 100%
      margin -10px 0
      .swiper-pagination
        bottom (40/$rem)
        >span
          width (40/$rem)
          height: (5/$rem);
          border-radius (5/$rem)
          &.swiper-pagination-bullet-active
            background-color: #fff;
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
            width (893*2/$rem)
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
</style>
