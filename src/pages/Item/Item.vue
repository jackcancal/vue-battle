<template>
  <div class="item" v-if="categoryList">
    <header class="item-header" :style="{top: downloadShow ? '52px' : '0px'}">
      <div class="item-header-wrapper">
        <img class="header-search" src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png" alt="">
        <div class="header-text">搜索商品, 共13234款好物</div>
      </div>
    </header>
    <div class="item-list" :style="{marginTop: downloadShow ? '34px' : '0px' }">
      <div class="item-list-wrapper">
        <div class="item-list-class"
             v-for="(category, index) in categoryList"
             @click="go($event, index)"
             :class="{active: categoryIndex === index}"
             :key="index">
          <span>{{category.name}}</span>
          <div class="after"></div>
        </div>
      </div>
    </div>
    <div class="item-content" :style="{marginTop: downloadShow ? '86px' : '34px' }">
      <router-view :categoryIndex="categoryIndex"/>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        categoryIndex: 0
      }
    },
    mounted () {
      this.$store.dispatch('getCategoryList', () => {
        this.$nextTick(() => {
          this.BS = new this.$BScroll('.item-list', {
            click: true
          })
        })
      })
    },
    computed: {
      ...mapState(['categoryList', 'downloadShow'])
    },
    methods: {
      go (e,index) {
        this.BS.scrollToElement(e.currentTarget)
        this.$router.replace(`/item/${this.categoryList[index].id}`)
        this.categoryIndex = index
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .item
    width 100%
    height: (667*2/$rem)
    background-color: #fff;
    .item-header
      position fixed
      top: 52px
      /*top: 0*/
      left: 0
      z-index 10
      width: 100%;
      height (87.98/$rem)
      padding 0 (40/$rem)
      box-sizing border-box
      display flex
      justify-content center
      align-items center
      background-color: #fff;
      border-bottom: (2/$rem) solid #eee;
      .item-header-wrapper
        width 100%
        height: (56/$rem)
        border-radius (10/$rem)
        background-color: #eee;
        display flex
        justify-content center
        align-items center
        .header-search
          width (27.98/$rem)
          height: (27.98/$rem);
          margin-right: (10/$rem);
        .header-text
          height (41/$rem)
          font-size (28/$rem)
          line-height (41/$rem)
          color #666
    .item-list
      overflow hidden
      height (577*2/$rem)
      width (162/$rem)
      position fixed
      top: (87.98/$rem);
      left: 0
      box-sizing border-box
      border-right: (2/$rem) solid #eee;
      .item-list-wrapper
        padding-top: (40/$rem);
        padding-bottom: (60/$rem);
        display flex
        flex-direction column
        justify-content space-between
        width 100%
        height (1307.8/$rem)
        .item-list-class
          font-size (28/$rem)
          height (50/$rem)
          line-height (50/$rem)
          text-align center
          position relative
          &.active
            color rgb(171, 43, 43)
            .after
              width (6/$rem)
              height 100%
              position absolute
              left: 0
              top: 0
              background-color: rgb(171, 43, 43);


    .item-content
      width: (588/$rem)
      height (667*2/$rem)
      box-sizing border-box
      margin-left (162/$rem)
      margin-top: (87.98/$rem);
      padding (30/$rem)
</style>
