<template>
  <div class="container">
    <div class="row text-center " style="padding-top:100px;">
      <div class="col-md-12">
      </div>
    </div>
    <div class="row ">
      <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
        <div class="panel-body">
          <form role="form">
            <hr/>
            <h5>输入用户名以及密码验证登录</h5>
            <br/>
            <div class="form-group input-group">
              <span class="input-group-addon"><i class="fa fa-tag"></i></span>
              <input type="text" class="form-control" placeholder="Your Username " v-model="master.fname"/>
            </div>
            <div class="form-group input-group">
              <span class="input-group-addon"><i class="fa fa-lock"></i></span>
              <input type="password" class="form-control" placeholder="Your Password" v-model="master.fpassword"/>
            </div>
            <div class="form-group">
              <label class="checkbox-inline">
                <input type="checkbox" v-model="checked" class="remember"/> 记住我
              </label>
              <span class="pull-right">
                <a href="index.html">忘记密码? </a>
              </span>
            </div>
            <div class="form-group">
              <input class="btn btn-primary btn-danger" @click="login" value="现在登录">
            </div>
            <hr/>
            还木有注册 ? <a href="index.html">点我 </a> 或者 现在去 <a href="index.html">首页</a>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState, mapGetters} from 'vuex'
  import {accountLogin} from '../config/api'
  import {baseUrl} from '../config/env'
  export default {
    name: 'login',
    data () {
      return {
        master: {
          fname: 'eedegWoo',
          fpassword: 'eedgeWoo0608'
        },
        checked: 'checked'
      }
    },
    computed: 
      ...mapGetters({
        'loginToken'
    }),
    methods: {
      async login () {
        this.$store.dispatch('userLogin', {fname: this.master.fname, fpassword: this.master.fpassword})
      }
    }
  }
</script>
<style>
  @import "../assets/css/bootstrap.css";
  @import "../assets/css/font-awesome.css";
</style>
