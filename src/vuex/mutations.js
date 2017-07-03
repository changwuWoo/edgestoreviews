/**
 * Created by Administrator on 2017/5/16.
 */
import * as types from './types'
export default {
  [types.SET_USER_INFO] (state, res) {
    //  alert('SET_USER_INFO')
    state.userInfo = res.data
  },

  [types.SET_LOGIN_STATUS] (state, status) {
    //  alert('SET_LOGIN_STATUS')
    state.loginStatus = status
  },

  [types.GET_USER_DATA] (state, res) {
    //  alert('GET_USER_DATA')
    state.userData = res.data
  },

  [types.SET_LOGINTOKEN] (state, res) {
    //  alert('SET_LOGINTOKEN')
    state.loginToken = res.Authorization
  },
  [types.REMOVE_TOKEN] (state) {
    state.loginToken = ''
  },
  [types.COM_LOADING_STATUS] (state, status) {
    state.loading = status
  },

  [types.COM_SHOW_TOAST] (state, status) {
    state.showToast = status
  },

  [types.COM_SHOW_SUCCESS] (state, status) {
    state.showSuccess = status
  },

  [types.COM_SHOW_FAIL] (state, status) {
    state.showFail = status
  },

  [types.COM_TOAST_MSG] (state, str) {
    state.toastMsg = str
  },

  [types.COM_NAV_STATUS] (state, status) {
    state.leftNavStatus = status
  },

  [types.COM_SHOW_TIME_PICKER] (state, status) {
    state.showTimePicker = status
  },

  [types.COM_SHOW_ALERT] (state, status) {
    state.showAlert = status
  },
  [types.COM_ALERT_MSG] (state, str) {
    state.alertMsg = str
  }
}
