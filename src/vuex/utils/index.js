/**
 * App通用配置
 */
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
const state = {
  loading: false,
  showToast: false,
  leftNavStatus: false,
  showSuccess: true,
  showFail: false,
  toastMsg: '操作成功',
  showTimePicker: false,
  alertMsg: '退出登录',
  showAlert: false
}

export default {
  state,
  actions,
  getters,
  mutations
}
