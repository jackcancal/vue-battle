<template>
  <div class="scroll-warp" :style="{marginTop: downloadShow ? '126px' : '74px' }">
    <div class="scroll-content" v-if="cate[cateIndex]">
      <img class="top-img" :src="cate[cateIndex].wapBannerUrl" alt="">
      <ul class="family-list">
        <li class="family-item" v-for="(c, index) in cate[cateIndex].subCateList" :key="index">
          <div class="item-header">
            <header class="header">
              <p class="header-name">{{c.name}}</p>
              <p class="header-desc">{{c.frontName}}</p>
            </header>
          </div>
          <div class="item-grid">
            <ul class="grid-list">
              <li class="grid-item">
                <img class="item-img" src="http://yanxuan.nosdn.127.net/53d04514f65209d497ee27e2f4efe583.jpg?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="item-text">
                  <div class="text-desc">经典暖调配色，随性美式加身</div>
                  <div class="text-new">
                    <span>新品</span>
                  </div>
                  <div class="text-name">秋遇·漫花开贡缎四件套</div>
                  <div class="text-price">￥439</div>
                </div>
              </li>
              <li class="grid-item">
                <img class="item-img" src="http://yanxuan.nosdn.127.net/53d04514f65209d497ee27e2f4efe583.jpg?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="item-text">
                  <div class="text-desc">经典暖调配色，随性美式加身</div>
                  <div class="text-new">
                    <span>新品</span>
                  </div>
                  <div class="text-name">秋遇·漫花开贡缎四件套</div>
                  <div class="text-price">￥439</div>
                </div>
              </li>
              <li class="grid-item">
                <img class="item-img" src="http://yanxuan.nosdn.127.net/53d04514f65209d497ee27e2f4efe583.jpg?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="item-text">
                  <div class="text-desc">经典暖调配色，随性美式加身</div>
                  <div class="text-new">
                    <span>新品</span>
                  </div>
                  <div class="text-name">秋遇·漫花开贡缎四件套</div>
                  <div class="text-price">￥439</div>
                </div>
              </li>
              <li class="grid-item">
                <img class="item-img" src="http://yanxuan.nosdn.127.net/53d04514f65209d497ee27e2f4efe583.jpg?imageView&quality=65&thumbnail=330x330" alt="">
                <div class="item-text">
                  <div class="text-desc">经典暖调配色，随性美式加身</div>
                  <div class="text-new">
                    <span>新品</span>
                  </div>
                  <div class="text-name">秋遇·漫花开贡缎四件套</div>
                  <div class="text-price">￥439</div>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    props: {
      cateIndex: Number
    },
    computed: {
      ...mapState(['cate', 'downloadShow'])
    },
    mounted () {
      this.$store.dispatch('getCate', () => {
        this.$nextTick(() => {
          new this.$BScroll('.scroll-warp', {
            click: true
          })
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .scroll-warp
    width 100%
    height: 100%
    background-color: #eee
    .scroll-content
      /*margin-top (144/$rem)*/
      .top-img
        width 100%
        height: (370/$rem);

      .family-list
        width 100%
        .family-item
          background-color: #fff;
          margin-top (20/$rem)
          width 100%
          .item-header
            width: 100%
            .header
              width 100%
              height (120/$rem)
              display: flex
              flex-direction column
              justify-content center
              align-items center
              .header-name
                font-size (30/$rem)
                margin-bottom (15/$rem)
              .header-desc
                font-size (24/$rem)
                color #7e8c8d

          .item-grid
            width: 100%
            .grid-list
              display flex
              flex-wrap wrap
              width: 100%
              box-sizing border-box
              padding 0 (10/$rem)
              .grid-item
                width 50%
                box-sizing border-box
                padding 0 (10/$rem) (40/$rem) (10/$rem)
                .item-img
                  width: (345/$rem)
                  height: (345/$rem)
                  display block
                .item-text
                  width 100%
                  height (242/$rem)
                  .text-desc
                    width 100%
                    height: (69/$rem);
                    box-sizing border-box
                    font-size (24/$rem)
                    background-color: rgb(241, 236, 226);
                    padding (20/$rem) (10/$rem)
                  .text-new
                    text-align left
                    margin-top (20/$rem)
                    margin-left (10/$rem)
                    font-size (30/$rem)
                    display inline-block
                    color white
                    background-color: rgb(205, 182, 148);
                    >span
                      display inline-block
                      transform scale(.7)
                  .text-name
                    font-size (30/$rem)
                    padding-left (10/$rem)
                    margin-top (20/$rem)
                  .text-price
                    font-size (30/$rem)
                    padding-left (10/$rem)
                    margin-top (20/$rem)
                    color rgb(186, 57, 61)
</style>
