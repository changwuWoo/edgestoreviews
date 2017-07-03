<template>
  <div>
    <div class="lay_top">
      <div class="lay_top_inner" style="width: 688px;">
        <h1 class="logo text_hide">登录</h1>
        <div class="lat_top_other">
          <a href="http://connect.qq.com/intro/·login" target="_blank" title="什么是QQ登录"><i class="icon_help_white"></i>登录</a>
          <span class="line">|</span>
          <a href="http://connect.qq.com/toc/auth_manager?from=auth" id="auth_manager_link" target="_blank"
             title="登录授权管理">授权管理</a>
          <span class="line">|</span>·
          <a href="http://connect.qq.com/manage" target="_blank" title="申请接入">申请接入</a>
        </div>
      </div>
    </div>
    <!-- @header End -->
    <div id="combine_page" style="width: 688px;">
      <div class="page_login combine_page_children float_left border_right">
        <div class="lay_login_form">
          <div style="width: 370px;height: 322px">
            <div>
              <div class="header">
                <span class="error_logo"></span>
                <span class="err_m"></span>
              </div>
              <div class="page_error">
                <span class="loading_wording"></span>
                <img src="" class="loading_img">
              </div>
              <div class="loading_tips">
                <span></span>
                <span></span>
              </div>
              <div class="qlogin_show">
                <span></span>
                <span></span>
              </div>
              <div>
                <span></span>
                <span></span>
              </div>
              <div>
                <span></span>
                <span></span>
              </div>
              <div id="authLogin" class="authLogin">
                <div class="authHeader" id="authHeader">
                  <div class="logo"></div>
                  <span class="title"></span>
                </div>
                <div class="authTips"></div>
                <div class="authWording">
                  <span>
                    <span>点击头像，确认帐号登录</span>
                    <span></span>
                  </span>
                </div>
                <div class="authInfo">
                  <div class="face" id="auth_area" tabindex="1" draggable="false" style="height: 200px;border: #9f75ff solid 1px;display: block">
                    <img id="auth_face">
                    <span id="auth_mengban" class=""></span>
                    <span class="uin" id="auth_uin"></span>
                    <span class="img_out_focus"></span>
                    <span class="nick" id="auth_nick"></span>
                    <div class="form-group">
                      <label>用户令牌登录</label>
                      <textarea v-model="loginToken" class="form-control" rows="3"></textarea>
                    </div>
                    <div @click="accessLogin"class="btn btn-success">令牌登录</div>
                  </div>
                </div>
                <div class="cancleAuthOuter" id="cancleAuthOuter">
                  <router-link to="/login">使用其他帐号</router-link>
                </div>
                <div class="bottom"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page_accredit combine_page_children float_left">
        <div class="lay_main" id="lay_main">
          <div class="lay_accredit_con">
            <p class="cnt_wording">该网站已有超过1万用户使用登录</p>
            <p class="app_site_wording"><a class="accredit_site" id="accredit_site_link"
                                           href="http://www.processon.com/"
                                           target="_blank">ProcessOn</a>将获得以下权限：</p>
            <div class="accredit_info" id="accredit_info">
              <ul class="accredit_info_op">
                <li class="select_all_li">
                  <input type="checkbox" id="select_all" class="checkbox oauth_checkbox_all" hidefocus="true"
                         checked="checked">
                  <label class="oauth_item_title" for="select_all">全选</label>
                </li>


                <li>
                  <input name="api_choose" hidefocus="true" type="checkbox" class="checkbox oauth_checkbox"
                         id="item_80901010" value="80901010" title="默认授权 不可更改" checked="" disabled="">
                  <label for="item_80901010" class="oauth_item_title">获得您的昵称、头像、性别</label>
                </li>


                <li>
                  <input name="api_choose" hidefocus="true" type="checkbox" class="checkbox oauth_checkbox"
                         id="item_2010"
                         value="2010" title="" checked="">
                  <label for="item_2010" class="oauth_item_title">读取、发表腾讯微博信息</label>
                </li>

              </ul>
            </div>
            <div class="oauth_tips_div">
              <p class="oauth_tips">授权后表明你已同意 <a href="http://connect.qq.com/agreement_chs" target="_blank">登录服务协议</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import util from '../config/utils'
  import {mapState, mapMutations} from 'vuex'
  import api from '../config/api'
  export default {
    data () {
      return {
        loginToken: ''
      }
    },
    mounted () {
      this.initData()
    },
    computed: {
    },
    methods: {
      initData: function() {
        this.loginToken = util.token.get()
      },
      accessLogin: function () {
        let data = {
          authorization: this.loginToken
        }
        let self = this
        api.accessTokenLogin(data)
          .then(response => {
            if (response.code === 200) {
              util.token.save(response.Authorization)
              self.$router.push({path: '/home', replace: true})
              console.log(response)
            }
            else {
              alert(response.msg)
              self.$router.push({path: '/login', replace: true})
            }
          }).catch(err => {
            console.log(err)
          })
      }
    }
  }
