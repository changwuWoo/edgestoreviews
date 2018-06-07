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
            <h4 class="header-line">FORM EXAMPLES</h4>
          </div>

        </div>
        <div class="row">
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="panel panel-info">
              <div class="panel-heading">
                BASIC FORM
              </div>
              <div class="panel-body">
                <form role="form">
                  <div class="form-group">
                    <label>Enter Name</label>
                    <input class="form-control" type="text"/>
                    <p class="help-block">Help text here.</p>
                  </div>
                  <div class="form-group">
                    <label>Enter Email</label>
                    <input class="form-control" type="text"/>
                    <p class="help-block">Help text here.</p>
                  </div>
                  <div class="form-group">
                    <label>Text area</label>
                    <textarea class="form-control" rows="3"></textarea>
                  </div>
                  <button type="submit" class="btn btn-info">Send Message</button>
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
          <div class="col-md-12">
            &copy; 2014 Yourdomain.com | More Templates <a href="http://www.cssmoban.com/" target="_blank" title="模板之家">模板之家</a>
            - Collect from <a href="http://www.cssmoban.com/" title="网页模板" target="_blank">网页模板</a></div>

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
  import { mapState, mapGetters } from 'vuex'
  import api from '../config/api'

  export default {
    data () {
      return {}
    },
    computed: (
      mapState({
        loginToken: state => state.user.loginToken()
      })
    ),
    methods: {
      loginOut: function () {
      }
    }
  }
</script>

