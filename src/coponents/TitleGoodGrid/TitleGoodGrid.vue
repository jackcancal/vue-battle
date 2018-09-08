<template>
  <div class="title-good-grid">
    <FoolrHeader/>
    <div class="good-grid-content">
      <ul class="good-grid-ul">
        <li class="good-grid-item">
          <img class="good-grid-img" src="./image/cat.png" alt="">
          <div class="good-grid-decs">优质食材，薯类膨化多肉配方</div>
          <div class="good-grid-price">
            <p>
              <span>满折</span>
            </p>
          </div>
          <div class="good-grid-name">全期猫粮1.8KG</div>
          <div class="good-price">￥88</div>
        </li>
        <li class="good-grid-item">
          <img class="good-grid-img" src="./image/cat.png" alt="">
          <div class="good-grid-decs">优质食材，薯类膨化多肉配方</div>
          <div class="good-grid-price">
            <p>
              <span>满折</span>
            </p>
          </div>
          <div class="good-grid-name">全期猫粮1.8KG</div>
          <div class="good-price">￥88</div>
        </li>
        <li class="good-grid-item">
          <img class="good-grid-img" src="./image/cat.png" alt="">
          <div class="good-grid-decs">优质食材，薯类膨化多肉配方</div>
          <div class="good-grid-price">
            <p>
              <span>满折</span>
            </p>
          </div>
          <div class="good-grid-name">全期猫粮1.8KG</div>
          <div class="good-price">￥88</div>
        </li>
        <li class="good-grid-item">
          <img class="good-grid-img" src="./image/cat.png" alt="">
          <div class="good-grid-decs">优质食材，薯类膨化多肉配方</div>
          <div class="good-grid-price">
            <p>
              <span>满折</span>
            </p>
          </div>
          <div class="good-grid-name">全期猫粮1.8KG</div>
          <div class="good-price">￥88</div>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
  import FoolrHeader from '../FoolrHeader/FoolrHeader.vue'
  export default {
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
          .good-grid-decs
            width 100%
            height (69/$rem)
            background-color: rgb(241, 236, 226);
            box-sizing border-box
            padding (20/$rem) (10/$rem)
            font-size 12px
          .good-grid-price
            width 100%
            height: (30/$rem)
            margin-top (20/$rem)
            padding-left (15/$rem)
            >p
              width (72/$rem)
              height (30/$rem)
              font-size 12px
              color white
              text-align center
              line-height (30/$rem)
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
