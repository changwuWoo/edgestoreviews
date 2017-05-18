/**
 * Created by Administrator on 2017/5/16.
 */
import * as types from './types'
export default {
  [types.SET_USER_INFO] (state, res) {
    state.userInfo = res
  },

  [types.SET_LOGIN_STATUS] (state, status) {
    state.loginStatus = status
  },

  [types.GET_USER_DATA] (state, res) {
    state.userData = res
  },

  [types.SET_LOGINTOKEN] (state, res) {
    state.loginToken = res.token
  }
}
