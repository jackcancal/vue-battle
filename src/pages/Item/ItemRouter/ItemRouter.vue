<template>
  <div class="item-router">
    <div class="item-router-container">
      <img class="header-img" :src="category.wapBannerUrl">
      <ul class="router-list">
        <li class="router-item" v-for="(subCate, index) in category.subCateList" :key="index">
          <img class="router-item-img" :src="subCate.wapBannerUrl" alt="">
          <div class="router-item-text">{{subCate.name}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    props:['categoryIndex'],
    computed: {
      ...mapState(['categoryList']),
      category () {
        return this.categoryList[this.categoryIndex]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .item-router
    width 100%
    .item-router-container
      width 100%
      .header-img
        width 100%
        height: (192/$rem)
        display block
        margin-bottom: (30/$rem);
      .router-list
        width 100%
        display flex
        flex-wrap wrap
        justify-content space-between
        .router-item
          width (144/$rem)
          height (216/$rem)
          display flex
          flex-direction column
          justify-items center
          .router-item-img
            width (144/$rem)
            height: (144/$rem);
            border-radius 50%
          .router-item-text
            font-size (24/$rem)
            text-align center
            line-height (72/2/$rem)
</style>
