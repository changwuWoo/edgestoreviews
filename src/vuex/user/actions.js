                    /**
 * Created by Administrator on 2017/5/16.
 */
import * as types from './types'
import * as api from '../../config/api'
import util from '../../config/utils'
export default {
  /**
   * 用户登录
   */
  async setUserInfo ({commit}, res) {
    localStorage.setItem('userInfo', JSON.stringify(res))
    localStorage.setItem('loginStatus', true)
    commit(types.SET_USER_INFO, res)
    commit(types.SET_LOGIN_STATUS, true)
  },

  /**
   * 退出登录
   */
  async setSignOut ({commit}) {
    localStorage.removeItem('loginStatus')
    localStorage.removeItem('userInfo')
    commit(types.SET_LOGIN_STATUS, false)
    commit(types.SET_USER_INFO, {})
  },
  /*
   * 用户登录密码登录
   */
  async userLogin ({commit}, {fname, fpassword}) {
    api.accountLogin(fname, fpassword)
      .then(function (response) {
        console.log(response)
        util.token.save(response.token)
        console.log(util.token.get())
        commit(types.SET_LOGINTOKEN, response.token)
      })
  },

  accessTokenLogin ({commit}, {token}) {

  }
}

