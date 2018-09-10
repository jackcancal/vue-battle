<template>
  <div ref="grid">
    <div class="index-floor">
      <div class="first-new" :style="{backgroundImage: `url(${thisUrl})`}">
        <div class="first-txt">{{title}}</div>
        <div class="text" :style="{backgroundColor: `${thisColor}`}">
          <span>查看全部</span>
          <img class="to-show-all" src="./image/new-arrow.png"/>
        </div>
      </div>
      <div class="good-grid">
        <div class="scroll-container1">
          <ul class="scroll-wrapper" ref="grid">
            <li class="scroll-slide" v-for="(item, index) in list" :key="index">
              <img class="scroll-img" :src="item.scenePicUrl">
              <div class="goods-pref" v-if="item.itemTagList.length">
                <span v-for="(itemTag, index) in item.itemTagList" :key="index">
                  <span>{{itemTag.name}}</span>
                </span>
              </div>
              <div class="goods-name">
                {{item.name}}
              </div>
              <div class="goods-surprise">
                {{item.simpleDesc}}
              </div>
              <div class="goods-price">
                ￥{{item.retailPrice}}
              </div>
            </li>
            <li class="scroll-slide scroll-slide-last">
              <div>查看全部</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['title', 'list', 'index'],
    data () {
      return {
        newItembgUrl: '//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png',
        popularItembgUrl: '//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap2-d626e0b52a.png',
        newItembgColor: 'rgb(216, 229, 241)',
        popularItembgColor: 'rgb(244, 233, 203)'
      }
    },
    computed: {
      thisUrl () {
        return !this.index ? this.newItembgUrl : this.popularItembgUrl
      },
      thisColor () {
        return !this.index ? this.newItembgColor : this.popularItembgColor
      }
    },
    mounted () {
      const grid = this.$refs.grid.querySelectorAll(".good-grid")
      for (var i = 0; i < grid.length; i++) {
        var gridElement = grid[i]
        new this.$BScroll(gridElement, {
          scrollX: true,
          click: true,
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .index-floor
    background-color: #fff;
    margin-bottom 10px
    .first-new
      height 130px
      margin-bottom 20px
      background-image url("./image/first-new.png")
      background-size 100%
      background-repeat no-repeat
      display flex
      flex-direction column
      align-items center
      justify-content center
      .first-txt
        height: 20.5px
      .text
        text-align center
        line-height 28px
        width: 120px
        height 28px
        margin-top: 10px;
        background-color: rgb(216, 229, 241);
        .to-show-all
          width: 5px
          height: 11px
          margin-left: 2px;
    .good-grid
      height: 230px
      .scroll-container1
        width: 1600px
        .scroll-wrapper
          width: 1600px
          display flex
          padding 0 8px
          .scroll-slide
            width: 140px
            height: 100%
            display flex
            flex-direction column
            justify-content space-between
            align-items center
            margin 0 8px
            &.scroll-slide-last
              height: (280/$rem)
              width: (280/$rem)
              background-color: #eee;
              display flex
              justify-content center
              align-items center
              >div
                width: 95%
                height: 95%;
                display flex
                justify-content center
                align-items center
                line-height (280/$rem)
                background-color: #fff
                margin-right (1.5/$rem)
                margin-bottom  (1.5/$rem)
            .scroll-img
              height: (280/$rem)
              width: (280/$rem)
              background-color: #eee;
              margin-bottom 10px
            .goods-pref
              height: 15px
              font-size 12px
              width 100%
              color white
              text-align left
              box-sizing border-box
              padding 0 (15/$rem)
              display flex
              >span
                background-color: #f48f18
                display inline-block
                text-align center
                height: 15px
                line-height 15px
                margin-right (20/$rem)
                >span
                  display inline-block
                  transform scale(.8)
              .pref-txt1
                width: 60px
              .pref-txt2
                width: 46px


            .goods-name
              box-sizing border-box
              width 140px
              padding 0 5px
              margin 5px 0
              height: 15.5px
              font-size 14px
              overflow hidden
              white-space nowrap
              text-overflow ellipsis
            .goods-surprise
              box-sizing border-box
              width 140px
              padding 0 5px
              margin-bottom  5px
              height: 15.5px
              font-size 12px
              overflow hidden
              white-space nowrap
              color #777
              text-overflow ellipsis

            .goods-price
              box-sizing border-box
              width 140px
              height: 15.5px
              font-size 13px
              padding 0 5px
              color rgb(192, 74, 78)
              font-weight 550
</style>
