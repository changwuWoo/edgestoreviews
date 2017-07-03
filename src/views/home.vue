<template>
  <div>
    <div class="navbar navbar-inverse set-radius-zero">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">

            <img src="../assets/img/logo.png"/>
          </a>

        </div>

        <div class="right-div">
          <a @click="loginOut" class="btn btn-info pull-right">LOG ME OUT</a>
        </div>
      </div>
    </div>
    <!-- LOGO HEADER END-->
    <section class="menu-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="navbar-collapse collapse ">
              <ul id="menu-top" class="nav navbar-nav navbar-right">
                <li><a href="#">DASHBOARD</a></li>

                <li><a href="#">FORMS</a></li>
                <li>
                  <a href="#" class="dropdown-toggle" id="ddlmenuItem" data-toggle="dropdown">UI ELEMENTS <i
                    class="fa fa-angle-down"></i></a>
                  <ul class="dropdown-menu" role="menu" aria-labelledby="ddlmenuItem">
                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">UI ELEMENTS</a></li>
                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#">EXAMPLE LINK</a></li>
                  </ul>
                </li>
                <li><a href="#"> TABS & PANELS</a></li>
                <li><a href="#" class="menu-top-active">TABLES</a></li>
                <li><a href="#">BLANK PAGE</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- MENU SECTION END-->
    <div class="content-wrapper">
      <div class="container">
        <div class="row pad-botm">
          <div class="col-md-12">
            <h4 class="header-line">用户名密码登录成功结果</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="panel panel-info">
              <div class="panel-heading">
                用户名密码登录成功结果
              </div>
              <div class="panel-body">
                <form role="form">
                  <div class="form-group">
                    <label>得到的令牌</label>
                    <textarea v-model="loginToken" class="form-control" rows="3"></textarea>
                  </div>
                  <button type="submit" class="btn btn-info">请求个人信息</button>

                </form>
              </div>
            </div>
          </div>
        </div>
        <!--/.ROW-->
      </div>
    </div>
    <!-- CONTENT-WRAPPER SECTION END-->
    <section class="footer-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12"></div>
        </div>
      </div>
    </section>
  </div>
</template>
<style>
  @import "../assets/css/bootstrap.css";
  @import "../assets/css/font-awesome.css";
  @import "../assets/css/style.css";
</style>
<script>
  import {mapState, mapGetters, mapMutations} from 'vuex'
  import api from '../config/api'
  import util from '../config/utils'
  export default{
    data () {
      return {
        loginToken: ''
      }
    },
    computed: {},
    mounted () {
      this.initData()
    },
    methods: {
      loginOut: function () {
      },
      initData: function () {
        this.loginToken = util.token.get()
        console.log(this.loginToken)
        let data
        data = {
          authorization: this.loginToken
        }
      }
    }
  }
</script>

