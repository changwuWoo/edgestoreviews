/**
 * Created by Administrator on 2017/5/16.
 */
import * as types from './types'
export default {
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
