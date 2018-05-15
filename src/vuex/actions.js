/**
 * Created by Administrator on 2017/5/16.
 */
import * as types from './types'
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
  setLoadingState ({commit}, status) {
    commit(types.COM_LOADING_STATUS, status)
  },
  setNavState ({commit}, status) {
    commit(types.COM_NAV_STATUS, status)
  },
  showToast ({commit}, status) {
    commit(types.COM_SHOW_TOAST, status)
  },
  showSuccess ({commit}, status) {
    commit(types.COM_SHOW_SUCCESS, status)
  },
  showFail ({commit}, status) {
    commit(types.COM_SHOW_FAIL, status)
  },
  toastMsg ({commit}, str) {
    commit(types.COM_TOAST_MSG, str)
  },
  showAlert ({commit}, status) {
    commit(types.COM_SHOW_ALERT, status)
  },
  alertMsg ({commit}, str) {
    commit(types.COM_ALERT_MSG, str)
  },
  showTimePicker ({commit}, status) {
    commit(types.COM_SHOW_TIME_PICKER, status)
  }
}
