<template>
  <div ref="grid">
    <div class="index-floor" v-for="(item, index) in arr2" :key="index" >
      <div class="first-new">
        <div class="first-txt">新品首发</div>
        <div class="text">
          <span>查看全部</span>
          <img class="to-show-all" src="./image/new-arrow.png"/>
        </div>
      </div>
      <div class="good-grid">
        <div class="scroll-container1">
          <ul class="scroll-wrapper" ref="grid">
            <li class="scroll-slide" v-for="(item, index) in arr" :key="index">
              <img class="scroll-img" src="./image/good-grid-img.png">
              <div class="goods-pref">
                <span class="pref-txt1"><span>味央特惠</span></span>
                <span class="pref-txt2"><span>满额减</span></span>
              </div>
              <div class="goods-name">
                人月团圆 网易味央中秋月饼礼盒（8枚入）
              </div>
              <div class="goods-surprise">
                特别的礼，只为更用心的你
              </div>
              <div class="goods-price">
                ￥138
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        arr: [1,2,3,4,5,6,7,8],
        arr2: [1,2]
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
        width: 1248px
        .scroll-wrapper
          width: 1248px
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
            .scroll-img
              height: 140px
              width: 140px
              background-color: #eee;
              margin-bottom 10px
            .goods-pref
              height: 15px
              font-size 12px
              color white
              >span
                background-color: #f48f18
                display inline-block
                text-align center
                height: 15px
                line-height 15px
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