</script>
<style>
  @import "../assets/css/bootstrap.css";
  @import "../assets/css/font-awesome.css";
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, input, button, textarea, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: 100%
  }

  input, textarea, select, button {
    font-size: 12px;
    font-weight: normal;
    font-family: inherit
  }

  input[type="button"], input[type="submit"], select, button {
    cursor: pointer
  }

  table {
    border-collapse: collapse;
    border-spacing: 0
  }

  address, caption, cite, code, dfn, em, th, var {
    font-style: normal;
    font-weight: normal
  }

  li {
    list-style: none
  }

  caption, th {
    text-align: left
  }

  q:before, q:after {
    content: ''
  }

  abbr, acronym {
    border: 0;
    font-variant: normal
  }

  sup {
    vertical-align: text-top
  }

  sub {
    vertical-align: text-bottom
  }

  fieldset, img, a img, iframe {
    border-width: 0;
    border-style: none
  }

  iframe {
    overflow-x: hidden
  }

  img {
    -ms-interpolation-mode: bicubic
  }

  textarea {
    resize: vertical;
    overflow-y: auto
  }

  legend {
    color: #000
  }

  a {
    text-decoration: none
  }

  hr {
    height: 0
  }

  label {
    cursor: pointer
  }

  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block
  }

  html, body {
    background-color: #fff;
    color: #555;
    height: 100%;
    font-family: "Microsoft Yahei", Tahoma, sans-serif;
    line-height: 1.333;
    font-size: 12px;
    overflow: auto
  }

  a {
    color: #51b7ec
  }

  a:hover {
    text-decoration: underline;
    color: #1797db
  }

  .none {
    display: none
  }

  .show {
    display: block
  }

  .text_hide {
    line-height: 500px;
    overflow: hidden
  }

  .lay_main {
    width: 100% !important;
    margin: 0
  }

  .lay_main_single {
    width: 284px
  }

  .lay_top_inner {
    max-width: 688px;
    margin: 0 auto;
    min-width: 305px;
    width: auto !important;
    width: 688px
  }

  .lay_top {
    overflow: hidden;
    height: 48px;
    background: #51b7ec
  }

  .lay_top .logo {
    float: left;
    height: 60px
  }

  .lay_top .lat_top_other {
    float: right;
    margin-top: 15px;
    text-align: right;
    margin-right: 47px
  }

  .lay_top .lat_top_defined {
    right: 130px
  }

  .lay_top a.help {
    display: block;
    color: #fff;
    vertical-align: middle;
    margin-top: 4px
  }

  .lay_main .lay_login_form {
    width: 284px;
    margin: 38px auto 0 auto
  }

  .lay_main:before, .lay_main:after {
    content: ".";
    display: block;
    height: 0;
    visibility: hidden
  }

  .lay_main:after {
    clear: both
  }

  .lay_main {
    margin-left: 27px;
    *zoom: 1
  }

  .lay_footer {
    clear: both;
    border-top: 1px solid #e3e3e3
  }

  .lay_footer_l {
    float: left;
    margin-left: 158px
  }

  .lay_footer_r {
    position: relative;
    float: right
  }

  .lay_footer .line {
    color: #b5b5b5;
    padding: 0 3px
  }

  .lay_main_single .lay_login_form {
    float: none;
    width: auto
  }

  .lay_login_form {
    margin: 3px 0 0 30px;
    color: #a0a0a0
  }

  .lay_footer_inner {
    width: 590px;
    margin: 0 auto
  }

  .lay_footer {
    height: 55px;
    line-height: 55px
  }

  .lay_top .logo {
    width: 119px;
    height: 42px;
    margin-left: 40px;
    background-position: 0 0
  }

  .lat_top_other {
    color: #cfe1ea
  }

  .lat_top_other a {
    color: #fff
  }

  .lat_top_other a:hover {
    color: #c4e6f9
  }

  .lat_top_other a, .lat_top_other span {
    display: inline-block
  }

  .accredit_site {
    margin-right: 5px
  }

  .accredit_site:hover {
    color: #1797db
  }

  .accredit_info {
    margin-top: 12px;
    overflow: hidden;
    *zoom: 1;
    transition-property: height;
    transition-duration: .5s
  }

  .accredit_info_op li {
    height: 31px;
    border: 1px;
    color: #666;
    *zoom: 1
  }

  .accredit_info_op .ui_icon {
    position: absolute;
    left: 0;
    top: 8px;
    width: 30px;
    height: 30px
  }

  .accredit_info_op em {
    font-weight: 700
  }

  .page_accredit img {
    width: 64px;
    height: 64px;
    display: block;
    margin-bottom: 3px
  }

  .page_accredit .input_check {
    width: 13px;
    height: 13px;
    float: left;
    margin-top: 23px;
    margin-right: 5px;
    _margin-right: 2px
  }

  .icon_help_white {
    display: inline-block;
    *display: inline;
    zoom: 1;
    height: 11px;
    width: 11px;
    vertical-align: middle;
    margin-right: 5px;
    font-size: 0;
    background-position: 0 -49px
  }

  .lay_login_warn {
    padding: 80px 0
  }

  .fn_login_warn {
    width: 500px;
    margin: 0 auto;
    line-height: 40px;
    padding-left: 100px
  }

  .fn_login_warn p {
    overflow: hidden;
    *zoom: 1
  }

  .fn_login_warn .warn_txt {
    display: block;
    font-size: 15px;
    overflow: hidden;
    *zoom: 1;
    position: relative
  }

  .fn_login_warn .warn_tips {
    color: #a5a5a5
  }

  .icon {
    display: inline-block;
    background-repeat: no-repeat
  }

  .inline_block {
    display: inline-block;
    *display: inline;
    *zoom: 1
  }

  #combine_page {
    max-width: 688px;
    width: 688px;
    margin: 5px auto 0 auto
  }

  .float_left {
    float: left
  }

  .align {
    margin: 0 auto
  }

  #combine_page .page_login {
    width: 433px
  }

  #combine_page .page_accredit {
    width: 227px
  }

  .oauth_tips {
    margin-top: 10px
  }

  .oauth_app_logo {
    float: left;
    width: 64px;
    height: 64px
  }

  .oauth_app {
    height: 64px;
    width: 300px
  }

  .lay_footer_r a {
    margin: 0 0 0 10px
  }

  .page_error .lay_footer {
    top: 0
  }

  .lay_accredit_con {
    margin-top: 22px;
    *zoom: 1
  }

  .oauth_tips_div {
    margin-top: 30px
  }

  .oauth_item_title {
    display: block;
    float: left;
    height: 100%;
    line-height: 31px;
    margin-left: 10px
  }

  .oauth_checkbox_all, .oauth_checkbox {
    display: block;
    float: left;
    height: 100%;
    width: 13px
  }

  .packup_controler {
    cursor: pointer;
    color: #51b7ec;
    margin-left: 13px
  }

  .packup_controler:hover {
    color: #1797db
  }

  .select_all_li {
    border-top: 1px dotted #e2e2e2 !important;
    border-bottom: 1px dotted #e2e2e2 !important
  }

  .border_right {
    border-right: 1px dotted #e3e3e3
  }

  .packup {
    margin-top: 7px
  }

  .pack_icon {
    width: 0;
    height: 0;
    border-width: 5px;
    border-style: solid;
    border-color: white;
    overflow: hidden;
    float: left;
    margin-left: 1px
  }

  .pack_icon_up {
    border-bottom-color: #51b7ec
  }

  .pack_icon_up_hover {
    border-bottom-color: #1797db !important
  }

  .pack_icon_down {
    border-top-color: #51b7ec;
    margin-top: 5px
  }

  .pack_icon_down_hover {
    border-top-color: #1797db !important
  }

  .red {
    color: red
  }

  .hide {
    display: none
  }

  .vi_hide {
    visibility: hidden
  }

  .lay_login_form .loading_tips, .lay_login_form .wording_tips {
    text-align: center
  }

  .lay_login_form .qlogin_show {
    width: 100%;
    overflow: hidden;
    position: relative;
    text-align: center;
    margin-top: 20px
  }

  .lay_login_form .qlogin_show .face {
    display: inline-block;
    height: 120px;
    width: 100px;
    text-align: center;
    position: relative;
    cursor: pointer;
    outline: 0;
    text-decoration: none;
    color: #a0a0a0
  }

  .lay_login_form .qlogin_show img {
    width: 80px;
    height: 80px;
    position: absolute;
    top: 10px;
    left: 9px;
    border: 0
  }

  .lay_login_form .qlogin_show .nick {
    display: inline-block;
    text-align: center;
    position: absolute;
    top: 100px;
    left: 0;
    height: 20px;
    line-height: 18px;
    vertical-align: middle;
    width: 100%;
    overflow: hidden
  }

  .lay_login_form .qlogin_show .uin {
    background: #000;
    height: 20px;
    width: 80px;
    line-height: 20px;
    position: absolute;
    left: 10px;
    top: 72px;
    filter: Alpha(opacity=50);
    opacity: .5;
    color: #fff;
    border-radius: 0 0 4px 4px
  }

  .lay_login_form .qlogin_show .img_out_focus {
    width: 88px;
    height: 88px;
    position: absolute;
    top: 5px;
    left: 5px;
  }

  .img_out_focus_focus {
    background-position: -1px -187px !important
  }

  .lay_login_form .qlogin_show .vip_logo {
    width: 26px;
    height: 12px;
    position: absolute;
    top: 11px;
    left: 11px;
  }

  .wording_tips a.ch_uin {
    width: 80px;
    height: 30px;
    display: block;
    margin: 0 auto
  }

  .wording_tips a.ch_uin:hover {
    background-position: 0 -110px
  }

  .lay_login_form .wording_timeout {
    margin-top: 5px
  }

  .lay_login_form .wording_ch {
    margin-top: 15px
  }

  .cnt_wording {
    margin-bottom: 16px
  }

  .app_site_wording {
    border-top: 1px dotted #e2e2e2;
    padding-top: 12px
  }

  .icon-i {
    display: block;
    width: 40px;
    height: 40px;
    position: absolute;
    left: 120px
  }
</style>
