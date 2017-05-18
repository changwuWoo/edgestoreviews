/**
 * Created by Administrator on 2017/5/16.
 */
import * as types from './types'
export default {
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
