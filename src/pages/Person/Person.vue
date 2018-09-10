<template>
  <div class="person">
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
    <div class="login-main" v-show="!way">
      <div class="logo-large">
        <img class="large-img" src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="login-phone" @click="way = 1">
        <i class="iconfont icon-phone"></i>
        <span>手机号码登录</span>
      </div>
      <div class="login-mail" @click="way = 2">
        <i class="iconfont icon-mail"></i>
        <span>邮箱号码登录</span>
      </div>
      <div class="register-phone">
        手机号快捷注册 >
      </div>
    </div>
    <div class="login-for-phone" v-show="way === 1">
      <div class="login-for-phone-wrapper">
        <img class="small-img" src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        <div class="input-phone">
          <input @input="errorMsg = ''" v-model="phone" type="text" placeholder="请输入手机号" maxlength="11">
        </div>
        <div class="get-phone-code">
          <input v-model="code" type="text" placeholder="请输入短信验证码" maxlength="6">
          <div>获取验证码</div>
        </div>
        <div class="problem">
          <div class="has-problem">遇到问题？</div>
          <div class="use-pwd-login">使用密码验证登录</div>
        </div>
        <div id="errorMsg" v-show="errorMsg && phone">{{errorMsg}}</div>
        <div class="to-login" @click="toLogin">登录</div>
        <div class="other-login" @click="way = 0">其他登录方式</div>
        <div class="register">注册账号 > </div>
      </div>
    </div>
    <div class="login-for-mail" v-show="way === 2 ">
      <div class="login-for-phone-wrapper">
        <img class="small-img" src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        <div class="input-phone">
          <input v-model="mail" type="text" placeholder="邮箱账号" maxlength="11">
        </div>
        <div class="get-phone-code">
          <input v-model="pwd" type="text" placeholder="密码" maxlength="6">
        </div>
        <div class="problem">
          <div class="has-problem">注册账号</div>
          <div class="use-pwd-login">忘记密码</div>
        </div>
        <div class="to-login" @click="toLogin">登录</div>
        <div class="other-login" @click="way = 0">其他登录方式</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {MessageBox} from 'mint-ui'
  export default {
    data () {
      return {
        way: 0,//0 普通页面 1 手机 2邮箱
        phone:null,
        code:null,
        mail:null,
        pwd:null,
        errorMsg: ''
      }
    },
    methods: {
      toLogin () {
        if (this.way===1) {
          const {phone, code} = this
          const phoneReg= /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/
          if (!phoneReg.test(phone)){
            this.errorMsg = '请输入正确格式的手机号'
          }
        }
      }
    },
    computed: {
      ...mapState(['downloadShow'])
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  #errorMsg
    color rgb(180, 40, 45)
    font-size (24/$rem)
  .person
    width 100%
    height: (667*2/$rem);
    background-color: #eee;
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
            background-color: #fff;
    .login-main
      width: 100%;
      .logo-large
        width 100%
        height: (204.97*2/$rem);
        padding (160/$rem) (240/$rem)
        margin-top (43.98*2/$rem)
        box-sizing border-box
        .large-img
          height 100%
          text-align center
      .login-phone
        width (335.03*2/$rem)
        height: (46.98*2/$rem);
        margin 0 (40/$rem)
        text-align center
        background-color: rgb(180, 40, 45)
        line-height (46.98*2/$rem)
        color white
        .icon-phone
          margin-right: (20/$rem);

      .login-mail
        width (335.03*2/$rem)
        height: (46.98*2/$rem);
        margin 0 (40/$rem)
        text-align center
        box-sizing border-box
        border (2/$rem)px solid rgb(180, 40, 45)
        line-height (46.98*2/$rem)
        margin-top (20/$rem)
        color rgb(180, 40, 45)
        .icon-mail
          margin-right: (20/$rem);
      .register-phone
        text-align center
        margin-top (20/$rem)
        font-size (28/$rem)
        font-weight lighter

    .login-for-phone
      width: 100%
      margin-top (63.98*2/$rem)
      height (667*2/$rem)
      background-color: #fff;
      box-sizing border-box
      padding 0 (40/$rem)
      .login-for-phone-wrapper
        display flex
        flex-direction column
        .small-img
          width: (96*2/$rem);
          height (31.98*2/$rem)
          margin 0 auto
        .input-phone
          bottom-border-1px(#eee)
          width: 100%
          height: (45.69*2/$rem);
          padding-left (15/$rem)
          margin-top: (170/$rem);
          >input
            width 100%
            display block
            box-sizing border-box
            margin (20/$rem) 0
        .get-phone-code
          bottom-border-1px(#eee)
          width: 100%
          height: (45.69*2/$rem);
          padding-left (15/$rem)
          margin-top: (40/$rem);
          display flex
          justify-content space-between
          align-items center
          >input
            display block
            box-sizing border-box
            margin (20/$rem) 0
          >div
            width: (84.11*2/$rem);
            height: (28.77*2/$rem);
            text-align center
            line-height (28.77*2/$rem)
            font-size (28/$rem)
            border (2/$rem) solid #eee
            border-radius (10/$rem)
        .problem
          display flex
          justify-content space-between
          margin-top: (40/$rem)
          font-size (28/$rem)
          margin-bottom: (30/$rem);
          .has-problem
            color #7e8c8d
        .to-login
          width (335.03*2/$rem)
          height: (46.98*2/$rem);
          margin 0 auto
          text-align center
          box-sizing border-box
          border-radius (10/$rem)
          line-height (46.98*2/$rem)
          margin-top (20/$rem)
          color white
          background-color:rgb(180, 40, 45)

        .other-login
          width (335.03*2/$rem)
          height: (46.98*2/$rem);
          margin 0 auto
          text-align center
          box-sizing border-box
          border (2/$rem)px solid rgb(180, 40, 45)
          line-height (46.98*2/$rem)
          margin-top (20/$rem)
          color rgb(180, 40, 45)
          font-size (28/$rem)
        .register
          text-align center
          margin-top (20/$rem)
          font-size (28/$rem)
          font-weight lighter
    .login-for-mail
      width: 100%
      margin-top (63.98*2/$rem)
      height (667*2/$rem)
      background-color: #fff;
      box-sizing border-box
      padding 0 (40/$rem)
      .login-for-phone-wrapper
        display flex
        flex-direction column
        .small-img
          width: (96*2/$rem);
          height (31.98*2/$rem)
          margin 0 auto
        .input-phone
          bottom-border-1px(#eee)
          width: 100%
          height: (45.69*2/$rem);
          padding-left (15/$rem)
          margin-top: (170/$rem);
          >input
            width 100%
            display block
            box-sizing border-box
            font-size (28/$rem)
            margin (20/$rem) 0
        .get-phone-code
          bottom-border-1px(#eee)
          width: 100%
          height: (45.69*2/$rem);
          padding-left (15/$rem)
          margin-top: (10/$rem);
          display flex
          justify-content space-between
          align-items center
          >input
            display block
            box-sizing border-box
            margin (20/$rem) 0
          >div
            width: (84.11*2/$rem);
            height: (28.77*2/$rem);
            text-align center
            line-height (28.77*2/$rem)
            font-size (28/$rem)
            border (2/$rem) solid #eee
            border-radius (10/$rem)
        .problem
          display flex
          justify-content space-between
          margin-top: (40/$rem)
          font-size (28/$rem)
          margin-bottom: (30/$rem);
          .has-problem
            color #7e8c8d
        .to-login
          width (335.03*2/$rem)
          height: (46.98*2/$rem);
          margin 0 auto
          text-align center
          box-sizing border-box
          border-radius (10/$rem)
          line-height (46.98*2/$rem)
          margin-top (20/$rem)
          color #7e8c8d
          background-color:rgb(180, 40, 45)

        .other-login
          width (335.03*2/$rem)
          height: (46.98*2/$rem);
          margin 0 auto
          text-align center
          box-sizing border-box
          border (2/$rem)px solid rgb(180, 40, 45)
          line-height (46.98*2/$rem)
          margin-top (20/$rem)
          color rgb(180, 40, 45)
          font-size (28/$rem)
        .register
          text-align center
          margin-top (20/$rem)
          font-size (28/$rem)
          font-weight lighter
</style>
