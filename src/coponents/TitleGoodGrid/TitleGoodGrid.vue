<template>
  <div>
    <div class="title-good-grid" v-for="(cata, index) in cateList" :key="index">
      <FoolrHeader :title="`${cata.name}好货`"/>
      <div class="good-grid-content">
        <ul class="good-grid-ul">
          <li class="good-grid-item"
              v-for="(item, index) in cata.itemList"
              :key="index">
            <img class="good-grid-img" :src="item.listPicUrl">
            <div class="good-grid-wrap">
              <div class="good-grid-decs ellipsis">{{item.simpleDesc}}</div>
              <div class="good-grid-price" v-if="item.itemTagList.length">
                <p>
                  <span>{{item.itemTagList ? item.itemTagList[0].name : ''}}</span>
                </p>
              </div>
              <div class="good-grid-name ellipsis">{{item.name}}</div>
              <div class="good-price">￥{{item.retailPrice}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  import FoolrHeader from '../FoolrHeader/FoolrHeader.vue'
  export default {
    computed: {
      ...mapGetters(['cateList'])
    },
    components: {
      FoolrHeader,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .title-good-grid
    width 100%
    background-color: #fff;
    margin-top (20/$rem)
    .good-grid-content
      width 100%
      .good-grid-ul
        width 100%
        box-sizing border-box
        padding 0 (10/$rem)
        display flex
        flex-wrap wrap
        .good-grid-item
          width 50%
          height (587/$rem)
          box-sizing border-box
          display: flex
          flex-direction column
          justify-content space-between
          padding 0 (5/$rem) (30/$rem) (5/$rem)
          .good-grid-img
            width 100%
            height (355/$rem)
            background-color: #eee;
          .good-grid-wrap
            display flex
            height (202/$rem)
            flex-direction column
            justify-content space-between
            .good-grid-decs
              width 100%
              background-color: rgb(241, 236, 226);
              box-sizing border-box
              padding (20/$rem) (10/$rem)
              font-size 12px
              line-height (24/$rem)
            .good-grid-price
              margin-top (20/$rem)
              padding-left (15/$rem)
              >p
                font-size 12px
                color white
                text-align center
                line-height (30/$rem)
                display inline-block
                background-color: rgb(244, 143, 24);
                >span
                  display inline-block
                  transform scale(.8)
            .good-grid-name
              width: 100%
              height (48/$rem)
              padding 0 (10/$rem)
              margin-top (10/$rem)
              font-size 14px
            .good-price
              width: 100%;
              height: (32$rem);
              padding 0 (10/$rem)
              color rgb(186, 57, 61)


</style>
