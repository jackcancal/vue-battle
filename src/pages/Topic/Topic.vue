<template>
  <div class="topic" v-if="topic">
    <div class="topic-header" :style="{top: downloadShow ? '52px' : '0px'}">
      <header class="header">
        <div class="header-home"></div>
        <div class="header-logo"></div>
        <div class="header-search-cart">
          <div class="search"></div>
          <div class="cart"></div>
        </div>
      </header>
    </div>
    <div class="scroll-container" :style="{marginTop: downloadShow ? '86px' : '34px' }">
      <div class="scroll-warp">
        <div class="swiper-container shiwu">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(ban, index) in topic.banner" :key="index">
              <div class="content">
                <img class="content-img" :src="ban.picUrl">
                <div class="middle-content">
                  <div class="middle-content-wrapper">
                    <div class="sub-title">
                      <div class="title-line"></div>
                      <div class="title-text">{{ban.subTitle}}</div>
                      <div class="title-line"></div>
                    </div>
                    <div class="title">{{ban.title}}</div>
                    <div class="desc">{{ban.desc}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="explore-channels">
          <ul class="explore-wrapper">
            <li class="explore-item" v-for="(col, index) in topic.column" :key="index">
              <div class="item-pic">
                <img class="pic-img" :src="col.picUrl" alt="">
                <div class="pic-num">{{col.articleCount}}</div>
              </div>
              <div class="item-text">{{col.title}}</div>
            </li>
          </ul>
        </div>
        <div class="explore-for-you">
          <header class="for-you-header">
            {{topic.recommendOne.typeName}}
          </header>
          <div class="for-you-item-1">
            <img class="item-1-img" :src="topic.recommendOne.picUrl">
            <div class="item-1-info">
              <div class="info-desc">
                <span class="desc-text">{{topic.recommendOne.title}}</span>
                <span class="desc-price">{{topic.recommendOne.priceInfo}}元起</span>
              </div>
              <div class="info-name">{{topic.recommendOne.subTitle}}</div>
            </div>
            <div class="icon">{{topic.recommendOne.nickname}}</div>
          </div>
          <div class="for-you-item-2">
            <div class="item-2-info">
              <div class="info-header">
                <img class="header-user-pic" :src="topic.recommendTwo.avatar">
                <div class="header-username">
                  <span>{{topic.recommendTwo.nickname}}</span>
                </div>
              </div>
              <div class="info-title ellipsis">{{topic.recommendTwo.title}}</div>
              <div class="info-desc">{{topic.recommendTwo.subTitle}}</div>
            </div>
            <div class="item-2-pic">
              <img class="pic-img" :src="topic.recommendTwo.picUrl">
              <div class="pic-icon">{{topic.recommendTwo.typeName}}</div>
            </div>
          </div>
          <div class="for-you-item-2">
            <div class="item-2-info">
              <div class="info-header">
                <img class="header-user-pic" :src="topic.recommendThree.avatar">
                <div class="header-username">
                  <span>{{topic.recommendThree.nickname}}</span>
                </div>
              </div>
              <div class="info-title ellipsis">{{topic.recommendThree.title}}</div>
              <div class="info-desc">{{topic.recommendThree.subTitle}}</div>
            </div>
            <div class="item-2-pic">
              <img class="pic-img" :src="topic.recommendThree.picUrl">
              <div class="pic-icon">{{topic.recommendThree.typeName}}</div>
            </div>
          </div>
          <div class="for-you-item-1">
            <img class="item-1-img" :src="topic.zhenOne.picUrl">
            <div class="item-1-info">
              <div class="info-desc">
                <span class="desc-text">{{topic.zhenOne.title}}</span>
                <span class="desc-price">{{topic.zhenOne.priceInfo}}元起</span>
              </div>
              <div class="info-name">{{topic.zhenOne.subTitle}}</div>
            </div>
            <div class="icon">{{topic.zhenOne.nickname}}</div>
          </div>
          <div class="for-you-item-2">
            <div class="item-2-info">
              <div class="info-header">
                <img class="header-user-pic" :src="topic.zhenTwo.avatar">
                <div class="header-username">
                  <span>{{topic.zhenTwo.nickname}}</span>
                </div>
              </div>
              <div class="info-title ellipsis">{{topic.zhenTwo.title}}</div>
              <div class="info-desc">{{topic.zhenTwo.subTitle}}</div>
            </div>
            <div class="item-2-pic">
              <img class="pic-img" :src="topic.zhenTwo.picUrl">
              <div class="pic-icon">{{topic.zhenTwo.typeName}}</div>
            </div>
          </div>
          <div class="for-you-item-2">
            <div class="item-2-info">
              <div class="info-header">
                <img class="header-user-pic" :src="topic.zhenThree.avatar">
                <div class="header-username">
                  <span>{{topic.zhenThree.nickname}}</span>
                </div>
              </div>
              <div class="info-title ellipsis">{{topic.zhenThree.title}}</div>
              <div class="info-desc">{{topic.zhenThree.subTitle}}</div>
            </div>
            <div class="item-2-pic">
              <img class="pic-img" :src="topic.zhenThree.picUrl">
              <div class="pic-icon">{{topic.zhenThree.typeName}}</div>
            </div>
          </div>
        </div>
        <div class="ten-fifteen">
          <header class="fifteen-header">十点一刻</header>
          <div class="fifteen-scroll-container">
            <ul class="fifteen-scroll-wrapper">
              <li class="fifteen-item">
                <div class="item-title1">-- 今日话题 --</div>
                <div class="item-title2">你有哪些租房经历</div>
                <div class="item-desc">聊聊你用过的租房神器</div>
                <div class="item-join">
                  <div class="join-avatar">
                    <img class="avatar-img" src="//yanxuan.nosdn.127.net/6a329c72857f948d665be6e29086a1d3.jpg?imageView&thumbnail=48y48" alt="">
                    <img class="avatar-img" src="//yanxuan.nosdn.127.net/7b43828bf9c1cb0d7d5acf538d8c4b08.jpg" alt="">
                    <img class="avatar-img" src="//q.qlogo.cn/qqapp/101330628/5737A557E387B48F6964F4B1CFF0C4A9/100" alt="">
                    <img class="avatar-img" src="//yanxuan.nosdn.127.net/0e6cc440246db5f3ea2e908c16554ec1" alt="">
                  </div>
                  <div class="join-info">
                    991人参与话题
                  </div>
                </div>
              </li>
              <li class="fifteen-item fifteen-item-last">
                <div class="more">
                  <div>
                    <div class="text">查看全部话题</div>
                    <div class="go-more"></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="explore-for-you">
          <header class="for-you-header">
            为你推荐
          </header>
          <div class="for-you-item-1">
            <img class="item-1-img" src="//yanxuan.nosdn.127.net/201eb7ad6eeb93fd9468f3f9f2deb8d4.jpg?imageView&quality=75" alt="">
            <div class="item-1-info">
              <div class="info-desc">
                <span class="desc-text">9月服饰鞋包上新</span>
                <span class="desc-price">59元起</span>
              </div>
              <div class="info-name">秋天从现在开始，更有超值换季折扣等你哦</div>
            </div>
            <div class="icon">严选推荐</div>
          </div>
          <div class="for-you-item-2">
            <div class="item-2-info">
              <div class="info-header">
                <img class="header-user-pic" src="//yanxuan.nosdn.127.net/bb9873e306c58607c77c3577344eced5.jpg?imageView&quality=75&thumbnail=48y48" alt="">
                <div class="header-username">
                  <span>饮食组：万万</span>
                </div>
              </div>
              <div class="info-title ellipsis">10分钟做出异域大餐</div>
              <div class="info-desc">所谓美食无国界，虽说中华美食博大精深，但偶尔在家做些异国料理，也是别有一番风味。在海外待过不少时日，遍尝各国美食的我，想给大家推荐几款方便的快手菜，让你10分钟就能品尝到异域大餐。</div>
            </div>
            <div class="item-2-pic">
              <img class="pic-img" src="//yanxuan.nosdn.127.net/e267628e894f76ff50a6afe1d4a265dd.jpg?imageView&quality=75" alt="">
              <div class="pic-icon">挑款师推荐</div>
            </div>
          </div>
          <div class="for-you-item-2">
            <div class="item-2-info">
              <div class="info-header">
                <img class="header-user-pic" src="//yanxuan.nosdn.127.net/bb9873e306c58607c77c3577344eced5.jpg?imageView&quality=75&thumbnail=48y48" alt="">
                <div class="header-username">
                  <span>饮食组：万万</span>
                </div>
              </div>
              <div class="info-title ellipsis">10分钟做出异域大餐</div>
              <div class="info-desc">所谓美食无国界，虽说中华美食博大精深，但偶尔在家做些异国料理，也是别有一番风味。在海外待过不少时日，遍尝各国美食的我，想给大家推荐几款方便的快手菜，让你10分钟就能品尝到异域大餐。</div>
            </div>
            <div class="item-2-pic">
              <img class="pic-img" src="//yanxuan.nosdn.127.net/e267628e894f76ff50a6afe1d4a265dd.jpg?imageView&quality=75" alt="">
              <div class="pic-icon">挑款师推荐</div>
            </div>
          </div>
        </div>
        <div class="explore-look">
          <header class="explore-look-header">
            严选LOOK
          </header>
          <img class="explore-look-img" :src="topic.yxLook.picUrl">
          <div class="explore-look-info">
            <div class="look-info-user">
              <img class="look-user-avatar" :src="topic.yxLook.avatar">
              <div class="look-username">{{topic.yxLook.content}}</div>
            </div>
            <div class="look-user-desc">加了冰块一个小金橘，还是觉得比较甜。照评论员说的，下次用苏打水稀释。因为只优惠了10块钱，我有囤了一瓶～</div>
          </div>
        </div>
        <div class="more-wonderful">
          <header class="more-wonderful-header">
            <div class="wonderful-header-line"></div>
            <div class="wonderful-header-text">更多精彩</div>
            <div class="wonderful-header-line"></div>
          </header>
          <div class="more-wonderful-item"
               v-for="(g, index) in topic.findMore" :key="index">
            <img class="item-img" :src="g.itemPicUrl">
            <div class="item-info">{{g.title}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    mounted () {
      this.$store.dispatch('getTopic', () => {
        this.$nextTick(() => {
          new this.$Swiper('.shiwu',{
            loop: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            spaceBetween: 10,
          })
          new this.$BScroll('.explore-channels', {
            click: true,
            scrollX: true
          })
        })
      })
    },
    computed: {
      ...mapState(['topic', 'downloadShow'])
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .topic
    background-color: #eee;
    width: 100%
    .topic-header
      bottom-border-1px(#eee)
      background-color: #fff;
      width 100%
      height (87.98/$rem)
      position fixed
      top: 52px
      left: 0
      z-index 10
      box-sizing border-box
      padding 0 (25/$rem)
      .header
        width 100%
        height 100%
        display flex
        justify-content space-between
        align-items center
        .header-home
          width: (48/$rem);
          height: (44/$rem);
          background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s28ce1ea0be-3d137edb2d.png")
          background-size (175/$rem)
          background-repeat no-repeat
          background-position 0px -38px
        .header-logo
          width: (171.98/$rem);
          height: (54/$rem);
          background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s28ce1ea0be-3d137edb2d.png")
          background-size (175/$rem)
          background-repeat no-repeat
          background-position 0px -64px
        .header-search-cart
          width: (147.97/$rem);
          height: (63.98/$rem);
          display flex
          justify-content space-between
          .search
            width: (63.98/$rem);
            height: (63.98/$rem);
            background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s28ce1ea0be-3d137edb2d.png")
            background-size (175/$rem)
            background-repeat no-repeat
            background-position -3px -156px
          .cart
            width: (63.98/$rem);
            height: (63.98/$rem);
            background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s28ce1ea0be-3d137edb2d.png")
            background-size (175/$rem)
            background-repeat no-repeat
            background-position -3px -0px
    .scroll-container
      margin-top: (87.98/$rem);
      margin-bottom: (0/$rem);
      width 100%
      height 100%
      .scroll-warp
        width 100%
        margin-bottom 100px
        .swiper-container
          width 100%
          background-color: #fff;
          height: 100%;
          box-sizing border-box
          padding (20/$rem) 0
          .swiper-wrapper
            .swiper-slide
              width (670.03/$rem)
              height (384.98/$rem)
              .content
                width (670.03/$rem)
                height (384.98/$rem)
                position relative
                .content-img
                  width (670.03/$rem)
                  height (384.98/$rem)
                  position absolute
                  right: 0
                  left: 0
                  bottom: 0
                  top: 0
                  margin auto
                .middle-content
                  width 100%
                  height: 100%
                  box-sizing border-box
                  position absolute
                  padding  (100/$rem) (100/$rem)
                  .middle-content-wrapper
                    width 100%
                    height 100%
                    background-color: rgba(255, 255, 255, 0.8);
                    display flex
                    flex-direction column
                    justify-content space-around
                    align-items center
                    .sub-title
                      margin-top (20/$rem)
                      font-size (24/$rem)
                      display flex
                      width 100%
                      justify-content center
                      align-items center
                      .title-line
                        width 8%
                        height: (2/$rem);
                        background-color: #ccc;
                      .title-text
                        color #666
                        margin 0 (10/$rem)
                    .title
                      font-size (34/$rem)
                      font-weight bold
                    .desc
                      font-size (25/$rem)
                      margin-bottom: (20/$rem);

        .explore-channels
          width: 100%
          background-color: #fff;
          height: (285.98/$rem);
          box-sizing border-box
          padding (30/$rem)
          .explore-wrapper
            width 800px
            height: 100%
            display flex
            .explore-item
              flex-wrap nowrap
              width (164/$rem)
              height: (218/$rem)
              margin-right (30/$rem)
              .item-pic
                width: (164/$rem);
                height: (164/$rem);
                margin-bottom (30/$rem)
                position relative
                .pic-img
                  width 100%
                  height: 100%
                .pic-num
                  position absolute
                  top: 0
                  right: 0
                  color white
                  font-size (24/$rem)
                  background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/rbGradient-049c62dfb5.png")
                  background-repeat no-repeat
                  background-size 100%


              .item-text
                font-size (28/$rem)
                text-align center
        .explore-for-you
          background-color: #fff;
          margin-top (20/$rem)
          width 100%
          box-sizing border-box
          padding 0 (30/$rem) (40/$rem) (30/$rem)
          .for-you-header
            width 100%
            height: (120/$rem);
            text-align center
            line-height (120/$rem)
            font-size (36/$rem)
            margin-bottom (-30/$rem)
          .for-you-item-1
            margin-top (30/$rem)
            width 100%
            position relative
            border (1/$rem) solid #eee
            .item-1-img
              width 100%
              height (386/$rem)
            .item-1-info
              display flex
              flex-direction column
              justify-content space-between
              width 100%
              height (185.98/$rem)
              box-sizing border-box
              padding (30/$rem) (20/$rem) (70/$rem) (20/$rem)
              .info-desc
                width 100%
                display flex
                justify-content space-between
                align-items center
                .desc-text
                  font-size (34/$rem)
                .desc-price
                  font-size (34/$rem)
              .info-name
                font-size (28/$rem)
                color #999
            .icon
              position absolute
              height: (36/$rem);
              padding 0 (10/$rem)
              background-color: #fff;
              top (10/$rem)
              left: (10/$rem);
              font-size (24/$rem)
              border-radius (18/$rem)
              text-align center
              line-height (36/$rem)
          .for-you-item-2
            width 100%
            height: (273/$rem);
            display flex
            box-sizing border-box
            border (2/$rem) solid #eee
            margin-top (30/$rem)
            .item-2-info
              width (408.02/$rem)
              box-sizing border-box
              padding 0 (30/$rem) 0 (20/$rem)
              display flex
              flex-direction column
              .info-header
                margin-top (40/$rem)
                width 100%
                height (48/$rem)
                display flex
                align-items center
                .header-user-pic
                  border-radius 50%
                  width: (46/$rem);
                  height: (46/$rem);
                .header-username
                  height (24/$rem)
                  font-size (24/$rem)
                  line-height (24/$rem)
                  >span
                    display inline-block
                    transform scale(.8)
              .info-title
                margin-top (30/$rem)
                width 100%
                height: (38/$rem);
                font-size (32/$rem)
                margin-bottom (15/$rem)
              .info-desc
                font-size (24/$rem)
                width 100%
                height: (67/$rem);
                overflow hidden
                line-height (36/$rem)
                color #777
                text-overflow ellipsis
            .item-2-pic
              width (279.98/$rem)
              height: (272/$rem);
              position relative
              .pic-img
                width 100%
                height: 100%
              .pic-icon
                position absolute
                height: (36/$rem);
                padding 0 (10/$rem)
                background-color: #fff;
                top (10/$rem)
                left: (10/$rem);
                font-size (24/$rem)
                border-radius (18/$rem)
                text-align center
                line-height (36/$rem)
        .ten-fifteen
          width: 100%
          height: (570.98/$rem);
          box-sizing border-box
          padding 0 (30/$rem) (40/$rem) (30/$rem)
          margin-top (20/$rem)
          background-color: #fff;
          .fifteen-header
            width: 100%
            height: (120/$rem);
            text-align center
            font-size (36/$rem)
            line-height (120/$rem)
          .fifteen-scroll-container
            width: 100%
            .fifteen-scroll-wrapper
              clearFix()
              width 200%
              .fifteen-item
                float left
                width: (579.98/$rem);
                height: (411/$rem);
                box-sizing border-box
                padding (30/$rem) (30/$rem) (80/$rem) (30/$rem)
                margin-right (30/$rem)
                background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png");
                background-size 100%
                background-repeat no-repeat
                display flex
                flex-direction column
                justify-content space-between
                align-items center
                .item-title1
                  text-align center
                  height (28/$rem)
                  font-size (24/$rem)
                  line-height (28/$rem)
                  color #7e8c8d
                  margin-top: (5/$rem);
                .item-title2
                  text-align center
                  height (43/$rem)
                  font-size (36/$rem)
                  font-weight bold
                  line-height (43/$rem)
                  margin-top (-40/$rem)
                .item-desc
                  font-size (26/$rem)
                  text-align center
                  height (41/$rem)
                  margin-top: (-60/$rem);
                  line-height (41/$rem)
                .item-join
                  height (48/$rem)
                  display flex
                  align-items center
                  .join-avatar
                    display flex
                    .avatar-img
                      height: (48/$rem);
                      width: (48/$rem);
                      border-radius 50%
                  .join-info
                    font-size (24/$rem)
                    color #7e8c8d
                    margin-left: (20/$rem);
                &.fifteen-item-last
                  padding 0
                  background #eee
                  height (384/$rem)
                  .more
                    width 100%
                    height 100%
                    box-sizing border-box
                    padding (10/$rem)
                    >div
                      width 100%
                      height: 100%
                      background-color: #fff;
                      display flex
                      justify-content center
                      align-items center
                      .text
                        font-size (32/$rem)
                        color #7e8c8d
                        margin-right: (20/$rem);
                      .go-more
                        width (30/$rem)
                        height: (30/$rem);
                        background-image: url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/circle-right-arrow-3d59025cb6.png');
                        background-size: 100%
                        background-repeat: no-repeat;

        .explore-look
          background-color: #fff;
          width 100%
          .explore-look-header
            width 100%
            height: (120/$rem);
            text-align center
            line-height (120/$rem)
          .explore-look-img
            width: 100%
            height: (750/$rem);
            display block
          .explore-look-info
            width: 100%
            display flex
            flex-direction column
            justify-content space-between
            height: (273.98/$rem);
            box-sizing border-box
            padding (20/$rem) (30/$rem) (50/$rem) (30/$rem)
            .look-info-user
              width: 100%
              height: (48/$rem);
              display flex
              align-items center
              .look-user-avatar
                width: (46/$rem);
                height: (46/$rem);
                border-radius 50%
                margin-right: (5/$rem);
              .look-username
                font-size (24/$rem)
            .look-user-desc
              width 100%
              height: (132/$rem);
              font-size (28/$rem)
              color #7e8c8d
              line-height (44/$rem)


        .more-wonderful
          width: 100%
          box-sizing border-box
          padding 0 (30/$rem)
          .more-wonderful-header
            width: 100%
            height (140/$rem)
            display flex
            line-height (140/$rem)
            .wonderful-header-line
              width: (264/$rem);
              height: (2/$rem);
            .wonderful-header-text
              font-size (38/$rem)
          .more-wonderful-item
            width: 100%
            height: (497.98/$rem);
            box-sizing border-box
            padding (30/$rem)
            margin-bottom (30/$rem)
            background-color: #fff;
            .item-img
              display block
              width 100%
              height: (360/$rem);
            .item-info
              width 100%
              height: (89.98/$rem);
              font-size (28/$rem)
              line-height (89.98/$rem)
</style>
